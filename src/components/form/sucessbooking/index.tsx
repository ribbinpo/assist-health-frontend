import React from "react";
import Checked from "assets/images/checked.png"

const sucessbooking = () => {
 return (
   <div className="flex justify-center items-center min-h-screen shadow-md">
   <form>
     <div className="rounded-md bg-[#EAE9E9]">
      <div className="px-40">
        <div className="w-full">
        <div className="w-36 ml-6 pt-5"><img src={Checked} alt="" /></div>
        <div className="self-center text-3xl py-5">Sucess booking</div>
        </div>
      </div>
     </div>
  </form>
 </div>
 );
}

export { sucessbooking as Sucessbooking };