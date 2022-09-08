import React from 'react';
import { Navbar } from '../components';
import { Outlet } from 'react-router-dom';

const layout = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Outlet />
      </div>
    </>
  );
};

export { layout as Layout };