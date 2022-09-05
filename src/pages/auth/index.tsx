import React from 'react';

import { TextField } from '../../components';

const authLogin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-24 rounded-md" style={{ backgroundColor: '#EAE9E9' }}>
        <TextField placeholder="Username" />
        <br />
        <TextField placeholder="Password" />
      </div>
    </div>
  );
}

export { authLogin as AuthLogin };