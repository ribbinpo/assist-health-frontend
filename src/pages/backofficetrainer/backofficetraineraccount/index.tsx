import React, { useState } from  "react";
import { Sidebartrainer } from 'components';
import { TextField, Button } from 'components';
import Logo from 'assets/images/Logo.png'
import { useNavigate } from 'react-router-dom';
import { Country } from 'assets/data/country';
import personal from 'assets/images/personal.png';



  const trainerAccount = () => {
    
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
  const [height, setHeight] = useState('');
  const [gender, setGender]  = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [professional, setProfessional] = useState('');
  const [specialskills, setSpecialskills] = useState('');
  const [certificate, setCertificate] = useState('');
  

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(confirmpassword);
    console.log(email);
    console.log(firstname);
    console.log(lastname);
    console.log(birthday);
    console.log(idcard);
    console.log(gender);
    console.log(blood);
    console.log(country);
    console.log(weight);
    console.log(height);
    console.log(phonenumber);
    console.log(professional);
    console.log(specialskills);
    console.log(certificate);

    const signup = {
    username: username,
    password: password,
    confirmpassword: confirmpassword,
    email: email,
    firstname: firstname,
    lastname: lastname,
    birthday: birthday,
    idcard: idcard,
    gender: gender,
    blood:blood,
    country:country,
    weight:weight,
    height:height,
    phonenumber:phonenumber,
    professional: professional,
    specialskills: specialskills,
    certificate: certificate,
    }
    console.log(signup);


  };
  const onChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('Select: ', e.target.value);
    setGender(e.target.value);
  }

    return (

        <div className="flex">
        <Sidebartrainer/>
        <div className=" w-full">
        <form onSubmit={onSubmit} className="flex justify-center items-center min-h-screen pt-8 pb-8">
        <div className="flex flex-col gap-y-5 py-20 rounded-md px-8" style={{ backgroundColor: '#EAE9E9' }}>
          <div className='flex iteams-center'>
            <img src={ personal } className="w-28" />
              <h1 className='text-5xl ml-5 pt-6'>Trainer Account</h1>
          </div>
            <TextField placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <div className='w-full'><TextField placeholder="Password" value={password} hidden={true} onChange={(e) => setPassword(e.target.value)} /></div>
            <TextField placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)} />
            <div className='grid gap-4 grid-cols-2 '>
              <div><TextField placeholder="FirstName" value={firstname} onChange={(e) => setFirstname(e.target.value)} /></div>
              <div><TextField placeholder="LastName" value={lastname} onChange={(e) => setLastname(e.target.value)} /></div>
            </div>
            <input type="date"className="form-input rounded-md border-none p-3  w-full " value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
            <TextField placeholder="ID-Card/Passport" value={idcard} onChange={(e) => setIdcard(e.target.value)} />
            
            <div className='grid gap-4 grid-cols-4' onChange={onChangeGender}>
              <div><p className='text-[#B0B0B0]'>Gender</p></div>
              <div><input type="radio" name="gender" value="male" className="rounded-xl "></input>
              <label className='text-[#B0B0B0] pl-2'>Male</label></div>
              <div><input type="radio" name="gender" value="female" className="rounded-xl"></input>
              <label className='text-[#B0B0B0] pl-2'>Female</label></div>
              <div><input type="radio" name="gender" value="other" className="rounded-xl"></input>
              <label className='text-[#B0B0B0] pl-2'>Other</label></div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                  <select id="blood" name="blood" className='form-input rounded-md border-none p-3 text-[#595757] w-full' onChange={(e) => setBlood(e.target.value)}>
                    <option value="">Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                
                  <select id="country" name="country" className='form-input rounded-md border-none p-3 text-[#595757]'  onChange={(e) => setConntry(e.target.value)}>
                  <option value="country" >Country</option>
                  {Country.map((item, index) => <option key={index} value={item}>{item}</option>)}
                  </select>

                <div><TextField placeholder="Weight(KG)" value={weight} onChange={(e) => setWeight(e.target.value)} /></div>
                <div><TextField placeholder="Height(CM)" value={height} onChange={(e) => setHeight(e.target.value)} /></div>
            </div>
            <TextField placeholder="Phone Number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}/>
            <div><TextField placeholder="professional" value={professional} onChange={(e) => setProfessional(e.target.value)} /></div>
            <div><TextField placeholder="special skills" value={specialskills} onChange={(e) => setSpecialskills(e.target.value)} /></div>
            <div><TextField placeholder="certificate" value={certificate} onChange={(e) => setCertificate(e.target.value)} /></div>
            <div className='pt-6 pl-80 ' onClick={() => {  navigate('/traineraccount'); }}>
              <Button buttonName="Confrim" />
            </div>
        </div>
    </form>
    </div>
       
        </div>
    
  );
}

// onClick={() => { navigate('/auth/login'); }}
export { trainerAccount as TrainerAccount };