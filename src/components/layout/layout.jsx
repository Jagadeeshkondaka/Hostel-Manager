import Sidebar from './sidebar'
import Navbar from './navbar'
import { Outlet } from "react-router-dom";

const Layout = ({Children}) => {
  return (
    <div className='flex bg-gray-300 min-h-screen'>
        <Sidebar/>
        <div className='flex-1 flex flex-col'>
            <Navbar/>
            <main className='p-8'>
              <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default Layout