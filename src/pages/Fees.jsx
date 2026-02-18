import { Wallet } from 'lucide-react'
import React from 'react'

const Fees = () => {
  return (
    <div >
        <div className='flex flex-col justify-center items-center mt-10 '>
            <h1 className='text-2xl font-bold text-gray-800 border-b py-2 flex items-center gap-2'><Wallet/>Fees Overview</h1>
            <p className='text-lg mt-1 text-gray-500 py-1'>view your Fee Status and history</p>
        </div>
        <div className='flex justify-center mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl '>
                <div className='bg-white h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Total Fee</h4>
                    <p className='text-2xl font-bold'>60,000</p>
                </div>
                <div className='bg-white h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Amount Paid</h4>
                    <p className='text-2xl font-bold text-green-500'>45,000</p>
                </div>
                <div className='bg-white h-40 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100 flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>
                        Due Amount
                    </h4>
                    <p className='text-3xl font-bold text-red-500'>15,000</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fees