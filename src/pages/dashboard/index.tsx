import React from 'react';
import Dashboard from 'assets/images/Dashboard.png';
import Class from 'assets/images/class.png'
import Exercise from 'assets/images/exercise.png'
import Trainer from 'assets/images/trainer.png'
import { useNavigate } from 'react-router-dom';

const dashboard = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-black pb-8'>
        <div><img src={ Dashboard } className="w-full"/></div>
        <br />
        <div className='grid gap-x-8 gap-y-4 grid-cols-3'>
            <div className='pl-3' onClick={() => { navigate('/classfitness'); }}><img src={ Class } className="w-30"/></div>
            <div className='px-1.5' onClick={() => { navigate('/exercise')}}><img src={ Exercise } className="w-30"/></div>
            <div className='pr-3' onClick={() => { navigate('/trainer')}}><img src={ Trainer } className="w-30"/></div>
        </div>
        </div>
    );
};

export { dashboard as Dashboard };
