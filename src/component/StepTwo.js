import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function StepTwo() {
    const [changeColor, setChangeColor] = useState(false)

    //function for changeColor
    const handleClick = () => {
        setChangeColor(!changeColor)
    };
    const navigate = useNavigate();

    const Demo = () => {
        navigate('/Demo');
    };

    const StepThree = () => {
        navigate('/StepThree');
    };
  return (
    <div className="md:px-80 py-20 flex flex-col gap-20 lg:gap-40">
        <div className="flex flex-col w-full gap-8 text-[#414141]">
          <h1 className="font-bold text-2xl lg:text-3xl lg:leading-[4.5rem] text-center lg:text-left">
            <span className="font-normal"></span> What do you want to create
          </h1>
          <p className='text-center text-sm lg:text-left'>
            Fill out the form to schedule a consultation with a DesignXX expert
          </p>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-6 md:grid-flow-col text-[#C4C4C4] lg:items-left'>
            <button onCLick={handleClick} className={`rounded border w-80 h-14 bg-[#FFFFFF] border-[#C4C4C4] text-2xl ${(changeColor === true)? `bg-gray-77` : `bg-orange-500`}`}>Social Media Manajemen</button>
            <button className='rounded border w-80 h-14 bg-[#FFFFFF] border-[#C4C4C4] text-2xl'>Digital ads & Marketing</button>
            <button className='rounded border w-80 h-14 bg-[#FFFFFF] border-[#C4C4C4] text-2xl'>Motion Graphic</button>
            <button className='rounded border w-80 h-14 bg-[#FFFFFF] border-[#C4C4C4] text-2xl'>Presentation & Powerpoint</button>
            <button className='rounded border w-80 h-14 bg-[#FFFFFF] border-[#C4C4C4] text-2xl'>Logo & Branding</button>
            <button className='rounded border w-80 h-14 bg-[#FFFFFF] border-[#C4C4C4] text-2xl'>Ilustrations</button>
            <button className='rounded border w-80 h-14 bg-[#FFFFFF] border-[#C4C4C4] text-2xl'>Print & Merchandise</button>
            <button className='rounded border w-80 h-14 bg-[#FFFFFF] border-[#C4C4C4] text-2xl'>Other</button>
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-row gap-2 lg:gap-6 md:grid-flow-col '>
            <button onClick={Demo} className='rounded border w-52 h-14 bg-[#FFFFFF] text-[#E9520B] border-[#E9520B] text-2xl'>PREVIOUS</button>
            <button onClick={StepThree} className='rounded border w-52 h-14 bg-[#E9520B] text-[#FFFFFF] border-[#E9520B] text-2xl'>NEXT</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default StepTwo
