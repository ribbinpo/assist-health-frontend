import react from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Bgtrainer from 'assets/images/bgtrainer.png';
import { TextField, Button, Buttoncancel, Topictrainer } from 'components';
import Julie from 'assets/images/julie.png';

const trainer = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div>
      <div>
        <img src={Bgtrainer} className="w-full" />
      </div>
      <div className="grid gap-2 grid-cols-2">
        <div className="text-5xl pl-7 pt-8 font-bold text-black">My Trainer</div>
        {/* <div className="pt-8" onClick={() => { navigate('/mytrainer'); }}><Button buttonName=" MY TRAINER" /></div> */}
      </div>
      <div className="pt-8 px-8">
        <div className="bg-[#DCDCDC] rounded-lg grid gap-3 grid-cols-2">
          <div>
            <img src={Julie} className="pt-8 pb-8 pl-8 w-60 h-108 " />
          </div>
          <div className="pt-8  text-3xl font-bold text-red-800">
            JULIE
            <div className="pt-2 pr-4 text-xl font-semibold text-black ">KANOKWAN SRINONGWA</div>
            <div className="pt-1 pr-4 text-xl font-medium text-red-800 ">
              Professional<div className="inline text-black font-light">: Trainer (Level-2)</div>
            </div>
            <Topictrainer topicName="Special Skills" />
            <div className="list-disc pt-1 pr-4 text-lg font-light text-black">
              <li>Function Traing</li>
              <li>Burn out calories</li>
              <li>Weight Training</li>
            </div>
            <div>
              <Topictrainer topicName="Certificate" />
              <div className=" text-black font-light text-lg ">Functional Training 101</div>
            </div>
            <div
              className="pt-2 pb-2 pl-60"
              onClick={() => {
                navigate('/trainerschdule', { state: 3 });
              }}>
              <Buttoncancel buttonName="Booking" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 px-8">
        <div className="bg-[#DCDCDC] rounded-lg grid gap-3 grid-cols-2">
          <div>
            <img src={Julie} className="pt-8 pb-8 pl-8 w-60 h-108 " />
          </div>
          <div className="pt-8  text-3xl font-bold text-red-800">
            JULIE
            <div className="pt-2 pr-4 text-xl font-semibold text-black ">KANOKWAN SRINONGWA</div>
            <div className="pt-1 pr-4 text-xl font-medium text-red-800 ">
              Professional<div className="inline text-black font-light">: Trainer (Level-2)</div>
            </div>
            <Topictrainer topicName="Special Skills" />
            <div className="list-disc pt-1 pr-4 text-lg font-light text-black">
              <li>Function Traing</li>
              <li>Burn out calories</li>
              <li>Weight Training</li>
            </div>
            <div>
              <Topictrainer topicName="Certificate" />
              <div className=" text-black font-light text-lg ">Functional Training 101</div>
            </div>
            <div
              className="pt-2 pb-2 pl-60"
              onClick={() => {
                navigate('/trainerschdule', { state: 1 });
              }}>
              <Buttoncancel buttonName="Booking" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 px-8">
        <div className="bg-[#DCDCDC] rounded-lg grid gap-3 grid-cols-2">
          <div>
            <img src={Julie} className="pt-8 pb-8 pl-8 w-60 h-108 " />
          </div>
          <div className="pt-8  text-3xl font-bold text-red-800">
            JULIE
            <div className="pt-2 pr-4 text-xl font-semibold text-black ">KANOKWAN SRINONGWA</div>
            <div className="pt-1 pr-4 text-xl font-medium text-red-800 ">
              Professional<div className="inline text-black font-light">: Trainer (Level-2)</div>
            </div>
            <Topictrainer topicName="Special Skills" />
            <div className="list-disc pt-1 pr-4 text-lg font-light text-black">
              <li>Function Traing</li>
              <li>Burn out calories</li>
              <li>Weight Training</li>
            </div>
            <div>
              <Topictrainer topicName="Certificate" />
              <div className=" text-black font-light text-lg ">Functional Training 101</div>
            </div>
            <div
              className="pt-2 pb-2 pl-60"
              onClick={() => {
                navigate('/trainerschdule', { state: 1 });
              }}>
              <Buttoncancel buttonName="Booking" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { trainer as Trainer };
