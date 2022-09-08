import React from 'react';

type buttonProp = {
    buttonName: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

const button = ({ buttonName, onClick }: buttonProp) => {
    return (
        <div>
           <button className="rounded-full bg-red-800" onClick={onClick}>
            <div className="text-lg text-white px-32 py-3">
                {buttonName}
            </div>
            </button>
        </div>
    );
};

export { button as Button };