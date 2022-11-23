import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Buttonbooking, Slotclasscardio, Slotclassstrength, Slotclasssflexlity, } from 'components';
import axios from 'axios';
import { useAccountStore } from 'store';
import jwtDecode from 'jwt-decode';

const mybooking = ({ id }: any) => {
    const token = useAccountStore((state) => state.token);

    // async function myBooking() {
    //     const user: {
    //       sub: number;
    //       username: string;
    //       role: string;
    //     } = jwtDecode(token);
    //     const userId = user.sub;
    //     const classScheduleId = id;
    //     const res = await axios.get(
    //       `http://localhost:8000/booking/bookClassSchdule?userId=${userId}&classScheduleId=${classScheduleId}`,
    //     );
    //     console.log(res.data);
    //     setIsOpenConfirmBooking(true);
    //     //
    //   }

    useEffect(() => {
        const user: {
          sub: number;
          username: string;
          role: string;
        } = jwtDecode(token);
        const userId = user.sub;
        const getItems = async () => {
            const res = await axios.get(
            `http://localhost:8000/classes/getByUserId?id=${userId}`,
            );
            console.log(res.data);
        }
        getItems();
      },[]);
    
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

            {/* {.map((item: any, key) =>
            item.classType === 'CARDIO' ? (
          <Slotclasscardio
            key={key}
            slotclassname={item.className}
            id={item.id}
            time={
              new Date(item.start_time).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }) &&
              new Date(item.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
            name={item.teacher}
            entries={item.entries}
            limit={item.limit}
          />
        ) : item.classType === 'STRENGTH' ? (
          <Slotclassstrength
            key={key}
            slotclassname={item.className}
            id={item.id}
            time={
              new Date(item.start_time).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }) &&
              new Date(item.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
            name={item.teacher}
            entries={item.entries}
            limit={item.limit}
          />
        ) : item.classType === 'FLEXLITY' ? (
          <Slotclasssflexlity
            key={key}
            slotclassname={item.className}
            id={item.id}
            time={
              new Date(item.start_time).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }) &&
              new Date(item.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
            name={item.teacher}
            entries={item.entries}
            limit={item.limit}
          />
        ) : null,
      )} */}
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