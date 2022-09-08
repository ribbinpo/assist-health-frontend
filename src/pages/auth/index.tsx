import React from 'react';

import { TextField } from 'components';
import { Button } from '../../components';

const authLogin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-y-2 p-24 rounded-md" style={{ backgroundColor: '#EAE9E9' }}>
        <TextField placeholder="Username" />
        <TextField placeholder="Password" />
        <Button></Button>
        {/* Remember Me (check box) and link forgot password */}
        {/* Login button */}
        {/* Link sign up */}
      </div>
    </div>
  );
}

export { authLogin as AuthLogin };