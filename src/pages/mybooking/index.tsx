import React from "react";
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Buttonbooking, Slotclasscardio, Slotclassstrength, Slotclasssflexlity, } from 'components';

const mybooking = () => {
    return (
        <div>
             <div  className="grid gap-2 grid-cols-4 pt-3 ">
                <div className="text-5xl ml-5 font-bold">MY BOOKING</div>
                <div className="bg-[#F17474] uppercase rounded-xl flex justify-center items-center">
                    <div className="text-white">CARDIO</div> 
                </div>
                <div className="bg-[#D0E495] uppercase rounded-xl flex justify-center items-center">
                    <div className="text-white">STRENGTH</div> 
                </div>
                <div className="bg-[#74B5F1] uppercase rounded-xl flex justify-center items-center ">
                    <div className="text-white">FLEXLITY</div> 
                </div>
            </div >
            <div className="text-[#7B787880] pl-8 pt-8">
            28/08/22 CLASS
            </div>
            <div className="px-8">
                <hr></hr>
            </div>
            <Slotclassstrength slotclassname="BODYPUMP" time="08:00-09:00" quantity="1/20"/>
            <Slotclasscardio slotclassname="STEP MOVE" time="09:00-10:00" quantity="5/20"/>
            <Slotclasssflexlity slotclassname="SH`BAM~~" time="17:00-18:00" quantity="0/20"/>
            <div className="text-[#7B787880] pl-8 pt-8">
            28/08/22 TRAINER
            </div>
            <div className="px-8">
                <hr></hr>
            </div>
        </div>
    );
}

export { mybooking as Mybooking};