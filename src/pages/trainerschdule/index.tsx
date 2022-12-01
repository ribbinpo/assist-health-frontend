 import React, { useState } from "react";
import { TextField, Button,  Buttonbooking, Bottontrainer, Slottrainer} from 'components';
import { useAccountStore } from 'store';
import { useLocation } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import Booking from 'assets/images/booking.png';

const trainerschdule = () => {
    const token = useAccountStore((state) => state.token);
    const { state } = useLocation();
    const navigate = useNavigate();
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
        <div className="flex justify-between"> 
            <div className="text-5xl ml-5 pt-8 font-bold pl-2">BOOKING TRAINER</div>
            <div className="pr-8 pt-8">
            <button
          className="w-45 border-2 rounded-md border-[#9D9A9A] bg-[#F5F5F5] text-[#5E5454] shadow-md p-3 px-4 flex 
                hover:-translate-y-1 hover:scale-103 hover:bg-[#DBDBDB] duration-300 hover:border-[#606060]"
          onClick={() => {
            navigate('/mybooking');
          }}>
          <div className="w-10 pr-4">
            <img src={Booking} className="" />
          </div>
          MY BOOKING
        </button>
            </div>
        </div>
        <div className="px-8">
        <div className="py-6">
            
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