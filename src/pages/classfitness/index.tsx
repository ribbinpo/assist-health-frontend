import React from "react";
import { useNavigate } from 'react-router-dom';
import Classtoday from 'assets/images/classtoday.png'
import { TextField, Button, Buttonbooking } from 'components';

const classfitness = () => {
    return (
        <div>
            <div><img src={Classtoday} className="w-full pt-3" /></div>
            <div  className="grid gap-2 grid-cols-4 pt-3 ">
                <div className="text-5xl ml-5 font-bold">CLASS’s TODAY</div>
                <div className="bg-[#F17474] uppercase rounded-full flex justify-center items-center">
                    <div className="text-white">CARDIO</div> 
                </div>
                <div className="bg-[#D0E495] uppercase rounded-full flex justify-center items-center">
                    <div className="text-white">STRENGTH</div> 
                </div>
                <div className="bg-[#74B5F1] uppercase rounded-full flex justify-center items-center ">
                    <div className="text-white">FLEXLITY</div> 
                </div>
                    <div className="pl-7 pt-5">
                        <div className="bg-[#D0E495] grid gap-x-2 gap-y-4 grid-cols-4 rounded-full  justify-center items-center h-16 w-max shadow-xl ">
                            <div  className="text-black pl-5 font-bold">BODYPUMP</div>
                            <div  className="text-black pl-5">08:00-09:00</div>
                            <div  className="text-black pl-5">3/15</div>
                            <div  className="pl-5 pr-7"><Buttonbooking buttonName="BOOKING" /></div>
                     </div>
                    </div>
                    </div>
                        <div className="pl-7 pt-5">
                        <div className="bg-[#F17474] grid gap-x-2 gap-y-4 grid-cols-4 rounded-full  justify-center items-center h-16 w-max shadow-xl ">
                            <div  className="text-black pl-5 font-bold">STEP MOVE</div>
                            <div  className="text-black pl-5">09:00-10:00</div>
                            <div  className="text-black pl-5">3/15</div>
                            <div  className="pl-5 pr-7"><Buttonbooking buttonName="BOOKING" /></div>
                        </div>
                    </div>
                    <div className="pl-7 pt-5">
                        <div className="bg-[#F17474] grid gap-x-2 gap-y-4 grid-cols-4 rounded-full  justify-center items-center h-16 w-max shadow-xl ">
                            <div  className="text-black pl-5 font-bold">SH’BAM</div>
                            <div  className="text-black pl-5">17:00-18:00</div>
                            <div  className="text-black pl-5">3/20</div>
                            <div  className="pl-5 pr-7"><Buttonbooking buttonName="BOOKING" /></div>
                        </div>
                     </div>
                     <div className="pl-7 pt-5">
                        <div className="bg-[#74B5F1] grid gap-x-2 gap-y-4 grid-cols-4 rounded-full  justify-center items-center h-16 w-max shadow-xl ">
                            <div  className="text-black pl-5 font-bold">BODYPUMP</div>
                            <div  className="text-black pl-5">08:00-09:00</div>
                            <div  className="text-black pl-5">2/20</div>
                            <div  className="pl-5 pr-7"><Buttonbooking buttonName="BOOKING" /></div>
                        </div>
                     </div>
                     <div className="pl-7 pt-5">
                        <div className="bg-[#F17474] grid gap-x-2 gap-y-4 grid-cols-4 rounded-full  justify-center items-center h-16 w-max shadow-xl ">
                            <div  className="text-black pl-5 font-bold">BODYPUMP</div>
                            <div  className="text-black pl-5">08:00-09:00</div>
                            <div  className="text-black pl-5">3/15</div>
                            <div  className="pl-5 pr-7"><Buttonbooking buttonName="BOOKING" /></div>
                        </div>
                     </div>
            
        </div>
    );
};

export { classfitness as Classfitness };