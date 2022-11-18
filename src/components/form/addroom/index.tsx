import React, { useState } from 'react';
import { TextField, Button } from 'components';
import { useNavigate } from 'react-router-dom';
import Classroom from 'assets/images/classroom.png';
import axios from 'axios';

const addroom = () => {
 
  const navigate = useNavigate();
  const [roomName, setroomName] = useState('');
 

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    const addroom = {
    roomName: roomName
   
    };
    console.log(addroom);
    
    axios.post("http://localhost:8000/room/create",addroom)
    .then(res => {
        console.log("success");
        navigate('/adminroom')
    })
    };
  
  

  return (
    <form onSubmit={onSubmit}>
    <div className=' w-full justify-center'>
    <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-y-5 py-5 rounded-md px-10" style={{ backgroundColor: '#EAE9E9' }}>
          <div className='flex iteams-center'>
            <img src={ Classroom } className="w-20 h-20" />
            <h1 className='text-5xl ml-5 pt-6'>Add room</h1>

          </div>
            <div className='py-8'>
              <TextField placeholder="Name room" value={roomName} onChange={(e) => setroomName(e.target.value)}/>
            </div>
            <Button buttonName="Add room"/>
            </div>
        
        </div>
        </div>
        </form>
    
  );
}

export { addroom as Addroom };