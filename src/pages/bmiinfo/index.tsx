import react from 'react';
import Arrow from 'assets/images/arrow.png';
import { useNavigate } from 'react-router-dom';
import Bmi from 'assets/images/bmi.png'
import {FaLessThan} from "react-icons/fa";

const bmiinfo = () => {
    const navigate = useNavigate();

    return(
        <div className='bg-black w-full'>
            <div className='flex justify-between px-3 pt-3'>
            <div className='text-white text-5xl font-bold'>BMI</div>
            <button
            className="border-2 rounded-md border-[#9D9A9A] bg-[#F5F5F5] text-[#5E5454] shadow-md p-3 px-4 flex 
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
            <div>
                <img src={Bmi} alt="" />
            </div>
            <div>
                <div className='px-16 pt-12 pb-12'>
                    <div className='text-ellipsis overflow-hidden text-3xl font-bold text-white'>If the body mass index (BMI) exceeds 25, it is considered to be obese (Obesity), which is a disorder of the body where the amount of fat accumulated in various organs exceeds the standard. It is necessary to lose weight, control the amount of sugar, carbohydrates and Fat to prevent chronic disease and subsequent complications</div>
                </div>
            </div>
        </div>
    )
}

export {bmiinfo as Bmiimfo};