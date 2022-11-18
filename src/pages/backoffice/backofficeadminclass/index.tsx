import { Sidebar } from "components";
import { useNavigate, useRoutes } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { Addclass, Editclass, Del } from 'components';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'

const adminclass = () => {

    const router = useNavigate();
    const [items, setItems] = useState([])

    const [isOpen, setIsOpen] = useState(false)
  
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    const [isOpenEdit, setIsOpenEdit] = useState(false)
  
    function closeModalEdit() {
      setIsOpenEdit(false)
    }
  
    function openModalEdit() {
      setIsOpenEdit(true)
    }

    const [isOpenDel, setIsOpenDel] = useState(false)
  
    function closeModalDel() {
        setIsOpenDel(false)
    }
  
    function openModalDel() {
        setIsOpenDel(true)
    }

    useEffect(() => {
        const getItems = async () => {
            const response = await axios.get("http://localhost:8000/classes/getAll")
            const data = response.data
            setItems(data)
        }
        getItems()
    },[])
    
    
    
    return(
        <div className="flex">
            <Sidebar/>
            <div className="w-full">
            <div className="flex justify-between">
            <div className="px-2 pt-5 text-2xl font-bold">Class</div>
            <div></div>
            <div> <button 
            type="button"
            onClick={openModal} 
            className='rounded-xl bg-[#00B11C] shadow-md mt-4 ml-2 mr-2 px-4'> 
            <div className="p-2 text-white"> Add Class + </div> 
            </button></div>
            </div>
            <div className="px-2 pt-5 pb-3">
                <hr></hr>
            </div>
            
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                <div className="fixed inset-0 bg-opacity-25" />
                </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel>
                    <div><Addclass/></div>
                    </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>

            <Transition appear show={isOpenEdit} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModalEdit}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                <div className="fixed inset-0 bg-opacity-25" />
                </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel>
                    <div><Editclass/></div>
                    </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>

            <Transition appear show={isOpenDel} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModalDel}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                <div className="fixed inset-0 bg-opacity-25" />
                </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel>
                    <div><Del/></div>
                    </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>



      
            <div className="pt-2 px-2 pl-2 w-full">
            <table className="border-collapse w-full text-center">
                <thead>
                    <tr>
                    <th className="border border-slate-300 w-8">Id</th>
                    <th className="border border-slate-300 w-36">Name Class</th>
                    <th className="border border-slate-300 w-8">Type</th>
                    <th className="border border-slate-300 w-28">Strat Time</th>
                    <th className="border border-slate-300 w-28">End Time</th>
                    <th className="border border-slate-300 w-28">Date</th>
                    <th className="border border-slate-300 w-28">quality</th>
                    <th className="border border-slate-300 w-28">Status</th>
                    <th className="border border-slate-300 w-20">View👀</th>
                    <th className="border border-slate-300 w-20">Edit✏️</th>
                    <th className="border border-slate-300 w-20">delete🗑</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="border border-slate-300 py-2 text-center">1</td>
                    <td className="border border-slate-300 py-2">Bodybum</td>
                    <td className="border border-slate-300 py-2">Cardio</td>
                    <td className="border border-slate-300 py-2">08:00</td>
                    <td className="border border-slate-300 py-2">09:00</td>
                    <td className="border border-slate-300 py-2">14/10/2022</td>
                    <td className="border border-slate-300 py-2">20</td>
                    <td className="border border-slate-300 py-2">Avaliable</td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-[#00B11C] px-8" onClick={()=>{router("/viewclass");}}>View</button></td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-[#fff41c] px-8" onClick={openModalEdit}>Edit</button></td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-red-600 px-5" onClick={openModalDel}>Delete</button></td>
                    </tr>
                    <tr>
                    <td className="border border-slate-300 py-2 text-center">2</td>
                    <td className="border border-slate-300 py-2">Bodybum</td>
                    <td className="border border-slate-300 py-2">Cardio</td>
                    <td className="border border-slate-300 py-2">08:00</td>
                    <td className="border border-slate-300 py-2">09:00</td>
                    <td className="border border-slate-300 py-2">14/10/2022</td>
                    <td className="border border-slate-300 py-2">20</td>
                    <td className="border border-slate-300 py-2">Avaliable</td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-[#00B11C] px-8" onClick={()=>{router("/viewclass");}}>View</button></td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-[#fff41c] px-8" onClick={()=>{router("/editclass");}}>Edit</button></td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-red-600 px-5">Delete</button></td>
                    </tr>
                    <tr>
                    <td className="border border-slate-300 py-2 text-center">3</td>
                    <td className="border border-slate-300 py-2">Bodybum</td>
                    <td className="border border-slate-300 py-2">Cardio</td>
                    <td className="border border-slate-300 py-2">08:00</td>
                    <td className="border border-slate-300 py-2">09:00</td>
                    <td className="border border-slate-300 py-2">14/10/2022</td>
                    <td className="border border-slate-300 py-2">20</td>
                    <td className="border border-slate-300 py-2">Avaliable</td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-[#00B11C] px-8" onClick={()=>{router("/viewclass");}}>View</button></td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-[#fff41c] px-8" onClick={()=>{router("/editclass");}}>Edit</button></td>
                    <td className="border border-slate-300 py-2"><button className="rounded-lg bg-red-600 px-5">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            </div>

            <div className="w-full pt-5 px-2">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                            <tr>
                                <th scope="col" className="py-3 px-3">
                                    Class ID
                                </th>
                                <th scope="col" className="py-3 px-3">
                                    Name class
                                </th>
                                <th scope="col" className="py-3 px-3">
                                    Type
                                </th>
                                <th scope="col" className="py-3 px-3">
                                    Start Time
                                </th>
                                <th scope="col" className="py-3 px-3">
                                    End Time
                                </th>
                                <th scope="col" className="py-3 px-3">
                                    Entries
                                </th>
                                <th scope="col" className="py-3 px-3">
                                    Limit
                                </th>
                                <th scope="col" className="py-3 px-3">
                                    View
                                </th>
                                <th scope="col" className="py-3 px-3">
                                    Edit
                                </th>
                                <th scope="col" className="py-3 px-3">
                                    Delete
                                </th>
                    
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((prop: any, i: React.Key) => (
                            <tr key={i} className="bg-white border-b">
                                <th scope="row" className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap ">
                                    {prop.id}
                                </th>
                                <td className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap">
                                    {prop.className}
                                </td>
                                <td className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap">
                                    {prop.classType}
                                </td>
                                <td className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap">
                                    {prop.className}
                                </td>
                                <td className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap">
                                    {prop.className}
                                </td>
                                <td className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap">
                                    {prop.className}
                                </td>
                                <td className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap">
                                    {prop.className}
                                </td>
                                <td className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap">
                                    {prop.className}
                                </td>
                                <td className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap">
                                    {prop.className}
                                </td>
                                <td className="py-4 px-3 font-medium text-gray-900 whitespace-nowrap">
                                    {prop.className}
                                </td>
                                
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
};


export { adminclass as Adminclass};