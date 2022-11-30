import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccountStore } from 'store';


const navbar = () => {
    const setToken = useAccountStore((state=>state.setToken))
    const token = useAccountStore((state=>state.token))
    const logout = () => {
        setToken("")
        navigate('/auth/login')
    }
    
    

    const navigate = useNavigate();
    return (
        <div className='bg-red-800 p-3 w-full'>
            {token === "" ?  (<div></div>) : (<div className='flex justify-between'>
                <div className='text-lg font-bold text-white flex-initial '>Assist Health </div>
                <div className='flex flex-row'>
                <div className='pr-8  text-white cursor-pointer opacity-75 hover:opacity-100' onClick={() => {navigate('/dashboard')}}>Dashboard</div>
                <div className='pr-8  text-white cursor-pointer opacity-75 hover:opacity-100' onClick={() => {navigate('/account')}}>Account</div>
                <div className='pr-8  text-white cursor-pointer opacity-75 hover:opacity-100' onClick={() => {navigate('/classfitness')}}>Class</div>
                <div className='pr-8  text-white cursor-pointer opacity-75 hover:opacity-100' onClick={() => {navigate('/exercise')}}>Exercise</div>
                <div className='pr-8  text-white cursor-pointer opacity-75 hover:opacity-100' onClick={() => {navigate('/mytrainer')}}>My trainer</div>
                <div className='pr-8  text-white cursor-pointer opacity-75 hover:opacity-100' onClick={() => {navigate('/mybooking')}}>My booking</div>
                <div className='pr-8  text-white cursor-pointer opacity-75 hover:opacity-100' onClick={logout}>Log out</div>
                </div>
            </div>)}
        </div>
    );
};

export { navbar as Navbar };