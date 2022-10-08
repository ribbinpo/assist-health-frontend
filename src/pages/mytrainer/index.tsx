import React from "react";
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Buttoncancel, Topictrainer } from 'components';
import Julie from 'assets/images/julie.png'


const mytrainer = () => {
    const navigate = useNavigate();
    return (
    
        <div>
        <div className="text-5xl pl-7 pt-8 font-bold text-black">My traier</div>
        <div className="pt-8 px-8">
                <div className="bg-[#DCDCDC] rounded-lg grid gap-3 grid-cols-2">
                    <div><img src={Julie} className="pt-8 pb-8 pl-8 w-60 h-108 "/></div>
                    <div className="pt-8  text-3xl font-bold text-red-800">JULIE
                        <div className="pt-2 pr-4 text-xl font-semibold text-black ">KANOKWAN SRINONGWA</div> 
                        <div className="pt-1 pr-4 text-xl font-medium text-red-800 ">Professional<div className="inline text-black font-light">: Trainer (Level-2)</div></div> 
                        <Topictrainer topicName="Special Skills"/>
                        <div className="list-disc pt-1 pr-4 text-lg font-light text-black">
                            <li>Function Traing</li>
                            <li>Burn out calories</li>
                            <li>Weight Training</li>
                        </div>
                        <div><Topictrainer topicName="Certificate"/><div className=" text-black font-light text-lg ">Functional Training 101</div></div>
                        <div className="pt-4 pb-4" onClick={() => { navigate('/trainerschdule'); }}><Button buttonName="Booking"/></div>
                    </div>
                </div>
        </div>
        </div>
    );
}

export { mytrainer as Mytrainer }