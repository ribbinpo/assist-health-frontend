import React from 'react';
import { Sidebar } from "components";
import { useNavigate, useRoutes } from 'react-router-dom';
import User from 'assets/images/user.png';

const viewclass = () => {
    const router = useNavigate();
    return(
        <div className="flex">
            <Sidebar/>
            <div className="w-full">
            <div className="flex justify-between">
            <div className="px-2 pt-5 text-2xl font-bold">View booking class</div>
            <div className="pr-2 pt-2">
                <div className="w-80 px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Total booking
                    </div>
                    <div className='flex justify-between'>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            3git
                        </div>
                        <div><img src={ User } className="w-8" /></div>
                    </div>
                </div>
            </div>
            </div>
            <div className="px-2 pt-5 pb-3">
                <hr></hr>
            </div>

            <div className="pt-2 px-2 pl-2 w-full">
            <table className="border-collapse w-full text-center">
                <thead>
                    <tr>
                    <th className="border border-slate-300 w-8">Id</th>
                    <th className="border border-slate-300 w-36">Name</th>
                    <th className="border border-slate-300 w-36">Tel</th>
                    <th className="border border-slate-300 w-20">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="border border-slate-300 py-2 text-center">1</td>
                    <td className="border border-slate-300 py-2">Teerawut saysim</td>
                    <td className="border border-slate-300 py-2">0886735463</td>
                    <td className="border border-slate-300 py-2">Confirm</td>
                    
                    </tr>
                    <tr>
                    <td className="border border-slate-300 py-2 text-center">2</td>
                    <td className="border border-slate-300 py-2">Ronnakron sanyee</td>
                    <td className="border border-slate-300 py-2">0917828463</td>
                    <td className="border border-slate-300 py-2">Confrim</td>
                    
                    </tr>
                    <tr>
                    <td className="border border-slate-300 py-2 text-center">3</td>
                    <td className="border border-slate-300 py-2">Armmarin kongtong</td>
                    <td className="border border-slate-300 py-2">0762748374</td>
                    <td className="border border-slate-300 py-2">Confirm</td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
        </div>
    )
};

export { viewclass as Viewclass};