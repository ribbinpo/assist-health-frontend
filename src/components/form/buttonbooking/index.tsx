import React from 'react';

type buttonProp = {
    buttonName: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

const buttonbooking = ({ buttonName, onClick }: buttonProp) => {
    return (
        <div>
           <button className="rounded-xl bg-red-800 shadow-md mt-2 mb-2 w-50" onClick={onClick}>
            <div className="text-lg text-white px-3 py-3">
                {buttonName}
            </div>
            </button>
        </div>
    );
};

export { buttonbooking as Buttonbooking  };