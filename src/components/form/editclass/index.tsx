import React, { useState } from 'react';
import { TextField, Button, LabelForm } from 'components';
import { useNavigate } from 'react-router-dom';
import Editclass from 'assets/images/editclass.png';
import { Time } from 'assets/data/time';




const editclass = () => {
 
  const navigate = useNavigate();
  const [nameclass, setnameclass] = useState('');
  const [classtype, setclasstype] = useState('');
  const [date, setdate] = useState('');
  const [starttime, setstarttime] = useState('');
  const [endtime, setendtime] = useState('');
  const [limit, setlimit] = useState('');
  const [status, setstatus] = useState('');
  const [room, setroom ] = useState('');
  

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nameclass);
    console.log(classtype);
    console.log(date);
    console.log(starttime);
    console.log(endtime);
    console.log(limit);
    console.log(status);

    const editclass = {
    nameclass: nameclass,
    classtype: classtype,
    date: date,
    starttime: starttime,
    endtime: endtime,
    limit: limit,
    status: status,
    }
    console.log(editclass);

  };

  return (
    <form onSubmit={onSubmit}>
    <div className=' w-full justify-center'>
    <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-y-5 py-5 rounded-md px-10" style={{ backgroundColor: '#EAE9E9' }}>
          <div className='flex iteams-center'>
            <img src={ Editclass } className="w-20 h-20" />
            <h1 className='text-5xl ml-5 pt-6'>Edit Class</h1>

          </div>
            <div>
            <LabelForm text="Name class"/>
            <TextField placeholder="Name class" value={nameclass} onChange={(e) => setnameclass(e.target.value)}/></div>
            <div className='grid gap-2 grid-cols-2'>
                <div>
                <LabelForm text="Type"/>
                    <select id="classtype" name="type" value={classtype} onChange={(e) => setclasstype(e.target.value)} className='form-input rounded-md border-none p-3 text-[#595757] w-full'>
                        <option value="type">Type</option>
                        <option value="cardio">Cardio</option>
                        <option value="strength">Strength</option>
                        <option value="flexliity">Flexlity</option>
                    </select>
                </div>
                <div>
                <LabelForm text="Room"/>
                <TextField placeholder="Room" value={room} onChange={(e) => setnameclass(e.target.value)}/>
                </div>
            </div>

            <div className='grid gap-2 grid-cols-2'>
                <div>
                <LabelForm text="Start time"/>
                <div><input type="datetime-local" value={date} onChange={(e) => setdate(e.target.value)} className="form-input rounded-md border-none p-3  w-full"/></div>
                </div>
                <div>
                <LabelForm text="End time"/>
                <div><input type="datetime-local" value={date} onChange={(e) => setdate(e.target.value)} className="form-input rounded-md border-none p-3  w-full"/></div>
                </div>
            </div>
            <div className='grid gap-2 grid-cols-2'>
                <div>
                <LabelForm text="Limit"/>
                <TextField placeholder="Limit" value={limit} onChange={(e) => setlimit(e.target.value)}/>
                </div>
                <div>
                <LabelForm text="Status"/>
                <select id="status" name="status" value={status} onChange={(e) => setstatus(e.target.value)} className='form-input rounded-md border-none p-3 text-[#595757] w-full'>
                        <option value="status">Status</option>
                        <option value="avaliable">Avaliable</option>
                        <option value="unavaliable">Unavaliable</option>
                    </select>
                </div>
            </div>
            <div className='pt-6 pl-80' onClick={() => { navigate('/adminclass'); }}>
            <Button buttonName="Edit class"/>
            </div>
        </div>
        </div>
        </div>
        </form>
    
  );
}

export { editclass as Editclass };