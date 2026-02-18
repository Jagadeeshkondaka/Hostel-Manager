import React from 'react'
import { Bed, CreditCard, Home, MessageSquare, User, UserCheck ,Settings, LogOut } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate=useNavigate();
  return (
    <div className='w-64 h-screen bg-blue-900 text-white flex flex-col'>
        <div>
            <h1 className='text-2xl uppercase font-bold p-6 border-b cursor-pointer'>Hostel manager</h1>
            <ul className='mt-6 px-4 space-y-2'>
                    <li onClick={()=>navigate('/')} className='flex items-center rounded-lg p-3 gap-3 hover:bg-blue-700 cursor-pointer'><Home size={18}/>Home</li>
                    <li onClick={()=>navigate('/rooms')} className='flex items-center rounded-lg p-3 gap-3 hover:bg-blue-700 cursor-pointer'><Bed size={18}/>Rooms</li>
                    <li onClick={()=>navigate('/fees')} className='flex items-center rounded-lg p-3 gap-3 hover:bg-blue-700 cursor-pointer'><CreditCard size={18}/>Fees</li>
                    <li onClick={()=>navigate('/complaints')} className='flex items-center rounded-lg p-3 gap-3 hover:bg-blue-700 cursor-pointer'><MessageSquare size={18}/>Complaints</li>
                    <li onClick={()=>navigate('/staff')} className='flex items-center rounded-lg p-3 gap-3 hover:bg-blue-700 cursor-pointer'><UserCheck size={18}/>Staff</li>
            </ul>
        </div>
        <div className='mt-40 p-4 border-t space-y-2'>
            <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 cursor-pointer'>
                <Settings size={18}/>
                Settings
            </div>
            <div onClick={()=> navigate('/Login')} className='flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 cursor-pointer'><LogOut size={18}/>Logout</div>
        </div>
    </div>
  )
}

export default Sidebar