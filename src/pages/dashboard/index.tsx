import React from 'react';
import Dashboard from 'assets/images/Dashboard.png';
import Class from 'assets/images/class.png'
import Exercise from 'assets/images/exercise.png'
import Trainer from 'assets/images/trainer.png'
import { useNavigate } from 'react-router-dom';
import Logo from 'assets/images/Logo.png';

const dashboard = () => {
    const navigate = useNavigate();
    return (
        
        <div className='bg-black'>
       
        <div className='justify-items-center'>
        <div><img src={ Dashboard } className="w-full"/></div>
        <br />
        <div className="px-56">
        <div className='grid gap-x-8 gap-y-4 grid-cols-3'>
            <div className='pl-3' onClick={() => { navigate('/classfitness'); }}><img src={ Class } className="w-30"/></div>
            <div className='px-1.5' onClick={() => { navigate('/exercise')}}><img src={ Exercise } className="w-30"/></div>
            <div className='pr-3' onClick={() => { navigate('/trainer')}}><img src={ Trainer } className="w-30"/></div>
        </div>
        </div>
        </div>
        <div className='bg-red-800 p-3 w-full mt-8 py-8'>
            <div className='flex justify-center items-center'>
                {/* <div><img src={ Logo } className="w-14" /></div> */}
                <div className='text-white pl-2'> © 2022 Assist Health | By Nattapong B.</div>
            </div>
        </div>
        
        </div>
    );
};

export { dashboard as Dashboard };
