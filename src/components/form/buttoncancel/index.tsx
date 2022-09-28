import React from 'react';

type buttonProp = {
    buttonName: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

const buttoncancel = ({ buttonName, onClick }: buttonProp) => {
    return (
        <div className='pl-16'>
            <button className='rounded-full bg-yellow-300 shadow-md mt-2 mb-2'onClick={onClick}>
                <div className='text-lg text-white px-3 py-3'>
                    {buttonName}
                </div>
            </button>

        </div>
    );
};

export { buttoncancel as Buttoncancel };