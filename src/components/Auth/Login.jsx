import React, { useState } from 'react'

function Login({handleLogin}) {
  // console.log(handleLogin)

    const [email,setEmail] =useState("")
    const [pasword,setPasword] =useState('')
    const submit = (e)=>{
        e.preventDefault()
      // console.log(email)
      // console.log(pasword)
      handleLogin(email,pasword)
      setEmail("")
      setPasword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gray-500'>
      <div className='border-2  p-20 rounded-2xl bg-black'>
        <form onSubmit={submit} className='flex flex-col items-center justify-center text-white font-bold'>
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
             required 
             className='border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full ' type="email" placeholder='Enter Your Email'
              />
            <input
            value={pasword}
             onChange={(e)=>{
                setPasword(e.target.value)
            }} 
            required
             className='border-2 mt-4 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full ' type="password" placeholder='Enter Pasword'
              />
            <button
            occl
             className='bg-green-400 mt-5 border-emerald-600 py-3 w-full text-xl outline-none rounded-full '>
                Login
             </button>
        </form>
      </div>
    </div>
  )
}

export default Login
