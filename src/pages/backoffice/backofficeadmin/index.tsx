import react from "react";
import { Sidebar } from 'components';
import User from 'assets/images/user.png';




const backofficeAdmin = () => {
    return(
        
    <div className="flex">
        <Sidebar/>

        <div className="container mx-auto mt-6 px-3">
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Total Admin
                    </div>
                    <div className='flex justify-between'>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            19
                        </div>
                        <div><img src={ User } className="w-8" /></div>
                    </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Total Trainer
                    </div>
                    <div className='flex justify-between'>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            13
                        </div>
                        <div><img src={ User } className="w-8" /></div>
                    </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Total User
                    </div>
                    <div className='flex justify-between'>
                        <div className="mt-1 text-3xl font-semibold text-gray-900">
                            2,999
                        </div>
                        <div><img src={ User } className="w-8" /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    

    
    );
}

export {backofficeAdmin as BackofficeAdmin};