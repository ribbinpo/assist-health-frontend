import React from 'react';
import { Sidebar } from "components";
import { useNavigate, useRoutes } from 'react-router-dom';
import User from 'assets/images/user.png';
import Arrow from 'assets/images/arrow.png'

const viewclass = () => {
    const router = useNavigate();
    const navigate = useNavigate();
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
                            3
                        </div>
                        <div><img src={ User } className="w-8" /></div>
                    </div>
                </div>
            </div>
            </div>
            <div className="px-2 pt-5 pb-3">
                <hr></hr>
            </div>
            <div className="w-full pt-5 px-2">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                            <tr>
                                <th scope="col" className="py-3 px-5">
                                    ID
                                </th>
                                <th scope="col" className="py-3 px-5">
                                    Name
                                </th>
                                <th scope="col" className="py-3 px-5">
                                    Tel
                                </th>
                                <th scope="col" className="py-3 px-5">
                                    Status
                                </th>
                                
                    
                            </tr>
                        </thead>
                        <tbody>
                            {
                            <tr className="bg-white border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                    1
                                </th>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    Nattapong bunchokying
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    0887827071
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    confirm
                                </td>
                            </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <div className="absolute right-0 p-8">
                <button className="w-45 border-2 rounded-md border-[#9D9A9A] bg-[#F5F5F5] text-[#5E5454] shadow-md p-3 px-4 flex 
                hover:-translate-y-1 hover:scale-103 hover:bg-[#DBDBDB] duration-300 hover:border-[#606060]" onClick={() => { navigate('/adminclass'); }}>
                <div className="w-10 pr-4"><img src={Arrow} className="" /></div>
                    BACK</button>
                </div>
            </div>
            </div>
        </div>
    )
};

export { viewclass as Viewclass};