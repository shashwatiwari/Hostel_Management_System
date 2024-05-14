import React from 'react';
import Home from './component/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './component/Login';
import Register from './component/Register';
import AdminOption from './component/AdminOption';
import HostelSelect from './component/HostelSelect';
import BlockSelect from './component/BlockSelect';
import SelectFloor from './component/SelectFloor';
import StudentForm from './component/StudentForm';
import StudentData from './component/StudentData';
import RoomGrid from './component/Room';
import StudentLoginForm from './component/StudentLogin';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<AdminOption />} />
        <Route path='/hostelselect' element={<HostelSelect />} />
        <Route path='/blockselect' element={<BlockSelect />} />
        <Route path='/blockselect/selectfloor' element={<SelectFloor />} />
        <Route path='/form' element={<StudentForm />} />
        <Route path='/data' element={<StudentData />} />
        <Route path='/room' element={<RoomGrid />} />
        <Route path='/student-login' element={<StudentLoginForm />} />
      </Routes>
    </>
  );
}

export default App;
