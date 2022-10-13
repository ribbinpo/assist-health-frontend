import React, { useState } from 'react';
import { Sidebar } from 'components';
import { TextField, Button } from 'components';
import Logo from 'assets/images/Logo.png'
import { useNavigate } from 'react-router-dom';
import { Country } from 'assets/data/country';
import Adduser from 'assets/images/adduser.png';




const adduser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [idcard, setIdcard] = useState('');
  const [blood, setBlood] = useState('');
  const [country,setConntry] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setheight] = useState('');
  const [gender, setGender]  = useState('male');
  const [phonenumber, setPhonenumber] = useState('');
  

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(confirmpassword);
    console.log(email);
    console.log(firstname);
    console.log(lastname);
    console.log(birthday);
    console.log(idcard)
    console.log(blood);
    console.log(country);
    console.log(weight);
    console.log(gender);
    console.log(phonenumber);


  };
  const adduser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  }
  return (
    <div className="flex">
    <div><Sidebar/></div>
    <div className=' w-full justify-center'>
    <div className="flex justify-center items-center min-h-screen pt-2">
        <div className="flex flex-col gap-y-5 py-5 rounded-md px-10" style={{ backgroundColor: '#EAE9E9' }}>
          <div className='flex iteams-center'>
            <img src={ Adduser } className="w-20 h-20" />
            <h1 className='text-5xl ml-5 pt-6'>Add user</h1>

          </div>
          
            <TextField placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <div className='grid gap-2 grid-cols-2'>
              <div className='w-full'><TextField placeholder="Password" value={password} hidden={true} onChange={(e) => setPassword(e.target.value)} /></div>
              <div >
          <select id="type" name="type" className='form-input rounded-md border-none p-3 text-[#595757] w-full'>
                  <option value="" disabled selected>Type</option>
                  <option value="A+">Admin</option>
                  <option value="A-">Trainer</option>
                  <option value="B+">User</option>
                  </select>
            </div>
            </div>
            <TextField placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)} />
            <div className='grid gap-4 grid-cols-2 '>
              <div><TextField placeholder="FirstName" value={firstname} onChange={(e) => setFirstname(e.target.value)} /></div>
              <div><TextField placeholder="LastName" value={lastname} onChange={(e) => setLastname(e.target.value)} /></div>
            </div>
            <TextField placeholder="Birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            <TextField placeholder="ID-Card/Passport" value={idcard} onChange={(e) => setIdcard(e.target.value)} />
            
            <div className='grid gap-4 grid-cols-4'>
              <div><p className='text-[#B0B0B0]'>Gender</p></div>
              <div><input type="radio" name="gender" value="male" className="rounded-xl "></input>
              <label className='text-[#B0B0B0] pl-2'>Male</label></div>
              <div><input type="radio" name="gender" value="female" className="rounded-xl"></input>
              <label className='text-[#B0B0B0] pl-2'>Female</label></div>
              <div><input type="radio" name="gender" value="other" className="rounded-xl"></input>
              <label className='text-[#B0B0B0] pl-2'>Other</label></div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                  <select id="blood" name="blood" className='form-input rounded-md border-none p-3 text-[#595757] w-full'>
                  <option value="" disabled selected>Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  </select>
                </div>
                <div><select id="country" name="country" className='form-input rounded-md border-none p-3 text-[#595757]'>
                  <option value="" disabled selected>Country</option>
                  {Country.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select></div>
                <div><TextField placeholder="Weight(KG)" value={weight} onChange={(e) => setWeight(e.target.value)} /></div>
                <div><TextField placeholder="Height(CM)" value={height} onChange={(e) => setheight(e.target.value)} /></div>
            </div>
            <TextField placeholder="Phone Number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}/>
            <div className='pt-6 pl-80' onClick={() => { navigate('/user'); }}>
            <Button buttonName="Add" />
            </div>
        </div>
        </div>
        </div>
    </div>
    
  );
}

export { adduser as Adduser };