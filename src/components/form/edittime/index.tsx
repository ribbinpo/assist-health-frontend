import React, { useState }  from "react"
import {  Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { Time } from 'assets/data/time';
import Edittime from 'assets/images/edittime.png'



    const edittime = () => {

        const navigate = useNavigate();
        const [date, setdate] = useState('');
        const [starttime, setstarttime] = useState('');
        const [endtime, setendtime] = useState('');
        const [status, setstatus] = useState('');
        
      
        const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          console.log(date);
          console.log(starttime);
          console.log(endtime);
          console.log(status);
      
          const addtime = {
          date: date,
          starttime: starttime,
          endtime: endtime,
          status: status,
          }
          console.log(addtime);

        };
    return(
        <form onSubmit={onSubmit}>
        <div className=' w-full justify-center'>
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col gap-y-5 py-5 rounded-md px-10" style={{ backgroundColor: '#EAE9E9' }}>
              <div className='flex iteams-center'>
                <img src={ Edittime } className="w-20 h-20" />
                <h1 className='text-5xl ml-5 pt-6'>Edit</h1>
    
              </div>
              <div className='w-full'><input type="date" value={date} onChange={(e) => setdate(e.target.value)} className="form-input rounded-md border-none p-3  w-full"/></div>
                    <div className='grid gap-2 grid-cols-2'>
                    <div>
                        <select id="starttime" name="starttime"  value={starttime} onChange={(e) => setstarttime(e.target.value)} className='form-input rounded-md border-none p-3 text-[#595757] w-full'>
                            <option value="">Start time</option>
                            {Time.map((item, index) => <option key={index} value={item}>{item}</option>)}
                            
                        </select>
                    </div>
                    <div>
                    <select id="endtime" name="endtime"  value={endtime} onChange={(e) => setendtime(e.target.value)} className='form-input rounded-md border-none p-3 text-[#595757] w-full'>
                            <option value="endtime">End time</option>
                            {Time.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <select id="status" name="status" value={status} onChange={(e) => setstatus(e.target.value)} className='form-input rounded-md border-none p-3 text-[#595757] w-full'>
                            <option value="status">Status</option>
                            <option value="avaliable">Avaliable</option>
                            <option value="unavaliable">Unavaliable</option>
                    </select>
                 </div>
                
                <div className='pt-6 pl-80' onClick={() => { navigate('/trainermangeschedule'); }}>
                <Button buttonName="Confrim"/>
                </div>
            </div>
            </div>
            </div>
            </form>
        
    );
}

export { edittime as Edittime }