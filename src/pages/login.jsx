import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    const Navigate=useNavigate();
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gray-300'>
        <h1 className='text-6xl font-bold text-violet-500 text-primary mb-10'>Hostel Manager</h1>

        <form className='bg-white p-8 shadow rounded-lg w-80'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
            <input className='border p-2 mb-4 w-full rounded-xl' type='email' placeholder='enter your email'/>
            <input className='border p-2 mb-4 w-full rounded-xl' type='password' placeholder='password'/>
            <p className='cursor-pointer text-blue-400 text-lg text-center mb-4 hover:underline'>Forgot Password ?</p>
            <button className='cursor-pointer rounded-full bg-blue-700 text-white w-full p-2'>Login</button>
            <p className='translate-y-1 py-2 px-3 text-center hover:underline cursor-pointer'>Don't have an account ?</p>
            <button onClick={()=>Navigate('/register')} className='w-full bg-green-600 text-white  rounded-full p-2'>Register</button>
        </form>
    </div>
  )
}

export default Login