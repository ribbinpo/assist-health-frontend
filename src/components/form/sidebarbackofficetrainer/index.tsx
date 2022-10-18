import react from "react"
import Logo from 'assets/images/Logo.png';
import Classicon from 'assets/images/classicon.png';
import Exercise from 'assets/images/exerciseicon.png';
import Logout from 'assets/images/logout.png';
import Account from 'assets/images/traineraccount.png';
import Schedule from 'assets/images/schedule.png';
import MangeSchedule from 'assets/images/mangeschedule.png';

import { useNavigate } from 'react-router-dom';


const sidebartrainer = () => {
    return(
        <div className="flex">
        <div className="flex flex-col h-screen p-3 bg-green shadow w-60">
            <div className="space-y-3">
                <div className="flex items-center">
                <img src={ Logo } className="w-14 px-1" />
                    <h2 className="text-xl font-bold font-xl">Trainer</h2>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm">
                            <a
                                href="/admin"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <div className="flex items-center">
                            <img src={ Account } className="w-10 pr-2" />
                            <span>Account</span>
                            </div>
                                
                            </a>
                        </li>
                        <li className="rounded-sm">
                            <a
                                href="/user"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <div className="flex items-center">
                            <img src={ Schedule } className="w-10 pr-2" />
                            <span>User</span>
                            </div>   
                                
                            </a>
                        </li>
                        <li className="rounded-sm">
                            <a
                                href="/adminclass"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <div className="flex items-center">
                            <img src={ MangeSchedule } className="w-10 pr-2" />
                            <span>Class</span>
                            </div>   
                            </a>
                        </li>
                        <li className="rounded-sm">
                            <a
                                href="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <div className="flex items-center">
                            <img src={ Exercise } className="w-10 pr-2" />
                            <span>Exercise</span>
                            </div>   
                            </a>
                        </li>
                        <div className="pt-3">
                        <hr className="border-black"></hr>
                        </div>
                        <li className="rounded-sm">
                            <a
                                href="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                            <div className="flex items-center">
                            <img src={ Logout } className="w-10 pr-2" />
                            <span>Logout</span>
                            </div>   
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export {sidebartrainer as Sidebartrainer}