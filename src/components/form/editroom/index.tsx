import React, { useState } from 'react';
import { TextField, Button, LabelForm } from 'components';
import { useNavigate } from 'react-router-dom';
import Classroom from 'assets/images/classroom.png';


interface Props {
  currentRoom: any
}
const editroom: React.FC<Props> = ({currentRoom}) => {
 
  const navigate = useNavigate();
  const [roomName, setroomName] = useState(currentRoom.roomName);
 

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(roomName);
    

    const roomname = {
    roomName: roomName,
   
    }
    console.log(roomname);

  };

  return (
    <form onSubmit={onSubmit}>
    <div className=' w-full justify-center'>
    <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-y-5 py-5 rounded-md px-10" style={{ backgroundColor: '#EAE9E9' }}>
          <div className='flex iteams-center'>
            <img src={ Classroom } className="w-20 h-20" />
            <h1 className='text-5xl ml-5 pt-6'>Edit room</h1>

          </div>
            <div className='py-8'>
            <LabelForm text="Name room"/>
              <TextField placeholder="Name room" value={roomName} onChange={(e) => setroomName(e.target.value)}/>
            </div>
            <Button buttonName="Edit room"/>
            </div>
        
        </div>
        </div>
        </form>
    
  );
}

export { editroom as Editroom };