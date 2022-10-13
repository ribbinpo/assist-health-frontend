import { Sidebar } from "components";
import React from "react";
import { TextField, Button, Buttoncancel, Topictrainer,Bottontrainer } from 'components';
import { useNavigate, useRoutes } from 'react-router-dom';


const backofficeuser = () => {

    const router = useNavigate();
    return (
        <div className="flex">
            <Sidebar/>
            <div className="w-full">
            <div className="flex justify-between">
            <div className="px-2 pt-5 text-2xl font-bold">All user</div>
            <div> <button className='rounded-xl bg-[#00B11C] shadow-md mt-4 ml-2 mr-2 px-4'> 
            <div className="p-2 text-white" onClick={()=>{router("/adduser");}}> Add User + </div> 
            </button></div>
            </div>

            <div className="pt-2 px-2 pl-2 w-full">
            <table className="border-collapse w-full text-center">
                <thead>
                    <tr>
                    <th className="border border-slate-300 w-8">Id</th>
                    <th className="border border-slate-300 w-60">Name</th>
                    <th className="border border-slate-300 w-72">Email</th>
                    <th className="border border-slate-300 w-20">Type</th>
                    <th className="border border-slate-300 w-36">Create date</th>
                    <th className="border border-slate-300 w-28">Status</th>
                    <th className="border border-slate-300 w-20">Edit✏️</th>
                    <th className="border border-slate-300 w-20">delete🗑</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="border border-slate-300 py-2 text-center">1</td>
                    <td className="border border-slate-300 py-2">Nattapong</td>
                    <td className="border border-slate-300 py-2">s6230613032@phuket.psu.ac.th</td>
                    <td className="border border-slate-300 py-2">Admin</td>
                    <td className="border border-slate-300 py-2">10/10/2022</td>
                    <td className="border border-slate-300 py-2">Avaliable</td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-[#00B11C] px-8" onClick={()=>{router("/edituser");}}>Edit</button></td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-red-600 px-5">Delete</button></td>
                    </tr>
                    <tr>
                    <td className="border border-slate-300 py-2 ">2</td>
                    <td className="border border-slate-300 py-2">Ronnakorn</td>
                    <td className="border border-slate-300 py-2">s6230613003@phuket.psu.ac.th</td>
                    <td className="border border-slate-300 py-2 ">Trainer</td>
                    <td className="border border-slate-300 py-2">10/10/2022</td>
                    <td className="border border-slate-300 py-2 ">Avaliable</td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-[#00B11C] px-8" onClick={()=>{router("/edituser");}}>Edit</button></td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-red-600 px-5">Delete</button></td>
                    </tr>
                    <tr>
                    <td className="border border-slate-300 py-2 ">3</td>
                    <td className="border border-slate-300 py-2">Teerawut</td>
                    <td className="border border-slate-300 py-2">s6230613020@phuket.psu.ac.th</td>
                    <td className="border border-slate-300 py-2 ">user</td>
                    <td className="border border-slate-300 py-2 ">10/10/2022</td>
                    <td className="border border-slate-300 py-2 ">Avaliable</td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-[#00B11C] px-8 cursor-pointer" onClick={()=>{router("/edituser");}}>Edit</button></td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-red-600 px-5">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
        </div>
    );
};

export {backofficeuser as BackofficeUser};