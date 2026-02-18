import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './components/layout/layout';
import Homee from './pages/home';
import Fees from './pages/Fees';
import Rooms from './pages/Rooms';
import Complaints from './pages/Complaints';
import Staff from './pages/Staff';
import { Import } from 'lucide-react';
import Admin from './pages/Admin';
import Login from './pages/login';
import Register from './pages/Register';
import Complaint from './pages/Complaint';
function App(){
  return (
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homee/>}/>
          <Route path='fees' element={<Fees/>}/>
          <Route path='rooms' element={<Rooms/>}/>
          <Route path='complaints' element={<Complaints/>}/>
          <Route path='complaint' element={<Complaint/>}/>
          <Route path='staff' element={<Staff/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>
      </Routes>
  );
}

export default App;