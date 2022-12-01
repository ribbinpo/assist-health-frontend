import React, { useState } from 'react';
import { TextField, Button, LabelForm } from 'components';
import { useNavigate } from 'react-router-dom';
import Addclass from 'assets/images/addclass.png';
import axios from 'axios';




const addclass = () => {
 
  const navigate = useNavigate();
  const [nameclass, setnameclass] = useState('');
  const [classtype, setclasstype] = useState('');
  const [starttime, setstarttime] = useState('');
  const [endtime, setendtime] = useState('');
  const [limit, setlimit] = useState('');
  const [status, setstatus] = useState(true);
  const [room, setroom ] = useState('');
  const [teacher, setteacher] = useState('');
  
  

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nameclass);
    console.log(classtype);
    console.log(starttime);
    console.log(endtime);
    console.log(limit);
    console.log(status);
    console.log(room)
    console.log(teacher);
  
    const start = new Date(starttime);
    console.log(start);
    
    const end = new Date(endtime);
    console.log(end);
    

    const addclass = {
    className: nameclass,
    classType: classtype,
    start_time: start,
    end_time: end,
    limit: +limit,
    teacher: teacher,
    room_id: +room,
    status: status
    
    }
    console.log(addclass);

    axios.post("http://146.190.92.231/classes/create",addclass)
    .then(res => {
        console.log(res);
        navigate('/adminclass')
    })

  };

  return (
    <form onSubmit={onSubmit}>
    <div className=' w-full justify-center'>
    <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-y-5 py-5 rounded-md px-10" style={{ backgroundColor: '#EAE9E9' }}>
          <div className='flex iteams-center'>
            <img src={ Addclass } className="w-20 h-20" />
            <h1 className='text-5xl ml-5 pt-6'>Add Class</h1>

          </div>
            <div>
            <LabelForm text="Name class"/>
            <TextField placeholder="Name class" value={nameclass} onChange={(e) => setnameclass(e.target.value)}/></div>
            <div className='grid gap-2 grid-cols-2'>
                <div>
                <LabelForm text="Type"/>
                    <select id="classtype" name="type" value={classtype} onChange={(e) => setclasstype(e.target.value)} className='form-input rounded-md border-none p-3 text-[#595757] w-full'>
                        <option value="type">Type</option>
                        <option value="CARDIO">CARDIO</option>
                        <option value="STRENGTH">STRENGTH</option>
                        <option value="FLEXLITY">FLEXLITY</option>
                    </select>
                </div>
                <div>
                <LabelForm text="Room"/>
                <TextField placeholder="Room" value={room} onChange={(e) => setroom(e.target.value)}/>
                </div>
            </div>

            <div className='grid gap-2 grid-cols-2'>
                <div>
                <LabelForm text="Start time"/>
                <div><input type="datetime-local" value={starttime} onChange={(e) => setstarttime(e.target.value)} className="form-input rounded-md border-none p-3  w-full"/></div>
                </div>
                <div>
                <LabelForm text="End time"/>
                <div><input type="datetime-local" value={endtime} onChange={(e) => setendtime(e.target.value)} className="form-input rounded-md border-none p-3  w-full"/></div>
                </div>
            </div>
            <div className='grid gap-2 grid-cols-2'>
                <div>
                <LabelForm text="Limit"/>
                <TextField placeholder="Limit" value={limit} onChange={(e) => setlimit(e.target.value)}/>
                </div>
                {/* <div>
                <LabelForm text="Status"/>
                <select id="status" name="status" value={status} onChange={(e) => setstatus(e.target.value)} className='form-input rounded-md border-none p-3 text-[#595757] w-full'>
                        <option value="status">Status</option>
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                </div> */}
            </div>
            <div>
            <LabelForm text="Teacher"/>
            <TextField placeholder="Teacher" value={teacher} onChange={(e) => setteacher(e.target.value)}/>
            </div>
            <div className='pt-6 pl-80' onClick={() => { navigate('/adminclass'); }}>
            <Button buttonName="Add class"/>
            </div>
        </div>
        </div>
        </div>
        </form>
    
  );
}

export { addclass as Addclass };