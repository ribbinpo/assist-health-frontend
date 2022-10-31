import React from "react";
import { useNavigate } from 'react-router-dom';
import Classtoday from 'assets/images/classtoday.png'
import { TextField, Button, Buttonbooking, Slotclasscardio, Slotclassstrength, Slotclasssflexlity, } from 'components';

const classes = [
    { id: 1, name: "BODYPUMP", start: "08:00", end: "09:00", quantity: 1, max: 20, },
];


const classfitness = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div><img src={Classtoday} className="" /></div>
            <div className="grid gap-2 grid-cols-4 pt-3 px-4">
                <div className="text-5xl ml-5 font-bold">CLASS’s TODAY</div>
                <div className="bg-[#F17474] uppercase rounded-xl flex justify-center items-center  transition ease-in-out   hover:text-6xl hover:bg-red-500 ">
                    <div className="text-white">CARDIO</div> 
                </div>
                <div className="bg-[#D0E495] uppercase rounded-xl flex justify-center items-center transition ease-in-out   hover:text-6xl hover:bg-lime-400 ">
                    <div className="text-white">STRENGTH</div> 
                </div>
                <div className="bg-[#74B5F1] uppercase rounded-xl flex justify-center items-center transition ease-in-out   hover:text-6xl hover:bg-sky-600">
                    <div className="text-white">FLEXLITY</div> 
                </div>
        </div>
                    <Slotclassstrength slotclassname="BODYPUMP" time="08:00-09:00" quantity="1/20"/>
                    <Slotclasscardio slotclassname="STEP MOVE" time="09:00-10:00" quantity="5/20"/>
                    <Slotclasssflexlity slotclassname="SH`BAM~~~" time="17:00-18:00" quantity="0/20"/>
                     <div className="absolute right-0 p-8">
                        <button className="rounded-xl bg-[#D8D8D4] text-[#5E5454] shadow-md p-3 px-4" onClick={() => { navigate('/mybooking'); }}>My booking</button>
                     </div>
            
        </div>
    );
};

export { classfitness as Classfitness };