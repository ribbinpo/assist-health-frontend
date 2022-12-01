import React, { useState } from 'react';
import { TextField, Button, LabelForm } from 'components';
import { useNavigate } from 'react-router-dom';
import { Country } from 'assets/data/country';
import Edit from 'assets/images/edit.png';

// interface Props {
//   currentUser: any
// }

const edituser: React.FC<any> = ({currentUser}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(currentUser.username);
  const [password, setPassword] = useState(currentUser.password);
  const [type, setType ] = useState(currentUser.role_id);
  const [email, setEmail] = useState(currentUser.email);
  const [firstname, setFirstname] = useState(currentUser.firstName);
  const [lastname, setLastname] = useState(currentUser.lastName);
  const [birthday, setBirthday] = useState(currentUser.birthday);
  const [idcard, setIdcard] = useState(currentUser.passport);
  const [gender, setGender]  = useState(currentUser.gender);
  const [blood, setBlood] = useState(currentUser.bloodType);
  const [country,setCountry] = useState(currentUser.country);
  const [weight, setWeight] = useState(currentUser.weight);
  const [height, setHeight] = useState(currentUser.height);
  const [phonenumber, setPhonenumber] = useState(currentUser.phoneNumber);

  console.log(currentUser);

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(type);
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

  const edituser = {
    username: username,
    password: password,
    type: type,
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
  console.log(edituser);


};
  const onChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
  setGender(e.target.value);
  }
  return (
    <form onSubmit={onSubmit}>
    <div>
    <div className=' w-full justify-center'>
    <div className="flex justify-center items-center min-h-screen pt-2">
        <div className="flex flex-col gap-y-5 py-5 rounded-md px-10" style={{ backgroundColor: '#EAE9E9' }}>
          <div className='flex iteams-center'>
            <img src={ Edit } className="w-20 h-20" />
            <h1 className='text-5xl ml-5 pt-6'>Edit User</h1>
          </div>
          <div>
            <LabelForm text="Username"/>
            <TextField placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='grid gap-2 grid-cols-2'>
              <div>
                <LabelForm text="Birthday"/>
                <input  value={birthday} className="form-input rounded-md border-none p-3  w-full "  onChange={(e) => setBirthday(e.target.value)}/>
                {/* <TextField placeholder="Birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)}/> */}
                </div>
              <div>
                  <LabelForm text="Type"/>
                  <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)} className='form-input rounded-md border-none p-3 text-[#595757] w-full'>
                  <option value="type">{type }</option>
                  <option value="Admin">Admin</option>
                  <option value="Trainer">Trainer</option>
                  <option value="User">User</option>
                  </select>
              </div>
            </div>
            <div>
            <LabelForm text="Email"/>
            <TextField placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='grid gap-4 grid-cols-2 '>
              <div><LabelForm text="Firstname"/><TextField placeholder="FirstName" value={firstname} onChange={(e) => setFirstname(e.target.value)} /></div>
              <div><LabelForm text="Lastname"/><TextField placeholder="LastName" value={lastname} onChange={(e) => setLastname(e.target.value)} /></div>
            </div>
            <div className='grid gap-4 grid-cols-2 '>
            <div><LabelForm text="ID-Card/Passport"/>
            <TextField placeholder="ID-Card/Passport" value={idcard} onChange={(e) => setIdcard(e.target.value)} /></div>
            <div><LabelForm text="Gender"/>
            <TextField placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} /></div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
                <div>
                  <LabelForm text="Blood Type"/>
                  <select id="blood" name="blood" value={blood} className='form-input rounded-md border-none p-3 text-[#595757] w-full' onChange={(e) => setBlood(e.target.value)}>
                  <option value={blood}>{blood}</option>
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
                <div><LabelForm text="Country"/><select id="country" name="country" className='form-input rounded-md border-none p-3 text-[#595757]' onChange={(e) => setCountry(e.target.value)}>
                  <option value={country} >{country}</option>
                  {Country.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select></div>
                <div><LabelForm text="Weight"/><TextField placeholder="Weight(KG)" value={weight} onChange={(e) => setWeight(e.target.value)} /></div>
                <div><LabelForm text="Height"/><TextField placeholder="Height(CM)" value={height} onChange={(e) => setHeight(e.target.value)} /></div>
            </div>
            
            <div><LabelForm text="Phone Number"/><TextField placeholder="Phone Number" value= {phonenumber} onChange={(e) => setPhonenumber(e.target.value)}/></div>
            <div className='pt-6 pl-80' onClick={() => { navigate('/user'); }}>
            <Button buttonName="Confirm" />
            </div>
        </div>
        </div>
        </div>
    </div>
    </form>
    
    
  );
}

export { edituser as Edituser };