import react  from "react"
import { useNavigate, useRoutes } from 'react-router-dom';
import { Sidebartrainer, Addtime, Edittime } from 'components';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


const trainermangeschedule = () => {

    const router = useNavigate();

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

    return(
        <div  className="flex">
            <Sidebartrainer/>

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
                    <div><Addtime/></div>
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
                    <div><Edittime/></div>
                    </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>

            <div  className="w-full">
                <div  className="flex justify-between pb-8">
                <div  className="text-5xl ml-5 pt-8 font-bold pl-2">Mange Schedule</div>
                <button type="button"
                // onClick={openModal} 
                  className='rounded-xl bg-[#00B11C] shadow-md mt-4 ml-2 mr-2 px-4' onClick={openModal}> 
                <div  className="px-4 text-white"> Add Time + </div> 
                 </button>
                </div>

               
                <div  className="px-5 ">
                <hr></hr>
                </div>

            <div  className="overflow-x-auto relative shadow-md sm:rounded-lg px-5 pt-3 pb-5">
                <table  className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead  className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col"  className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col"  className="py-3 px-6">
                                Start Time
                            </th>
                            <th scope="col"  className="py-3 px-6">
                                End Time
                            </th>
                            <th scope="col"  className="py-3 px-6">
                                Status
                            </th>
                            <th scope="col"  className="py-3 px-6">
                                Action
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row"  className="py-4 px-6">
                                Julie
                            </th>
                            <td  className="py-4 px-6">
                                08:00
                            </td>
                            <td  className="py-4 px-6">
                                09:00
                            </td>
                            <td  className="py-4 px-6">
                                Available
                            </td>
                            <td  className="py-4 px-6">
                                <a onClick={openModalEdit}  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr  className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"  className="py-4 px-6">
                                julie
                            </th>
                            <td  className="py-4 px-6">
                                09:00
                            </td>
                            <td  className="py-4 px-6">
                                10:00
                            </td>
                            <td  className="py-4 px-6">
                                Available
                            </td>
                            <td  className="py-4 px-6">
                                <a href="#"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr  className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"  className="py-4 px-6">
                                julie
                            </th>
                            <td  className="py-4 px-6">
                                10:00
                            </td>
                            <td  className="py-4 px-6">
                                11:00
                            </td>
                            <td  className="py-4 px-6">
                                Available
                            </td>
                            <td  className="py-4 px-6">
                                <a href="#"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr  className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"  className="py-4 px-6">
                                julie
                            </th>
                            <td  className="py-4 px-6">
                                09:30
                            </td>
                            <td  className="py-4 px-6">
                                10:30
                            </td>
                            <td  className="py-4 px-6">
                                Available
                            </td>
                            <td  className="py-4 px-6">
                                <a href="#"  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
      
    );
}

export { trainermangeschedule as Trainermangeschedule};