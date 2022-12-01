import React from "react"
import Delete from "assets/images/delete.gif"
import { TextField, Button, Buttoncancel, Bottontrainer , Slotclasscardio, Slotclassstrength, Slotclasssflexlity, } from 'components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const del: React.FC<any> = ({currentUser}) => {
    const navigate = useNavigate();
    const id = (currentUser.id)
    console.log(id);
    
    axios.delete(`http://146.190.92.231/classes/${id}`)
    .then(res => {
        console.log("success");
        
      })
  

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="border-4 border-rose-600  border-solid rounded-lg bg-white">
                <div className="flex justify-center">
                    <div className="text-Black text-3xl py-16">Confrim to Delete</div>
                    <div className="w-16 py-12" ><img src={ Delete }/></div>
                </div>
                <div className="flex justify-between">
                    <div className="px-4 pb-2"><Buttoncancel onClick={() => { navigate('/adminclass'); }} buttonName="Cancel" /></div>
                    <div className="px-4 pb-2"><Bottontrainer onClick={() => { navigate('/adminclass'); }} buttonName="Confirm"/></div>
                </div>
            </div>
        </div>
    );
};

export { del as Del }