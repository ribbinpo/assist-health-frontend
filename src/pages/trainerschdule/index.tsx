import React from "react";
import { TextField, Button,  Buttonbooking, Bottontrainer, Slottrainer} from 'components';



const trainerschdule = () => {
    return (
        <div>
        <div className="text-5xl ml-5 pt-8 font-bold">BOOKING TRAINER</div>
        {/* <TextField placeholder="Date" value={value}/> */}
        <div className="px-8">
                <hr></hr>
        </div>
            <Slottrainer slotname="9:00-10:00"/>
            <Slottrainer slotname="10:00-11:00"/>
            <Slottrainer slotname="12:00-13:00"/>
            <Slottrainer slotname="14:00-15:00"/>
            <Slottrainer slotname="15:00-16:00"/>
            <Slottrainer slotname="17:00-18:00"/>
            <Slottrainer slotname="18:00-19:00"/>
            <Slottrainer slotname="20:00-21:00"/>
        </div>

    );
};

export { trainerschdule as Trainerschdule}