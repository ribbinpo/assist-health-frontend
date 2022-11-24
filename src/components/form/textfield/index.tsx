import React from 'react';

type textfieldProps = {
  placeholder: string,
  hidden?: boolean,
  email?: boolean,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
};

const textfield = ({ placeholder , hidden, email, onChange, value }: textfieldProps) => {
  return (
    <input
      type={(hidden) ? 'password':'text' && (email) ? 'email':'text'}
      className="form-input rounded-md border-none p-3  w-full"    
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export { textfield as TextField };
