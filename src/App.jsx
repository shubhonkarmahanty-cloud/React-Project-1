import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

 const [user,setUser]=useState(null)
 const [logInUserData,setLoginUserData] =useState(null)
 const authData = useContext(AuthContext)
//  console.log(authData)
 useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
  // console.log(loggedInUser)
  if(loggedInUser){
  const userData = JSON.parse(loggedInUser)
  // console.log(userData.role)
  setUser(userData.role)
  setLoginUserData(userData.data)

  }
 },[])
 const handleLogin =(email,pasword)=>{
  if(email == 'admin@me.com' && pasword == '123'){
    // conso le.log('this is admin')
    setUser({role:'admin'})
    localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
  }else if(authData){
    // console.log("this is user")
     const employee = authData.employees.find((e)=> email == e.email && e.password == pasword)
    //  console.log(employee)
     if(employee){
      setUser('employee')
      setLoginUserData(employee)
       localStorage.setItem('loggedInUser', JSON.stringify({role:'employee',data:employee}))
      }
  }
  else{
    alert("invalid")
  }
 }
//  console.log(user)
// console.log(logInUserData)



  return (
  <>
  {!user? <Login handleLogin = {handleLogin} /> : ''}
  {user == 'admin'? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeDashboard changeUser={setUser} data={logInUserData}/> : null)}
  </>
  )
}

export default App
App