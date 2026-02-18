import { Trash } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
        const navigate=useNavigate();
    return (

    <div>
        <div className='flex flex-col justify-center items-center mt-6 '>
            <h1 className='text-2xl font-bold text-gray-800 border-b py-2 flex items-center gap-2'>Admin Dashboard</h1>
            <p className='text-lg mt-1 text-gray-500 py-1'>Overview of hostel management</p>
            <div className='flex justify-center gap-8' >
                <button onClick={()=>(navigate('/Register'))} className='bg-green-600 text-white rounded-xl px-5 py-2 shadow-md hover:bg-green-700  transition mt-6 hover:cursor-pointer'>+ Add Student</button>
                <button className='bg-red-600 text-white rounded-xl px-5 py-2 shadow-md hover:bg-red-700  transition mt-6 hover:cursor-pointer flex items-center gap-2'><Trash size={18}/>Remove Student</button>
            </div>
            
        </div>
        <div className='flex justify-center mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl '>
                <div className='bg-white h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Total Students</h4>
                    <p className='text-2xl font-bold'>110</p>
                </div>
                <div className='bg-white h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Total Rooms</h4>
                    <p className='text-2xl font-bold'>60</p>
                </div>
                <div className='bg-white h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>
                        Pending Fees
                    </h4>
                    <p className='text-2xl font-bold'>15</p>
                </div>
                <div className='bg-white h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Active Complaints</h4>
                    <p className='text-2xl font-bold '>5</p>
                </div>
                 <div className='bg-white h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Rooms Filled</h4>
                    <p className='text-2xl font-bold '>55</p>
                </div>
                 <div className='bg-white h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Avilable rooms</h4>
                    <p className='text-2xl font-bold '>5</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin