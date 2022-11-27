import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Classtoday from 'assets/images/classtoday.png';
import { Slotclasscardio, Slotclassstrength, Slotclasssflexlity } from 'components';
import Arrow from 'assets/images/arrow.png';
import Booking from 'assets/images/booking.png';
import axios from 'axios';

enum CLASSTYPE {
  ALL,
  CARDIO,
  STRENGTH,
  FLEXLITY,
}

const classfitness = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState<any>([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentClassType, setCurrentClassType] = useState(CLASSTYPE.ALL);
  const [currentDate, setCurrentDate] = useState("");

  console.log(currentDate);







  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get('http://localhost:8000/classes/getAll');
      const data = response.data;
      setItems(data);
    };
    getItems();
  }, []);

  console.log(filteredItems);

  useEffect(() => {
    // console.log(`currentClassType: ${currentClassType}`);
    if (currentClassType === CLASSTYPE.ALL) setFilteredItems(items);
    else if (currentClassType === CLASSTYPE.CARDIO) {
      const filtered = items.filter((item: any) => item.classType === 'CARDIO');
      setFilteredItems(filtered);
    } else if (currentClassType === CLASSTYPE.STRENGTH) {
      const filtered = items.filter((item: any) => item.classType === 'STRENGTH');
      setFilteredItems(filtered);
    } else if (currentClassType === CLASSTYPE.FLEXLITY) {
      const filtered = items.filter((item: any) => item.classType === 'FLEXLITY');
      setFilteredItems(filtered);
    }
  }, [currentClassType, items]);



  return (
    <div>
      <div>
        <img src={Classtoday} className="" />
      </div>
      <div className="p-8 flex justify-between">
        <div className="flex">
          <div className="text-4xl font-medium pr-8">BOOKING CLASS</div>
          <div>
            <input
              type="date"
              // value={currentDate}
              // onClick={() => setCurrentDate()}
              onChange={(e) => setCurrentDate(e.target.value)}
              className="form-input rounded-md w-60 border-slate-CCCCCC bg-[#F2F2F2]"
            />
          </div>
        </div>
        <div>
          <button
            className=" w-36 border-2 rounded-md border-[#9D9A9A] bg-[#F5F5F5] text-[#5E5454] shadow-md p-3 px-4 flex 
                    hover:-translate-y-1 hover:scale-103 hover:bg-[#DBDBDB] duration-300 hover:border-[#606060]"
            onClick={() => {
              navigate('/dashboard');
            }}>
            <div className="w-10 pr-4">
              <img src={Arrow} className="" />
            </div>
            BACK
          </button>
        </div>
      </div>
      <div className="bg-black">
        <hr className="h-1 bg-[#8D8888]"></hr>
      </div>
      <div className="flex px-8">
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentClassType(CLASSTYPE.ALL)}
            className={`${currentClassType === CLASSTYPE.ALL ? 'border-[#CC1B32]' : 'border-white'
              } justify-items-center w-36 h-16 text-[#CC1B32] text-xl font-normal border-b-4  hover:border-[#CC1B32] hover:font-semibold`}>
            ALL
          </button>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentClassType(CLASSTYPE.CARDIO)}
            className={`${currentClassType === CLASSTYPE.CARDIO ? 'border-[#D0E495]' : 'border-white'
              } justify-items-center w-36 h-16 text-[#D0E495] text-xl font-normal border-b-4  hover:border-[#D0E495] hover:font-semibold `}>
            CARDIO
          </button>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentClassType(CLASSTYPE.STRENGTH)}
            className={`${currentClassType === CLASSTYPE.STRENGTH ? 'border-[#F17474]' : 'border-white'
              } justify-items-center w-36 h-16 text-[#F17474] text-xl font-normal border-b-4 hover:border-[#F17474]  hover:font-semibold `}>
            STRENGTH
          </button>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentClassType(CLASSTYPE.FLEXLITY)}
            className={`${currentClassType === CLASSTYPE.FLEXLITY ? 'border-[#74B5F1]' : 'border-white'
              } justify-items-center w-36 h-16 text-[#74B5F1] text-xl font-normal border-b-4 hover:border-[#74B5F1]  hover:font-semibold `}>
            FLEXLITY
          </button>
        </div>
      </div>
      <div className="pb-5">
        <hr className="h-1 bg-[#8D8888]"></hr>
      </div>

      {filteredItems.filter((filter: { start_time: string }) => filter.start_time.includes(currentDate)).map((item: any, key) =>
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
            status={item.status}
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
            status={item.status}
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
            status={item.status}
          />
        ) : null,
      )}

      <div className="absolute right-0 p-8">
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
  );
};

export { classfitness as Classfitness };
