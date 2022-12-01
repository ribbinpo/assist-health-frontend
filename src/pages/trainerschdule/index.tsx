 import React, { useState } from "react";
import { TextField, Button,  Buttonbooking, Bottontrainer, Slottrainer} from 'components';
import { useAccountStore } from 'store';
import { useLocation } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

const trainerschdule = () => {
    const token = useAccountStore((state) => state.token);
    const { state } = useLocation();
    const onBooking = (_start: string, _end: string) => {
        const user: {
            sub: number;
            username: string;
            role: string;
          } = jwtDecode(token);
        const userId = user.sub;
        console.log('userId',userId);
        console.log('customerId',state);
        console.log('start', new Date(_start));
        console.log('end',new Date(_end));
        axios.post('http://localhost:8000/booking/bookTrainer', {
            start_time: new Date(_start),
            end_time: new Date(_end),
            trainer_id: state,
            customer_id: userId
        });
    }
    return (
        <div>
        <div className="text-5xl ml-5 pt-8 font-bold pl-2">BOOKING TRAINER</div>
        <div className="px-8">
        <div className="py-6">
            <input type="date"className="form-input rounded-md w-36 border-slate-CCCCCC bg-[#F2F2F2]"/>
        </div>
                <hr></hr>
        </div>
            <Slottrainer setTime={() => {
                onBooking("02-12-2022 00:09:00", "02-12-2022 00:10:00");
            }} slotname="9:00-10:00"/>
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