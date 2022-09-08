import React from 'react';

type buttonProp = {
    buttonName: string
};

const button = ({ buttonName }: buttonProp) => {
    return (
        <div>
           <button className="rounded-full bg-red-800">
            <div className="text-lg text-white px-32 py-3">
                {buttonName}
            </div>
            </button>
        </div>
    );
};

export { button as Button };