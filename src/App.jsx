import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext, useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

 const [user,setUser]=useState(null)
 const [logInUserData,setLoginUserData] =useState(null)
 const authData = useContext(AuthContext)
//  console.log(authData)


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
       localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
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
  {user == 'admin'? <AdminDashboard /> : (user == 'employee' ? <EmployeDashboard data={logInUserData}/> : null)}
  </>
  )
}

export default App
App