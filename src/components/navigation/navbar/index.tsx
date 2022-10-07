import React from 'react';
import { useNavigate } from 'react-router-dom';

const navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-red-800 p-3'>
            <div className='flex justify-between'>
                <div className='text-lg font-bold text-white flex-initial '>Assist Health </div>
                <div className='flex flex-row'>
                <div className='pr-8  text-white' onClick={() => {navigate('/dashboard')}}>Dashboard</div>
                <div className='pr-8  text-white' onClick={() => {navigate('/account')}}>Account</div>
                <div className='pr-8  text-white' onClick={() => {navigate('/classfitness')}}>Class</div>
                <div className='pr-8  text-white' onClick={() => {navigate('/exercise')}}>Exercise</div>
                <div className='pr-8  text-white' onClick={() => {navigate('/mytrainer')}}>My trainer</div>
                <div className='pr-8  text-white' onClick={() => {navigate('/mybooking')}}>My booking</div>
                </div>
            </div>
        </div>
        
    );
};

export { navbar as Navbar };