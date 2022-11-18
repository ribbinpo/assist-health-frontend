import { Sidebar, Addroom, Editroom,  Del } from "components";
import { useNavigate, useRoutes } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { useAccountStore } from 'store';
import axios from 'axios';



const adminroom = () => {

    const router = useNavigate();
    const [items, setItems] = useState([])
    
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [isOpendel, setIsOpenDel] = useState(false)

    function closeModalDel() {
        setIsOpenDel(false)
    }

    function openModalDel() {
        setIsOpenDel(true)
    }

    const [isOpenEdit, setIsOpenEdit] = useState(false)

    function closeModulEdit() {
        setIsOpenEdit(false)
    }

    function openModalEdit() {
        setIsOpenEdit(true)
    }

    useEffect(() => {
        const getItems = async () => {
            const response = await axios.get("http://localhost:8000/room/getAll")
            const data = response.data
            setItems(data)
        }
        getItems()
    },[])

    
    

    return (
        <div className="flex">
            <Sidebar/>
            <div className="w-full">
                <div>
                    <div className="flex justify-between">
                        <div className="px-2 pt-5 text-2xl font-bold">Room</div>
                            <div> <button type="button"
                            onClick={openModal} 
                                className='rounded-xl bg-[#00B11C] shadow-md mt-4 ml-2 mr-2 px-4'> 
                                <div className="p-2 text-white"> Add Room + </div> 
                                </button></div>
                            </div>
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
                    <div><Addroom/></div>
                    </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
                </Transition>

                <Transition appear show={isOpendel} as={Fragment}>
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

                <Transition appear show={isOpenEdit} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModulEdit}>
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
                    <div><Editroom/></div>
                    </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
                </Transition>


                
                <div className="w-full pt-5 px-2">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Room ID
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Room name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                    
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((prop: any, i: React.Key) => (
                            <tr key={i} className="bg-white border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                    {prop.id}
                                </th>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    {prop.roomName}
                                </td>
                                <td className="py-4 px-6">
                                    <a href="#" className="font-medium text-blue-600  hover:underline" onClick={openModalEdit}>Edit</a>
                                    &nbsp;&nbsp;
                                    <a href="#" className="font-medium text-blue-600  hover:underline" onClick={openModalDel}>Delet</a>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
}


export { adminroom as Adminroom}