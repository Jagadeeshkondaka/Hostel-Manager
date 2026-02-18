import { Bed } from 'lucide-react'
import React from 'react'

const Rooms = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-6 '>
            <h1 className='text-2xl font-bold text-gray-800 border-b py-2 flex items-center gap-2'><Bed/>Room Details</h1>
            <p className='text-lg mt-1 text-gray-500 py-1'>view your Room Information and Facilities</p>
        </div>
        <div className='mt-8'>
            <div className='flex justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-4xl mt-6 '>
                <div className=' h-60 rounded-2xl shadow-lg hover:shadow-xl transition border flex flex-col justify-baseline items-center py-6'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Room No : 305</h4>
                    <p className='text-xl '>Block B <br/>2nd Floor</p>
                </div>
                <div className=' h-60 rounded-2xl shadow-lg hover:shadow-xl transition border  flex flex-col justify-baseline items-center py-6'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Room type</h4>
                    <p className='text-xl '>Double sharing</p>
                </div>
                <div className=' h-60 rounded-2xl shadow-lg hover:shadow-xl transition border  flex flex-col justify-baseline items-center py-6'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>
                        Room Facilities
                    </h4>
                    <ul className='text-xl'>
                        <li>Bed</li>
                        <li>Fan</li>
                        <li>Study Table</li>
                        <li>Locker</li>
                    </ul>
                </div>
                <div className=' h-60 rounded-2xl shadow-lg hover:shadow-xl transition border flex flex-col justify-baseline items-center py-6'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>
                        Roommates
                    </h4>
                    <p className='text-xl'><span className='px-2'>Abhishek</span><br/>ECE - 4th year</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Rooms