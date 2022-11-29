import react from 'react';
import Arrow from 'assets/images/arrow.png';
import { useNavigate } from 'react-router-dom';
import Bmi from 'assets/images/bmi.png'
import { FaLessThan } from "react-icons/fa";

const bmiinfo = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-black w-full'>
      <div className='flex justify-between px-3 pt-3'>
        <div className='text-white text-5xl font-bold'>BMI</div>
        <button
          className="border-2 rounded-md border-[#9D9A9A] bg-[#F5F5F5] text-[#5E5454] shadow-md p-3 px-4 flex 
                    hover:-translate-y-1 hover:scale-103 hover:bg-[#DBDBDB] duration-300 hover:border-[#606060]"
          onClick={() => {
            navigate('/dashboard');
          }}>
          <div className="w-10 pr-4">
            <img src={Arrow} className="" />
          </div>
          BACK
        </button>
      </div>
      <div>
        <img src={Bmi} className="hover:animate-pulse" />
      </div>
      <div>
        <div className='px-16 pt-12 pb-12'>
          <div className='text-ellipsis overflow-hidden text-4xl font-bold text-white hover:text-green-600'>
          Why is the body mass index important?</div>
        </div>
        <div className='justify-end text-xl text-white pl-36 pr-8 text-sky-500 hover:text-sky-900'>
           BMI calculation In addition to we know the shape and proportions. 
          Also, can we really know the risk of developing various diseases? 
          And what indicators can the BMI be? Will come up with an answer on 
          this matter.
          </div>
        <div className='justify-end text-xl text-white pl-8 pr-36 pt-24 text-green-500 hover:text-green-900'>
        Body Mass Index, also known as BMI, is a standard measure to assess 
        the state of the body. Is there a suitable body weight-to-height balance?
        </div>
        <div className='justify-end text-xl text-white pl-36 pr-8 pt-24 text-amber-500 hover:text-amber-900'>
        BMI values be used as a screening tool to identify people 
        who are overweight. or obesity and underweight in adults aged 20 years and over
      </div>
      <div className='justify-end text-xl text-white pl-8 pr-36 pt-24 text-red-500 hover:text-red-900'>
      BMI is calculated from the weight in kilograms. Divided by the height in meters, 
      raised to the power of 2, and expressed in kg/m2.
      </div>
      <div className="hover:animate-pulse overflow-x-auto relative px-8 pt-24 pb-12">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    BMI
                </th>
                <th scope="col" className="py-3 px-6">
                    Status
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    BMI Less 18.5
                </th>
                <td className="py-4 px-6">
                Are underweight or thin
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    BMI 18.5 - 22.90
                </th>
                <td className="py-4 px-6">
                    in normal
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    BMI 23 - 24.90
                </th>
                <td className="py-4 px-6">
                    overweight
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    BMI 25 - 29.90
                </th>
                <td className="py-4 px-6">
                    1st degree obesity
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    BMI More 30
                </th>
                <td className="py-4 px-6">
                    2nd degree obesity
                </td>
            </tr>
        </tbody>
    </table>
</div>
      </div>
    </div>
  )
}

export { bmiinfo as Bmiimfo };