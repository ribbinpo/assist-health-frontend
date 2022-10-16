import React, { useState } from 'react';
import { Sidebar } from 'components';
import { TextField, Button } from 'components';
import Logo from 'assets/images/Logo.png'
import { useNavigate } from 'react-router-dom';
import { Country } from 'assets/data/country';
import Editclass from 'assets/images/editclass.png';




const editclass = () => {
  const navigate = useNavigate();
  const [nameclass, setnameclass] = useState('');
  const [classtype, setclasstype] = useState('');
  const [starttime, setstarttime] = useState('');
  const [endtime, setendtime] = useState('');
  const [quality, setquality] = useState('');
  const [status, setstatus] = useState('');
  

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nameclass);
    console.log(classtype);
    console.log(starttime);
    console.log(endtime);
    console.log(quality);
    console.log(status);


  };
  const editclass = (e: React.ChangeEvent<HTMLInputElement>) => {
    //setGender(e.target.value);
  }
  return (
    <div>
    <div className=' w-full justify-center'>
    <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-y-5 py-5 rounded-md px-10" style={{ backgroundColor: '#EAE9E9' }}>
          <div className='flex iteams-center'>
            <img src={ Editclass } className="w-20 h-20" />
            <h1 className='text-5xl ml-5 pt-6'>Edit Class</h1>

          </div>
          
            <TextField placeholder="Name class" value={nameclass} onChange={(e) => setnameclass(e.target.value)}/>
            <div className='grid gap-2 grid-cols-2'>
                <div>
                    <select id="classtype" name="type" value={classtype} onChange={(e) => setclasstype(e.target.value)} className='form-input rounded-md border-none p-3 text-[#595757] w-full'>
                        <option value="None" disabled selected>Type</option>
                        <option value="cardio">Cardio</option>
                        <option value="strength">Strength</option>
                        <option value="flexliity">Flexlity</option>
                    </select>
                </div>
                <div>
                    <div className='w-full'><input type="date"className="form-input rounded-md border-none p-3  w-full"/></div>
                </div>
            </div>

            <div className='grid gap-2 grid-cols-2'>
                <div>
                    <select id="starttime" name="starttime"  value={starttime} onChange={(e) => setstarttime(e.target.value)} className='form-input rounded-md border-none p-3 text-[#595757] w-full'>
                        <option value="#" disabled selected>Start time</option>
                        <option value="08:00">08:00</option>
                        <option value="08:30">08:30</option>
                        <option value="09:00">09:00</option>
                        <option value="09:30">09:30</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                        
                    </select>
                </div>
                <div>
                <select id="endtime" name="endtime"  value={endtime} onChange={(e) => setendtime(e.target.value)} className='form-input rounded-md border-none p-3 text-[#595757] w-full'>
                        <option value="#" disabled selected>End time</option>
                        <option value="08:00">08:00</option>
                        <option value="08:30">08:30</option>
                        <option value="09:00">09:00</option>
                        <option value="09:30">09:30</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                    </select>
                </div>
            </div>
            <div className='grid gap-2 grid-cols-2'>
                <div>
                <TextField placeholder="quality" value={quality} onChange={(e) => setquality(e.target.value)}/>
                </div>
                <div>
                <select id="status" name="status" value={status} onChange={(e) => setstatus(e.target.value)} className='form-input rounded-md border-none p-3 text-[#595757] w-full'>
                        <option value="" disabled selected>Status</option>
                        <option value="avaliable">Avaliable</option>
                        <option value="unavaliable">Unavaliable</option>
                    </select>
                </div>
            </div>
            <div className='pt-6 pl-80' onClick={() => { navigate('/adminclass'); }}>
            <Button buttonName="Done" />
            </div>
        </div>
        </div>
        </div>
    </div>
    
  );
}

export { editclass as Editclass };