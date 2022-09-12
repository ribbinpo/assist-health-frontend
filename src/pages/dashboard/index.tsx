import React from 'react';
import Dashboard from 'assets/images/Dashboard.png';
import Class from 'assets/images/class.png'
import Exercise from 'assets/images/exercise.png'
import Trainer from 'assets/images/trainer.png'
const dashboard = () => {
    return (
        <div>
        <div><img src={ Dashboard } className="w-full"/></div>
        <br />
        <div className='grid gap-x-8 gap-y-4 grid-cols-3'>
            <div><img src={ Class } className="w-30"/></div>
            <div><img src={ Exercise } className="w-30"/></div>
            <div><img src={ Trainer } className="w-30"/></div>
        </div>
        </div>
    );
};

export { dashboard as Dashboard };
