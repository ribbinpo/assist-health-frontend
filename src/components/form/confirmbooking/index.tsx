import React from "react";
import Booking from 'assets/images/booking.png'
import run from 'assets/images/running-man.png'
import Clock from 'assets/images/clock.png';
import User from 'assets/images/user.png';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Sucessbooking } from 'components';
import axios from "axios";

const confirmbooking = () => {

  const [isOpenSucessBooking, setIsOpenSucessBooking] = useState(false)

  
  async function closeModalSucessBooking() {
        const response = await axios.post("http://146.190.92.231:8000/")
      setIsOpenSucessBooking(false)
  }
  function openModalSucessBooking() {
      setIsOpenSucessBooking(true)
  }
 return (
    <div>
        <Transition appear show={isOpenSucessBooking} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalSucessBooking}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
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
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel>
                            <div><Sucessbooking /></div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
      </Transition>

   <div className="flex justify-center items-center min-h-screen ">
   <form>
     <div className="rounded-md bg-[#EAE9E9]">
      <div className="flex justify-start py-5 pl-2 pr-96 ">
      <div className="text-3xl ml-5 mt-4">Confirm booking</div>
         <div className="w-10 pl-2 mt-4"><img src={Booking} /></div>
      </div>
      <div className="flex justify-between">
         <div className=" w-16 py-5 ml-8"><img src={run} alt="" /></div>
         <div className=" w-32 pl-2 self-center"><hr className="h-1 bg-black"></hr></div>
         <div className="w-16 py-5 ml-8"><img src={Clock} /></div>
         <div className=" w-32 pl-2 self-center"><hr className="h-1 bg-black"></hr></div>
         <div className="w-16 py-5 ml-8 mr-8"><img src={User} /></div>
      </div>
      <div className="flex justify-between px-12 pb-12">
         <div className="">run</div>
         <div className="">10:30-11:30</div>
         <div className="">Aie</div>
      </div>
      <div className="flex justify-end  pb-5"> 
            <div><button className='rounded-xl flex  justify-center  bg-yellow-300 shadow-md mt-2 mb-2 w-39 mr-5 '>
                <div className='text-lg text-white px-14 py-3'>
                    CANCEL
                </div>
            </button></div>
            <div><button className='rounded-xl flex  justify-center  bg-[#CC1B32] shadow-md mt-2 mb-2 w-39 mr-5' onClick={openModalSucessBooking}>
                <div className='text-lg text-white px-14 py-3' onClick={openModalSucessBooking}>
                    BOOK CLASS
                </div>
            </button></div>
      </div>
     </div>
     
   </form>
 </div>
 </div>
 );
}

export { confirmbooking as Confirmbooking };