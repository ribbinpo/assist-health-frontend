import React, { useEffect, useState } from 'react';
import { TextField, Button, LabelForm } from 'components';
import Logo from 'assets/images/Logo.png'
import { useNavigate } from 'react-router-dom';
import { Country } from 'assets/data/country';
import { useAccountStore } from 'store';
import jwtDecode from 'jwt-decode';
import axios from 'axios';


const account = ({ id }: any) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
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

  const token = useAccountStore((state) => state.token);
  const [items, setItems] = useState<any>([])
  

  useEffect(() => {
    const user: {
      sub: number;
      username: string;
      role: string;
    } = jwtDecode(token);
    const userId = user.sub;
    const getItems = async () => {
        const res = await axios.get(
        `http://localhost:8000/classes/getByUserId?id=${userId}`,
        );
        setItems(res.data.users)              
        // console.log(res.data);
    }
    getItems();
  },[]);
  // console.log(items);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(typeof(username));
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

    const signup = {
    username: username,
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
    }
    // console.log(signup);


  };
  // console.log(typeof(username));
  const onChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('Select: ', e.target.value);
    setGender(e.target.value);
  }
  return (
    
    <form  onSubmit={onSubmit} className="flex justify-center items-center min-h-screen pt-8 pb-8 bg-black">
        <div className="flex flex-col gap-y-5 py-20 rounded-md px-8" style={{ backgroundColor: '#EAE9E9' }}>
          <div className='flex iteams-center'>
            <img src={ Logo } className="w-28" />
              <h1 className='text-5xl ml-5 pt-6'>My account</h1>
        </div>
       
        <div><LabelForm text="Username"/><TextField placeholder={items.username} value={username} onChange={(e) => setUsername(e.target.value)}/></div>
         <div><LabelForm text="Email"/><TextField placeholder={items.email} value={email}  onChange={(e) => setEmail(e.target.value)} /></div>
            <div className='grid gap-4 grid-cols-2 '>
              <div><LabelForm text="Firstname"/><TextField placeholder={items.firstName} value={firstname} onChange={(e) => setFirstname(e.target.value)} /></div>
              <div><LabelForm text="Lastname"/><TextField placeholder={items.lastName} value={lastname} onChange={(e) => setLastname(e.target.value)} /></div>
            </div>
            <div><LabelForm text="Birthday"/><input  placeholder={new Date (items.birthday).toLocaleDateString([] )} className="form-input rounded-md border-none p-3  w-full " value={birthday} onChange={(e) => setBirthday(e.target.value)}/></div>
            <div><LabelForm text="ID-Card/Passport"/><TextField placeholder={items.passport} value={idcard} onChange={(e) => setIdcard(e.target.value)} /></div>
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
              <div>
              <LabelForm text="Blood Type"/>
                  <select id="blood" name="blood" className='form-input rounded-md border-none p-3 text-[#595757] w-full' onChange={(e) => setBlood(e.target.value)}>
                    <option value={items.bloodType}>{items.bloodType}</option>
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
                  <div><LabelForm text="Country"/><select id="country" name="country" className='form-input rounded-md border-none p-3 text-[#595757]'  onChange={(e) => setConntry(e.target.value)}>
                  <option value={items.country} >{items.country}</option>
                  {Country.map((item, index) => <option key={index} value={item}>{item}</option>)}
                  </select>
                  </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div><LabelForm text="Weight"/><TextField placeholder={items.weight} value={weight} onChange={(e) => setWeight(e.target.value)} /></div>
                <div><LabelForm text="Height"/><TextField placeholder={items.height} value={height} onChange={(e) => setHeight(e.target.value)} /></div>
              </div>
            <div><LabelForm text="Phone number"/><TextField placeholder={items.phoneNumber} value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}/></div>
            <div className='pt-6 pl-80 ' onClick={() => {  navigate('/account'); }}>
              <Button buttonName="Confirm" />
            </div>
        </div>
    </form>
  );
}

// onClick={() => { navigate('/auth/login'); }}
export { account as Account };