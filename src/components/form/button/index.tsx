import React from 'react';

const button = () => {
    return (
        <div>
           <button className="rounded-full bg-red-800 ring-2 ring-pink-300 ring-inset">
            <div className="text-lg text-white">
                Login
            </div>
            </button>
        </div>
    );
};

export { button as Button };