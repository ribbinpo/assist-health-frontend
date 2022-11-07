import React from "react";
import Booking from 'assets/images/booking.png'
import run from 'assets/images/running-man.png'
import Clock from 'assets/images/clock.png';
import User from 'assets/images/user.png';

const confirmbooking = () => {
 return (
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
            <div><button className='rounded-xl flex  justify-center  bg-[#CC1B32] shadow-md mt-2 mb-2 w-39 mr-5'>
                <div className='text-lg text-white px-14 py-3'>
                    BOOK CLASS
                </div>
            </button></div>
      </div>
     </div>
     
   </form>
 </div>
 );
}

export { confirmbooking as Confirmbooking };