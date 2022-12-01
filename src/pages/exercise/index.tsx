import React from "react";
import Exercise2 from 'assets/images/exercise2.png'
import Cycling from 'assets/images/cycling.png'
import Walk from 'assets/images/walk.png'
import Swim from 'assets/images/swim.png'
import Footex from 'assets/images/footex.png'
import { useNavigate } from 'react-router-dom';
import Arrow from 'assets/images/arrow.png';

const exercise = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div><img src={Exercise2} className="w-full" /></div>
      <div className="flex justify-between">
      <div className="text-5xl pl-7 pt-8 font-bold text-red-800">Exercise</div>
      <div className="pr-8 pt-8">
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
      <div className="p-8 ">
        <div className="bg-[#DCDCDC] hover:animate-pulse rounded-lg grid gap-3 grid-cols-2">
          <div><img src={Cycling} className="pt-8 pb-8 pl-8 w-96 h-108 " /></div>
          <div className="pt-8  text-3xl font-bold text-red-800">CYCLING
            <div className="pt-2 pr-4 text-xl font-light text-black indent-8 text-justify">Cycling is an aerobic exercise that
              strengthens the various organs and burns up to 400 calories per hour. This results in the rider in good shape and health.
              But before turning to exercise in this way It is best to study the information in various fields thoroughly beforehand.
            </div>
          </div>
          <div></div>
        </div>
        <div className="pt-8">
          <div className="bg-[#DCDCDC] hover:animate-pulse rounded-lg grid gap-3 grid-cols-2">
            <div><img src={Walk} className="pt-8 pb-8 pl-8 w-96 h-108 " /></div>
            <div className="pt-8  text-3xl font-bold text-red-800">WALK
              <div className="pt-2 pr-4 text-xl font-light text-black indent-8 text-justify"> Walk continuously for 30 minutes a day,
                at least 4-5 days a week. It is an exercise that does not make the body too tired. low ankle impact Suitable for those
                who are overweight, the elderly, those who rarely exercise. or have not exercised for a long time
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="pt-8">
          <div className="bg-[#DCDCDC] hover:animate-pulse rounded-lg grid gap-3 grid-cols-2">
            <div><img src={Swim} className="rounded-lg  pt-8 pb-8 pl-8 w-96 h-108 " /></div>
            <div className="pt-8  text-3xl font-bold text-red-800">SWIM
              <div className="pt-2 pr-4 text-xl font-light text-black indent-8 text-justify"> It is a water activity that can be played by
                all genders and ages. And it is also useful in a variety of fields. Both provide fun, enjoyment and strengthen the body.
                The more you learn how to swim properly, the more your body will benefit from this activity.
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="w-full"><img src={Footex} className="" /></div>
        </div>
      </div>
    </div>
  );
};

export { exercise as Exercise };