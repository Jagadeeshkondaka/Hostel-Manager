import { NotebookPen } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Complaints = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-6 '>
            <h1 className='text-2xl font-bold text-gray-800 border-b py-2 flex items-center gap-2'><NotebookPen/>Complaints</h1>
            <p className='text-lg mt-1 text-gray-500 py-1'>View and Manage your Complaints</p>
            <button onClick={()=>navigate('/Complaint')} className='bg-blue-600 text-white rounded-xl px-5 py-2 shadow-md hover:bg-blue-800  transition mt-6 hover:cursor-pointer'>Create a Complaint</button>
        </div>
        <div className='flex justify-center mt-30'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl '>
                <div className='bg-white h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Total Complaints</h4>
                    <p className='text-2xl font-bold'>3</p>
                </div>
                <div className='bg-white h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Active</h4>
                    <p className='text-2xl font-bold text-red-500'>1</p>
                </div>
                <div className='bg-white h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>
                        Resolved
                    </h4>
                    <p className='text-3xl font-bold text-green-500'>2</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Complaints