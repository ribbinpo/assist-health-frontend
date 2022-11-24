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

const slotclasscardiobooked = ({ slotclassname, time, name, entries, limit, id }: any) => {
  const [isOpenConfirmBooking, setIsOpenConfirmBooking] = useState(false);
  const token = useAccountStore((state) => state.token);

 
  return (
    <div>
      

      <div className="px-7 pt-5 justify-items-center">
        <div className="bg-[#D0E495] rounded-xl drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 hover:bg-green-300 duration-300">
          <div className="items-center flex justify-between ">
            <div className="text-black pl-5 font-bold">{slotclassname}</div>
            <div className="text-black pl-5 flex">
              <div className="w-8 pr-2 justify-items-center">
                <img src={Clock} />
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
            <div className="pl-5 pr-7">
              <Buttoncancel buttonName="CANCEL" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { slotclasscardiobooked as Slotclasscardiobooked };
