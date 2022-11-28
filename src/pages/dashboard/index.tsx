import React, { useEffect, useState } from 'react';
import Dashboard from 'assets/images/Dashboard.png';
import Class from 'assets/images/class.png'
import Exercise from 'assets/images/exercise.png'
import Trainer from 'assets/images/trainer.png'
import { useNavigate } from 'react-router-dom';
import Dashboardinfo from 'assets/images/dashboardinfo.jpg';
import Cardio from 'assets/images/cardio.jpg'
import Strength from 'assets/images/strength.jpg'
import Flexlity from 'assets/images/flexlity.jpg'
import {FiArrowRight} from 'react-icons/fi';


const dashboard = () => {
    const navigate = useNavigate();
    const [weight, setWeight] = useState <any>(0);
    const [height, setHeight] = useState <any>(0);
    const [bmi, setBmi] = useState <any>(0);
    const [currnthelath, setCurrntHelath] = useState("");

    console.log(weight);
    console.log(height);

    function calbmi() {
        const cal = weight / ((height / 100) * (height / 100));
        setBmi(cal.toFixed(2))
        if (cal == 0) {
            setCurrntHelath("fat");
            console.log('fat');
        } else if (cal > 0 && cal < 10){
            setCurrntHelath("thing555555");
            console.log('thing55555');
        } else if (cal > 11 && cal < 40){
            setCurrntHelath("fater555555");
            console.log('fater5555')
        }
    }
    
    // useEffect(() => {
    //     if (bmi == 0) {
    //         setCurrntHelath("fat");
    //         console.log('fat');
    //     } else if (bmi > 0 && bmi < 10){
    //         setCurrntHelath("thing555555");
    //         console.log('thing55555');
    //     } else if (bmi > 11 && bmi < 40){
    //         setCurrntHelath("fater555555");
    //         console.log('fater5555')
    //     }
    // }, [bmi])
    

       
        
      
   
    return (
        <div className='bg-black'>
            <div className='justify-items-center'>
                <div ><img src={Dashboard} className="w-full" /></div>
                <br />
                <div className="px-36 py-6">
                    <div className='grid gap-x-8 gap-y-4 grid-cols-3'>
                        <div className='pl-3 opacity-75 hover:opacity-100 hover:scale-90' onClick={() => { navigate('/classfitness'); }}><img src={Class} className="w-30" /></div>
                        <div className='px-1.5 opacity-75 hover:opacity-100  hover:scale-90' onClick={() => { navigate('/exercise') }}><img src={Exercise} className="w-30" /></div>
                        <div className='pr-3 opacity-75 hover:opacity-100  hover:scale-90' onClick={() => { navigate('/trainer') }}><img src={Trainer} className="w-30" /></div>
                    </div>
                </div>
                <div>
                    <div className='px-8 py-6'>
                        <div><label className="form-label font-semibold text-3xl inline-block mb-2 text-white"
                            >BMI</label>
                        </div>
                        <div className='flex pr-2'>
                            <div className='pb-3 w-full'><input
                                type="number"
                                onChange={(e) => setWeight(e.target.value)}
                                className="form-control block w-full px-3 p py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleNumber0"
                                placeholder="Weight(KG)"
                            /></div>
                            <div className='w-full pl-2'><input
                                type="number"
                                onChange={(e) => setHeight(e.target.value)}
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleNumber0"
                                placeholder="Height(CM)"
                            /></div>
                            <div className='pl-2'>
                            <button className="hover:bg-red-900 text-white bg-red-800 font-semibold hover:text-white py-1 px-8   border-red-500 hover:border-white border-2 hover:border-transparent rounded"
                            onClick={calbmi}>
                                Button
                                </button>
                            </div>
                        </div>
                            <div className='bg-red-800 w-full rounded-md p-8'>
                                <div className=' p-8 border-2 border-rose-600 rounded-md bg-white'>
                                    <div className='grid justify-items-center '>
                                        <div className='text-3xl font-medium'>BMI</div>
                                        <div  className='text-5xl font-bold'>{bmi}</div>
                                        <div className=' pt-5'><button className=" flex hover:bg-red-900 text-white bg-red-800 font-semibold hover:text-white py-1 px-8   border-red-500 hover:border-white border-2 hover:border-transparent rounded"
                                        onClick={calbmi}>
                                            See more <div className='hover:animate-ping pl-2'onClick={() => { navigate('/bmiinfo'); }}><FiArrowRight size={28}/></div>
                                        </button></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div>
                </div>
                <div className='hover:animate-pulse w-full flex justify-center'><img src={Cardio} alt="" /></div>
                <div className='hover:animate-pulse w-full flex justify-center'><img src={Strength} alt="" /></div>
                <div className='hover:animate-pulse w-full flex justify-center'><img src={Flexlity} alt="" /></div>
                <div className='hover:animate-pulse w-full flex justify-center'><img src={Dashboardinfo} alt="" /></div>
            </div>
            <div className='bg-red-800 p-3 w-full mt-8 py-8'>
                <div className='flex justify-center items-center'>
                    <div className='text-white pl-2'> © 2022 Assist Health | By Nattapong B. x Teerawut</div>
                </div>
            </div>
        </div>
    );
};

export { dashboard as Dashboard };
