import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextField, Button } from 'components';
import Logo from 'assets/images/Logo.png';

const authLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username);
    console.log(password);

    const user = {username:username, password:password}
    console.log(user);
    }
  return (
    <div className="flex justify-center items-center min-h-screen shadow-md">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-y-9 px-16 py-10 rounded-md" style={{ backgroundColor: '#EAE9E9' }}>
          <div className="flex items-center">
            <img src={ Logo } className="w-28" />
            <h1 className='text-5xl ml-5'>Login</h1>
          </div>
            <TextField placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <TextField placeholder="Password" value={password} hidden={true} onChange={(e) => setPassword(e.target.value)} />
            <div className='flex justify-between'>
              <div className='flex items-center gap-1'>
                <input type="checkbox" name="remember" value="" className="rounded-sm"></input>
                <label className='text-slate-400'>Remember Me</label>
              </div>
            </div>
            <Button buttonName="Login"/>
          <div className='text-right underline cursor-pointer text-[#B0B0B0]' onClick={() => { navigate('/auth/signup'); }}>
            SIGN UP
          </div>
        </div>
      </form>
    </div>
  );
}

export { authLogin as AuthLogin };