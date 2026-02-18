import React from 'react'

const Complaint = () => {
  return (
    <div className=' flex flex-col items-center justify-baseline bg-gray-300'>
        <h2 className='text-4xl font-bold mb-8'>Create a complaint</h2>
        <form className='bg-white p-8 shadow rounded-lg w-120 '>
            <input className='border w-full p-2 mb-4 rounded-2xl' type='text' placeholder='Name'/>
            <input className='border w-full p-2 mb-4 rounded-2xl' type='' placeholder='Room no'/>
            <input className='border w-full p-2 rounded-2xl h-40 text-xl mb-4' placeholder='write your complaint'/>
            <button className='bg-green-500 text-white p-2 rounded-full w-full '>Submit</button>
        </form>
    </div>
  )
}

export default Complaint