import React from 'react';

type buttonProp = {
    buttonName: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

const buttonbooked = ({ buttonName, onClick }: buttonProp) => {
    return (
        <div>
           <button className="rounded-xl bg-zinc-400 hover:bg-zinc-900 duration-125 shadow-md mt-2 mb-2 w-50" onClick={onClick}>
            <div className="text-lg text-white px-3 py-3">
                BOOKED
            </div>
            </button>
        </div>
    );
};

export { buttonbooked as Buttonbooked };