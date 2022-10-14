import react from 'react';

type buttonProp = {
    buttonName: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

const buttontrainer = ({ buttonName, onClick }: buttonProp) => {
    return(
        <div>
        <button className='rounded-xl bg-[#00B11C] shadow-md mt-2 mb-2'onClick={onClick}>
            <div className='text-lg text-white px-14 py-3'>
                {buttonName}
            </div>
        </button>

    </div>
    );
};

export { buttontrainer as Bottontrainer};