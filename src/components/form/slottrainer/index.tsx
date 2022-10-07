import react from 'react';
import { TextField, Button,  Buttonbooking, Bottontrainer} from 'components';

const slottrainer = ({slotname}: any) => {
    return(
        <div className="pl-7 pt-5 pr-7">
        <div className="bg-[#a61d1d] rounded-xl ">
            <div className="items-center flex justify-between ">
            <div  className=" text-white pl-5 font-normal text-lg">
                {slotname}
            </div>
            <div  className="pl-5 pr-7"><Bottontrainer buttonName="BOOKING" /></div>
        </div>
        </div>
    </div>
    );
};

export {slottrainer as Slottrainer}