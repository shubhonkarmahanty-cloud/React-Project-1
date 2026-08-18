import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext, useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

 const [user,setUser]=useState(null)

 const handleLogin =(email,pasword)=>{
  if(email == 'admin@me.com' && pasword == '123'){
    // console.log('this is admin')
    setUser('admin')
  }else if(email == 'user@me.com' && pasword == '123'){
    // console.log("this is user")
    setUser('employee')
  }
  else{
    alert("invalid")
  }
 }
 
 const data = useContext(AuthContext)
 console.log(data)



  return (
  <>
  {!user? <Login handleLogin = {handleLogin} /> : ''}
  {user == 'admin'? <AdminDashboard /> : <EmployeDashboard />}
  </>
  )
}

export default App
App