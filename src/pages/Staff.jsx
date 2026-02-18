import { Ambulance,Siren,Lock, UserRound, CircleUser } from 'lucide-react'
import React from 'react'

const Staff = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-6 '>
            <h1 className='text-2xl font-bold text-gray-800 border-b py-2 flex items-center gap-2'><CircleUser/>Hostel Staff</h1>
            <p className='text-lg mt-1 text-gray-500 py-1'>Contact hostel management and support staff</p>
        </div>
        <div>
            <div className='flex justify-center mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl '>
                <div className=' h-40 rounded-2xl shadow-lg hover:shadow-xl transition border flex flex-col justify-baseline items-center pt-4'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Cheif Warden</h4>
                    <p className='text-2xl font-bold'>Mr . Gopi Krishna</p>
                    <p>91XXXXXXX</p>
                </div>
                <div className=' h-40 rounded-2xl shadow-lg hover:shadow-xl transition border  flex flex-col justify-center items-center pt-2'>
                    <h4 className='text-xl mb-2 border-b font-semibold'>Assistent Wardens</h4>
                    <p className='text-2xl font-semibold'>Krishna Reddey</p>
                    <p className='border-b'>95XXXXXXXX</p>
                    <p className='font-semibold text-2xl'>Vinod</p>
                    <p>91XXXXXXXX</p>
                </div>
                <div className=' h-40 rounded-2xl shadow-lg hover:shadow-xl transition border flex flex-col justify-center items-center'>
                    <h4 className='text-xl mb-3 border-b font-semibold'>
                        Emerngency contacts
                    </h4>
                    <div className='text-lg' >
                        <p > Medical : +91 102</p>
                        <p >Security : +91 100</p>
                        <p>Fire Control : +91 101</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Staff