import react from 'react';
import { TextField, Buttoncancel, Confirmbooking } from 'components';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import User from 'assets/images/user.png';
import Clock from 'assets/images/clock.png';
import Group from 'assets/images/group.png';
import axios from 'axios';
import { useAccountStore } from 'store';
import jwtDecode from 'jwt-decode';
import { AiTwotoneCalendar } from "react-icons/ai";

const slotclassstrengthbooked = ({ slotclassname, date, time, name, entries, limit, id }: any) => {
  const [isOpenConfirmBooking, setIsOpenConfirmBooking] = useState(false);
  const token = useAccountStore((state) => state.token);

  async function cancelClass() {
    const user: {
      sub: number;
      username: string;
      role: string;
    } = jwtDecode(token);
    const userId = user.sub;
    const classScheduleId = id;
    const res = await axios.get(
      `http://146.190.92.231/booking/bookClassSchduleCancel?userId=${userId}&classScheduleId=${classScheduleId}`
    );
    console.log(res.data.classSchedule.status);
  }
 
  return (
    <div>
      <div className="px-7 pt-5 justify-items-center">
        <div className="bg-[#F17474]  rounded-xl drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 hover:bg-red-500 duration-300">
          <div className="items-center flex justify-between ">
            <div className="text-black pl-5 font-bold">{slotclassname}</div>
            <div className="text-black pl-5 flex">
              <div className="w-8 pr-2 justify-items-center">
                <AiTwotoneCalendar size={24}/>
              </div>
              {date}
            </div>
            <div className="text-black pl-5 flex">
              <div className="w-8 pr-2 justify-items-center">
                <img src={Clock} className="" />
              </div>
              {time}-{time}
            </div>
            <div className="flex flex-row items-center">
              <img src={User} className="w-7" />
              <div className="text-black pl-3">{name}</div>
            </div>
            <div className="flex justify-between">
              <div className="p-2">
                <img src={Group} className="w-9" />
              </div>
              <div className="w-36">
                <div className="w-full bg-[#D9D9D9] rounded-full mt-5">
                  <div style={{ width: '50%' }} className="bg-[#CC1B32] h-2.5 rounded-full  "></div>
                </div>
              </div>
              <div className="pl-2 mt-3">
                {entries}/{limit}
              </div>
            </div>
            <div className="pl-5 pr-7" onClick={cancelClass}>
              <Buttoncancel buttonName="CANCEL" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { slotclassstrengthbooked as Slotclassstrengthbooked };
