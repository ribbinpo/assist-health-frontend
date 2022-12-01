import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Historyslot} from 'components';
import axios from 'axios';
import { useAccountStore } from 'store';
import jwtDecode from 'jwt-decode';



const History = ({ id }: any) => {
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
                <div className="text-5xl ml-5 font-bold">History</div>
            </div >
            <div className="text-[#7B787880] pl-8 pt-8">
            CLASS
            </div>
            <div className="px-8">
                <hr></hr>
            </div>
            
            {items.map((items: any, key) =>
        items.classType === 'CARDIO' ? (
          <Historyslot
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
          <Historyslot
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
          <Historyslot
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
                <Historyslot slotclassname="Trainer" date="2/12/2022" time="10:00"/>
            </div>
           
        </div>
        
    );
}

export { History as History};