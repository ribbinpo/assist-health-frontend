import React from "react";
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Buttoncancel } from 'components';

const mybooking = () => {
    return (
        <div>
             <div  className="grid gap-2 grid-cols-4 pt-3 ">
                <div className="text-5xl ml-5 font-bold">MY BOOKING</div>
                <div className="bg-[#F17474] uppercase rounded-full flex justify-center items-center">
                    <div className="text-white">CARDIO</div> 
                </div>
                <div className="bg-[#D0E495] uppercase rounded-full flex justify-center items-center">
                    <div className="text-white">STRENGTH</div> 
                </div>
                <div className="bg-[#74B5F1] uppercase rounded-full flex justify-center items-center ">
                    <div className="text-white">FLEXLITY</div> 
                </div>
            </div >
            <div className="text-[#7B787880] pl-8 pt-8">
            28/08/22 CLASS
            </div>
            <div className="px-8">
                <hr></hr>
            </div>
                    <div className="pl-7 pt-5 pr-7">
                        <div className="bg-[#D0E495] rounded-full ">
                            <div className="grid gap-x-2 gap-y-4 grid-cols-4 items-center">
                            <div  className="text-black pl-5 font-bold">BODYPUMP</div>
                            <div  className="text-black pl-5">08:00-09:00</div>
                            <div  className="text-black pl-5">3/15</div>
                            <div  className="pl-5 pr-7"><Buttoncancel buttonName="Cancel" /></div>
                            </div>
                         </div>
                    </div>
                    <div className="pl-7 pt-5 pr-7">
                        <div className="bg-[#F17474] rounded-full ">
                            <div className="grid gap-x-2 gap-y-4 grid-cols-4 items-center">
                            <div  className="text-black pl-5 font-bold">BODYJAM</div>
                            <div  className="text-black pl-5">18:00-19:30</div>
                            <div  className="text-black pl-5">3/15</div>
                            <div  className="pl-5 pr-7"><Buttoncancel buttonName="Cancel" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-7 pt-5 pr-7">
                        <div className="bg-[#74B5F1] rounded-full ">
                            <div className="grid gap-x-2 gap-y-4 grid-cols-4 items-center">
                            <div  className="text-black pl-5 font-bold">BODYBALANCE</div>
                            <div  className="text-black pl-5">20:00-21:00</div>
                            <div  className="text-black pl-5">3/15</div>
                            <div  className="pl-5 pr-7"><Buttoncancel buttonName="Cancel" /></div>
                            </div>
                        </div>
                    </div>
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