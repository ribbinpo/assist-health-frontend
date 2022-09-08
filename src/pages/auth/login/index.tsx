import React from 'react';

import { TextField, Button } from 'components';
import Logo from 'assets/images/Logo.png';

const authLogin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-y-9 px-16 py-10 rounded-md" style={{ backgroundColor: '#EAE9E9' }}>
        <div className="flex items-center">
          <img src={ Logo } className="w-28" />
          <h1 className='text-5xl ml-5'>Login</h1>
        </div>
        <TextField placeholder="Username" />
        <TextField placeholder="Password" />
        <div className='flex justify-between'>
          <div className='flex items-center gap-1'>
            <input type="checkbox" name="remember" value="" className="rounded-sm"></input>
            <label className='text-slate-400'>Remember Me</label>
          </div>
          <div className='text-red-800'>Forgot password?</div>
        </div>
        <Button buttonName="Login" />
        <div className='text-right underline text-[#B0B0B0]'>
          SIGN UP
        </div>
        {/* Remember Me (check box) and link forgot password */}
        {/* Login button */}
        {/* Link sign up */}
      </div>
    </div>
  );
}

export { authLogin as AuthLogin };