import React from "react";
import Exercise2 from 'assets/images/exercise2.png'
import Cycling from 'assets/images/cycling.png'
import Walk from 'assets/images/walk.png'
import Swim from 'assets/images/swim.png'

const exercise = () => {
    return(
        <div>
          <div><img src={Exercise2} className="w-full" /></div>
          <div className="text-5xl pl-7 pt-8 font-bold text-red-800">Exercise</div>
          <div className="p-8 ">
            <div className="bg-[#DCDCDC] rounded-lg grid gap-3 grid-cols-2">
                <div><img src={Cycling} className="pt-8 pb-8 pl-8 w-96 h-108 "/></div>
                <div className="pt-8  text-3xl font-bold text-red-800">CYCLING
                  <div className="pt-2 pr-4 text-xl font-light text-black indent-8 text-justify">Cycling is an aerobic exercise that 
                  strengthens the various organs and burns up to 400 calories per hour. This results in the rider in good shape and health. 
                  But before turning to exercise in this way It is best to study the information in various fields thoroughly beforehand.
                  </div>
                </div>
            <div></div>
            </div>
            <div className="pt-8">
            <div className="bg-[#DCDCDC] rounded-lg grid gap-3 grid-cols-2">
                <div><img src={Walk} className="pt-8 pb-8 pl-8 w-96 h-108 "/></div>
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
            <div className="bg-[#DCDCDC] rounded-lg grid gap-3 grid-cols-2">
                <div><img src={Swim} className="pt-8 pb-8 pl-8 w-96 h-108 "/></div>
                <div className="pt-8  text-3xl font-bold text-red-800">SWIM
                  <div className="pt-2 pr-4 text-xl font-light text-black indent-8 text-justify"> It is a water activity that can be played by 
                  all genders and ages. And it is also useful in a variety of fields. Both provide fun, enjoyment and strengthen the body. 
                  The more you learn how to swim properly, the more your body will benefit from this activity.
                  </div> 
                </div>
            <div></div>
            </div>
            </div>
            </div>
        </div>
    );
};

export { exercise as Exercise };