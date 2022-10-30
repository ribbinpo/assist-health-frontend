import react from "react";
import { TextField, Button, Buttonbooking } from 'components';
import User from 'assets/images/user.png'

const slotclasscardio = ({slotclassname, time, quantity}: any) => {
    return (
        <div className="px-7 pt-5 ">
        <div className="bg-[#F17474] rounded-xl drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 hover:bg-red-500 duration-300">
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

export  { slotclasscardio as Slotclasscardio };