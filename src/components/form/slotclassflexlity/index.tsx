import react from "react";
import { TextField, Button, Buttonbooking } from 'components';
import User from 'assets/images/user.png'

const slotclasssflexlity = ({slotclassname, time, quantity}: any) => {
    return (
        <div className="pl-7 pt-5 pr-7">
        <div className="bg-[#74B5F1] rounded-xl drop-shadow-xl ">
            <div className="items-center flex justify-between ">
            <div  className="text-black pl-5 font-bold">{slotclassname}</div>
            <div  className="text-black pl-5">{time}</div>
            <div className="flex flex-row items-center">
                <img src={ User } className="w-8" />
                <div  className="text-black pl-5"> {quantity}</div>
            </div>
            <div  className="pl-5 pr-7"><Buttonbooking buttonName="BOOKING" /></div>
            </div>
    </div>
    </div>
    );
};

export  { slotclasssflexlity as Slotclasssflexlity };