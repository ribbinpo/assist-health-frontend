import { Sidebar, Del, Edituser, Adduser } from "components";
import { useNavigate, useRoutes } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { useAccountStore } from 'store';
import axios from 'axios';


const backofficeuser = () => {

    const router = useNavigate();
    const [data, setData] = useState([]);
    const [curentEditUesr , setCurentEditUesr] = useState({});

    const [isOpenEditUser, setIsOpenEditUser] = useState(false)

    function closeModalEditUser() {
        setIsOpenEditUser(false)
    }

    // function openModalEditUser() {
    //     setIsOpenEditUser(true)
    // }

    function openModalEditUser(currentUser: any) {
        setCurentEditUesr(currentUser);
        setIsOpenEditUser(true)
        
   }

    const [isOpenDel, setIsOpenDel] = useState(false)

    function closeModalDel() {
        setIsOpenDel(false)
    }

    function openModalDel() {
        setIsOpenDel(true)
    }

    const [isOpenAdduser, setIsOpenAddUser] = useState(false)

    function closeModalAddUser() {
        setIsOpenAddUser(false)
    }

    function openModalAddUser() {
        setIsOpenAddUser(true)
    }

    const token = useAccountStore((state) => state.token);
    console.log(token);
    const bearer = "Bearer ".concat(token)
    // console.log(bearer);

    useEffect(() => {
        const getData = async () => {
            await axios.get("http://146.190.92.231/users", {
                headers: { Authorization: bearer }
            }).then(res => {
                setData(res.data)

            })
        }
        getData()


    }, [])

    console.log(typeof data);


    return (

        <div className="flex">
            <Sidebar />
            
            <Transition appear show={isOpenEditUser} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModalEditUser}>
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
                                    <div><Edituser currentUser={curentEditUesr} /></div>
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
            <Transition appear show={isOpenAdduser} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModalAddUser}>
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
                                    <div><Adduser /></div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>


            <div className="w-full">
                <div className="flex justify-between">
                    <div className="px-2 pt-5 text-2xl font-bold">All user</div>
                    <div> <button className='rounded-xl bg-[#00B11C] shadow-md mt-4 ml-2 mr-2 px-4'>
                        <div className="p-2 text-white" onClick={openModalAddUser}> Add User + </div>
                    </button></div>
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
                                    Email
                                </th>
                                <th scope="col" className="py-3 px-5">
                                    Type
                                </th>
                                <th scope="col" className="py-3 px-5">
                                    Create date
                                </th>
                                <th scope="col" className="py-3 px-5">
                                    Status
                                </th>
                                <th scope="col" className="py-3 px-5">
                                    Edit
                                </th>
                                <th scope="col" className="py-3 px-5">
                                    delete
                                </th>
                    
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((prop: any, i: React.Key) => (
                            <tr key={i} className="bg-white border-b">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                    {prop.id}
                                </th>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    {prop.username}
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    {prop.email}
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    {prop.role_id}
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    {prop.createdAt}
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    Avaliable
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                <button className="rounded-lg bg-[#00B11C] px-8" onClick={() => openModalEditUser(prop)}>Edit</button>
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                <button className="rounded-lg bg-red-600 px-5" onClick={openModalDel}>Delete</button>
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
};

export { backofficeuser as BackofficeUser };