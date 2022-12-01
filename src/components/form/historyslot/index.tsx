import react from 'react';
import { Buttoncancel, Confirmbooking, Sucessbooking } from 'components';
import User from 'assets/images/user.png';
import Clock from 'assets/images/clock.png';
import Group from 'assets/images/group.png';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import { useAccountStore } from 'store';
import jwtDecode from 'jwt-decode';
import { AiTwotoneCalendar } from "react-icons/ai";

const historyslot = ({ slotclassname, date, time, name, entries, limit, id }: any) => {
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
        <div className="bg-slate-400 rounded-xl drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 hover:bg-slate-800 duration-300">
          <div className="items-center flex justify-between ">
            <div className="text-black pl-5 font-bold">{slotclassname}</div>
            <div className="text-black pl-5 flex">
              <div className="w-8 pr-2 justify-items-center">
                <img src={Clock} />
              </div>
              {time}-{time}
            </div>
            <div className="flex justify-between">
              <div className="p-2">
                <img src={Group} className="w-9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { historyslot as Historyslot };
