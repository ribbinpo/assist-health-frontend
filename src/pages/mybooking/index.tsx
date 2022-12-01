import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Slotclasscardiobooked, Slotclassstrengthbooked, Slotclasssflexlitybooked, Slottrainerbooked } from 'components';
import axios from 'axios';
import { useAccountStore } from 'store';
import jwtDecode from 'jwt-decode';
import History from 'assets/images/schedule.png'


const mybooking = ({ id }: any) => {
  const navigate = useNavigate();
    const token = useAccountStore((state) => state.token);
    const [items, setItems] = useState([]);
    


    useEffect(() => {
        const user: {
          sub: number;
          username: string;
          role: string;
        } = jwtDecode(token);
        const userId = user.sub;
        const getItems = async () => {
            const res = await axios.get(
            `http://146.190.92.231/classes/getByUserId?id=${userId}`,
            );
            setItems(res.data.classes)              
            // console.log(res.data);
        }
        getItems();
      },[]);
      console.log(items);
      
      
    
    return (
        <div>
             <div  className="grid gap-2 grid-cols-4 pt-3 ">
                <div className="text-5xl ml-5 font-bold">MY BOOKING</div>
                <div className="bg-[#D0E495] uppercase rounded-xl flex justify-center items-center">
                    <div className="text-white">CARDIO</div> 
                </div>
                <div className="bg-[#F17474] uppercase rounded-xl flex justify-center items-center">
                    <div className="text-white">STRENGTH</div> 
                </div>
                <div className="bg-[#74B5F1] uppercase rounded-xl flex justify-center items-center ">
                    <div className="text-white">FLEXLITY</div> 
                </div>
            </div >
            <div className="text-[#7B787880] pl-8 pt-8">
            CLASS
            </div>
            <div className="px-8">
                <hr></hr>
            </div>
            
            {items.map((items: any, key) =>
        items.classType === 'CARDIO' ? (
          <Slotclasscardiobooked
            key={key}
            slotclassname={items.className}
            id={items.id}
            date={
              new Date(items.start_time).toDateString()
            }
            time={
              new Date(items.start_time).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }) &&
              new Date(items.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
            name={items.teacher}
            entries={items.entries}
            limit={items.limit}
          />
        ) : items.classType === 'STRENGTH' ? (
          <Slotclassstrengthbooked
            key={key}
            slotclassname={items.className}
            id={items.id}
            date={
              new Date(items.start_time).toDateString()
            }
            time={
              new Date(items.start_time).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }) &&
              new Date(items.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
            name={items.teacher}
            entries={items.entries}
            limit={items.limit}
          />
        ) : items.classType === 'FLEXLITY' ? (
          <Slotclasssflexlitybooked
            key={key}
            slotclassname={items.className}
            id={items.id}
            date={
              new Date(items.start_time).toDateString()
            }
            time={
              new Date(items.start_time).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }) &&
              new Date(items.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
            name={items.teacher}
            entries={items.entries}
            limit={items.limit}
          />
        ) : null,
      )}
            
            {/* <Slotclassstrength slotclassname="BODYPUMP" time="08:00-09:00" quantity="1/20"/>
            <Slotclasscardio slotclassname="STEP MOVE" time="09:00-10:00" quantity="5/20"/>
            <Slotclasssflexlity slotclassname="SH`BAM~~" time="17:00-18:00" quantity="0/20"/> */}

           
            <div className="text-[#7B787880] pl-8 pt-8">
            TRAINER
            </div>
            <div className="">
              <div className="px-8">
                <hr></hr>
              </div>
                <Slottrainerbooked slotname="Trainer" date="2/12/2022" time="10:00-11:00"/>
            </div>
            <div className="absolute right-0 p-8">
        <button
          className="w-45 border-2 rounded-md border-[#9D9A9A] bg-[#F5F5F5] text-[#5E5454] shadow-md p-3 px-4 flex 
                hover:-translate-y-1 hover:scale-103 hover:bg-[#DBDBDB] duration-300 hover:border-[#606060]"
          onClick={() => {
            navigate('/history');
          }}>
          <div className="w-10 pr-4">
            <img src={History} className="" />
          </div>
          History
        </button>
      </div>
        </div>
        
    );
}

export { mybooking as Mybooking};