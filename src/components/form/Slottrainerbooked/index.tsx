import react from 'react';
import { TextField, Button,  Buttoncancel, Bottontrainer} from 'components';

const slottrainerbooked = ({ slotname, date, time}: any) => {
    return(
        <div className="pl-7 pt-5 pr-7">
        <div className="bg-red-700 rounded-xl hover:-translate-y-1 hover:scale-103 hover:bg-red-500 duration-300">
            <div className="items-center flex justify-between ">
            <div  className=" text-white pl-5 font-normal text-lg">
                {slotname}
            </div>
            <div className=" text-white pl-5 font-normal text-lg">
                {date}
            </div>
            <div className=" text-white pl-5 font-normal text-lg">
                {time}
            </div>
            <div className="pl-5 pr-7">
            <Buttoncancel buttonName="CANCEL" />
            </div>
        </div>
        </div>
    </div>
    );
};

export {slottrainerbooked as Slottrainerbooked}