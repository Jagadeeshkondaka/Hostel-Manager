import React from 'react'

const Register = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gray-300'>
        <h1 className='text-6xl font-bold text-violet-500 text-primary mb-10'>Hostel Manager</h1>
        <form  className='bg-white p-8 shadow rounded-lg w-80'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>
            <input className='border mb-4 p-2 rounded-2xl w-full' type='text' placeholder='Full name'/>
            <input className='border mb-4 p-2  w-full rounded-2xl' type='email' placeholder='Email'/>
            <input className='border mb-4 p-2  w-full rounded-2xl' placeholder='Phone Number'/>
            <input className='border mb-4 p-2  w-full rounded-2xl' placeholder='Block'/>
            <input className='border mb-4 p-2  w-full rounded-2xl' placeholder='Room No'/>
            <button className='border mb-2 p-2  w-full rounded-full bg-green-600 cursor-pointer text-white'>Register</button>
        </form>
    </div>
  )
}

export default Register