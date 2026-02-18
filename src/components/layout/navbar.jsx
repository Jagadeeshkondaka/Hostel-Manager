import { Bell, CircleUser, Search, User } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=' bg-blue-900 text-white shadow-md px-8 py-4 flex justify-between items-center'>
        <h2 className='text-2xl font-semibold'>Gowthami Hostel</h2>
        <div className='flex items-center gap-10'>
            <input type='search '></input>
            <Search className=' cursor-pointer  hover:bg-blue-600 hover:text-white transition'/>
            <Bell className=' cursor-pointer  hover:bg-blue-600 hover:text-white transition'/>
            <div className='flex items-center gap-3 cursor-pointer'>
                <CircleUser className="w-8 h-8 rounded-full  hover:bg-blue-600 hover:text-white transition" />
                <span onClick={()=>(navigate('/Admin'))} className='text-gray-700 p-2 rounded-sm bg-gray-300 hover:bg-gray-600 hover:text-white transition ml-4'>Admin</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar