import React from 'react';
import { Button, Flex } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
