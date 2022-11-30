import React, { useState } from 'react';
import { TextField, Button } from 'components';
import { useNavigate } from 'react-router-dom';
import Classroom from 'assets/images/classroom.png';


const test = () => {

  const navigate = useNavigate();
  const [roomName, setroomName] = useState('');


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(roomName);


    const addclass = {
      nameclass: roomName,

    }
    console.log(addclass);

  };

  return (
    <div className="w-full pt-5 px-2">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
            <tr>
              <th scope="col" className="py-3 px-5">
                ID
              </th>
              <th scope="col" className="py-3 px-5">
                Name
              </th>
              <th scope="col" className="py-3 px-5">
                Tel
              </th>
              <th scope="col" className="py-3 px-5">
                Status
              </th>


            </tr>
          </thead>
          <tbody>
            {
              <tr className="bg-white border-b">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                  1
                </th>
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  Nattapong bunchokying
                </td>
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  0887827071
                </td>
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  confirm
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { test as Test };