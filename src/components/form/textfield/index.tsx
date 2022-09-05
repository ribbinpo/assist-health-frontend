import React from 'react';

type textfieldProps = {
  placeholder: string
};

const textfield = ({ placeholder }: textfieldProps) => {
  return (
    <input
      type="text"
      className="form-input rounded-md border-none p-3"
      placeholder={placeholder}
    />
  );
};

export { textfield as TextField };
