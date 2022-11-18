import React from "react"
import Delete from "assets/images/delete.gif"
import { TextField, Button, Buttoncancel, Bottontrainer , Slotclasscardio, Slotclassstrength, Slotclasssflexlity, } from 'components';

const del = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="border-4 border-rose-600  border-solid rounded-lg">
                <div className="flex justify-center">
                    <div className="text-Black text-3xl py-16">Confrim to Delete</div>
                    <div className="w-16 py-12" ><img src={ Delete }/></div>
                </div>
                <div className="flex justify-between">
                    <div className="px-4 pb-2"><Buttoncancel buttonName="Cancel" /></div>
                    <div className="px-4 pb-2"><Bottontrainer buttonName="Confirm" /></div>
                </div>
            </div>
        </div>
    );
};

export { del as Del }