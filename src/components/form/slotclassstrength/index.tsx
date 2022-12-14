import react from 'react';
import { TextField, Buttonbooked, Buttonbooking, Confirmbooking } from 'components';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import User from 'assets/images/user.png';
import Clock from 'assets/images/clock.png';
import Group from 'assets/images/group.png';
import axios from 'axios';
import { useAccountStore } from 'store';
import jwtDecode from 'jwt-decode';

const slotclassstrength = ({ slotclassname, time, name, entries, limit, id, status }: any) => {
  const [isOpenConfirmBooking, setIsOpenConfirmBooking] = useState(false);
  const token = useAccountStore((state) => state.token);

  function closeModaConfirmBooking() {
    setIsOpenConfirmBooking(false);
  }

  async function openModalConfirmBooking() {
    const user: {
      sub: number;
      username: string;
      role: string;
    } = jwtDecode(token);
    const userId = user.sub;
    const classScheduleId = id;
    const res = await axios.get(
      `http://146.190.92.231/booking/bookClassSchdule?userId=${userId}&classScheduleId=${classScheduleId}`,
    );
    console.log(res.data);
    setIsOpenConfirmBooking(true);
    //
  }

  return (
    <div>
      <Transition appear show={isOpenConfirmBooking} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModaConfirmBooking}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel>
                  <div>
                    <Confirmbooking />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="px-7 pt-5 justify-items-center">
        <div className="bg-[#F17474]  rounded-xl drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 hover:bg-red-500 duration-300">
          <div className="items-center flex justify-between ">
            <div className="text-black pl-5 font-bold">{slotclassname}</div>
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
                  <div className={`bg-[#CC1B32] h-2.5 rounded-full  
                  ${entries === 0 && "w-0"}
                  ${entries === 1 && "w-2"}
                  ${entries === 2 && "w-2"}
                  ${entries === 3 && "w-4"}
                  ${entries === 4 && "w-4"}
                  ${entries === 5 && "w-6"}
                  ${entries === 6 && "w-6"}
                  ${entries === 7 && "w-8"}
                  ${entries === 8 && "w-8"}
                  ${entries === 9 && "w-10"}
                  ${entries === 10 && "w-10"}
                  ${entries === 12 && "w-36"}
                  ${entries === 20 && "w-100"}
                  `}></div>
                </div>
              </div>
              <div className="pl-2 mt-3">
                {entries}/{limit}
              </div>
            </div>
            <div className="pl-5 pr-7" onClick={openModalConfirmBooking}>
              {status?(
                <>
                <Buttonbooked buttonName='BOOKED'/>
                </>
              ):(
                <>
                <Buttonbooking buttonName="BOOK THIS CLASS" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { slotclassstrength as Slotclassstrength };
