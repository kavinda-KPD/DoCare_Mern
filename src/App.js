import React from 'react';
import { Button, Flex } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/' element={<Home />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;
