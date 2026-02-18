import { Home, UtensilsCrossed } from 'lucide-react'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Homee = () => {
    const Navigate=useNavigate();
  return (
    <div>
        <div className=' p-2 mb-6'>
            <h2 className='text-2xl font-semibold text-gray-800'>Jagadeesh</h2>
            <p className='text-gray-500 text-xl mt-1'>Block-B</p>
            <p className='text-gray-500 text-xl mt-1'>Room No : 305</p>
        </div>
        <div className='flex flex-wrap gap-6 mb-8'>
            <div className=' w-full md:w-[48%] h-64 p-6 rounded-2xl shadow:xl border   hover:shadow-xl transition flex flex-col justify-center items-center'>
                <h3 className='text-2xl font-semibold text-gray-800 mb-4 border-b pb-4 flex items-center gap-2'><Home/>Hostel Timings</h3>
                <div className='space-y-3 text-gray-700 text-lg'>
                    <p><span className='font-semibold'>Monday - Friday</span> 6:00 AM - 10:00 PM</p>
                    <p><span className='font-semibold'>saturday and sunday</span> 5:00 AM - 11:00 PM</p>
                </div>
            </div>
            <div className=' w-full md:w-[48%] h-64 p-6 rounded-2xl border shadow:xl hover:shadow-xl transition flex flex-col justify-center items-center '>
                <h3 className='text-2xl font-semibold text-gray-800 mb-6 border-b p-4 flex items-center gap-2'><UtensilsCrossed/>Mess Timings</h3>
                <ul className='space-y-2 text-lg text-gray-800'>
                    <li><span className='font-semibold'>Breakfast</span> 7:00 AM - 10:00 AM</li>
                    <li><span className='font-semibold'>Launch</span> 12:00 PM - 2:30 PM</li>
                    <li><span className='font-semibold'>Dinner</span> 7:00 PM - 10:00 PM</li>
                </ul>
            </div>
        </div>
        <div className='flex justify-center mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl '>
                <div onClick={()=>(Navigate('/Rooms'))} className='bg-gray-100 h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center cursor-pointer'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Rooms NO</h4>
                    <p className='text-2xl font-bold'>305</p>
                </div>
                <div onClick={()=>(Navigate('/Fees'))} className='bg-gray-100 h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Fees</h4>
                    <p className='text-2xl font-bold'>Paid</p>
                </div>
                <div onClick={()=>(Navigate('/Complaints'))} className='bg-gray-100 h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>
                        Active Complaints
                    </h4>
                    <p className='text-3xl font-bold text-red-500'>1</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homee