import React from "react";
import { useNavigate } from 'react-router-dom';
import Classtoday from 'assets/images/classtoday.png'

const classfitness = () => {
    return (
        <div>
            <div><img src={Classtoday} className="w-full pt-3" /></div>
            <div  className="grid gap-2 grid-cols-4 pt-3">
                <div className="text-5xl ml-5 font-bold">CLASS’s TODAY</div>
                <div className="bg-[#F17474] uppercase rounded-full flex justify-center items-center">
                    <div className="text-white">CARDIO</div> 
                </div>
                <div className="bg-[#D0E495] uppercase rounded-full flex justify-center items-center">
                    <div className="text-white">STRENGTH</div> 
                </div>
                <div className="bg-[#74B5F1] uppercase rounded-full flex justify-center items-center ">
                    <div className="text-white">FLEXLITY</div> 
                </div>
            </div>
            <div className="p-8 bg-black text-white rounded-full flex justify-center items-center">
            <table className="table-auto">
                <thead>
                    <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                    </tr>
                    <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                    </tr>
                    <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
};

export { classfitness as Classfitness };