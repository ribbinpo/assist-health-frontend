import react, { useState } from 'react';

type buttonProp = {
    buttonName: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
};

const buttontrainer = ({ buttonName, onClick }: buttonProp) => {
    const [status, setState] = useState(false);
    return(
        <div>
        <button className={`rounded-xl shadow-md mt-2 mb-2 ${(status ? "bg-red-700" : "bg-[#00B11C]" )}`} onClick={() => {
            onClick
            setState(true)
        }}>
            <div className={`text-lg text-white px-14 py-3`}>
                {buttonName}
            </div>
        </button>

    </div>
    );
};

export { buttontrainer as Bottontrainer};