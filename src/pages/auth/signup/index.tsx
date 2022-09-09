import React, { useState } from 'react';

import { TextField, Button } from 'components';
import Logo from 'assets/images/Logo.png'

const authSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-y-5 px-36 py-20 rounded-md" style={{ backgroundColor: '#EAE9E9' }}>
          <div className='flex iteams-center'>
            <img src={ Logo } className="w-28" />
            <h1 className='text-5xl ml-5 pt-6'>SIGN UP</h1>
          </div>
            <TextField placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <div className='grid gap-4 grid-cols-2'>
              <div><TextField placeholder="Password" value={password} hidden={true} onChange={(e) => setPassword(e.target.value)} /></div>
              <div><TextField placeholder="Confirm Password" value={password} hidden={true} onChange={(e) => setPassword(e.target.value)} /></div>
            </div>
            <TextField placeholder="Email" value={password} hidden={true} onChange={(e) => setPassword(e.target.value)} />
            <div className='grid gap-4 grid-cols-2 '>
              <div><TextField placeholder="FirstName" value={password} hidden={true} onChange={(e) => setPassword(e.target.value)} /></div>
              <div><TextField placeholder="LastName" value={password} hidden={true} onChange={(e) => setPassword(e.target.value)} /></div>
            </div>
            <TextField placeholder="Birthday" value={password} hidden={true} onChange={(e) => setPassword(e.target.value)} />
            <TextField placeholder="ID-Card/Passport" value={password} hidden={true} onChange={(e) => setPassword(e.target.value)} />
            <div className='grid gap-4 grid-cols-4'>
              <div><p className='text-[#B0B0B0]'>Gender</p></div> 
              <div><input type="checkbox" name="remember" value="" className="rounded-xl "></input>
              <label className='text-[#B0B0B0] pl-2'>Male</label></div>
              <div><input type="checkbox" name="remember" value="" className="rounded-xl"></input>
              <label className='text-[#B0B0B0] pl-2'>Female</label></div>
              <div><input type="checkbox" name="remember" value="" className="rounded-xl"></input>
              <label className='text-[#B0B0B0] pl-2'>Other</label></div>
            </div>
        </div>
    </div>
  );
}

export { authSignup as AuthSignup };