import React, { useState } from 'react';
import "@fontsource/poppins";
import "@fontsource/dm-sans";
import { useNavigate } from 'react-router-dom';

function Demo() {
    const initialValues = { email: "", company: "" };
    const {formValues, setFormValues} = useState(initialValues);

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormValues({ ...formValues, [name] : value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const navigate = useNavigate();

    const StepTwo = () => {
        navigate('/StepTwo');
    };
  return (
    <div className="md:px-80 py-20 flex flex-col gap-20 lg:gap-40">
        <div className="flex flex-col w-full gap-8 text-[#414141]">
          <h1 className="font-bold text-3xl lg:text-6xl lg:leading-[4.5rem] text-center lg:text-left">
            <span className="font-normal"></span> Book a call with us!
          </h1>
          <p className='text-center lg:text-left'>
            Fill out the form to schedule a consultation with a DesignXX expert
          </p>
          <div className='items-center justify-center'>
          
          <form  className='flex flex-col px-10 md:px-0'>
            <label className='flex flex-col'>
                <span className='flex flex-row font-normal pb-6 text-2xl font-[Poppins] text-[#414141]'>Email</span>
                <input className='border w-4/5 h-14 rounded border-[#DADADA] pl-3 font-sans' 
                type="text"
                placeholder='Sudah Ditulis' 
                name="email"
                onChange={handleChange}
                />
            </label>
            <label className='flex flex-col'>
                <span className='font-normal flex flex-row pt-8 pb-6 text-2xl font-[Poppins] text-[#414141]'>Company</span>
                <input className='flex-shrink flex-grow flex-auto border w-4/5 h-14 rounded border-[#DADADA] pl-3 font-sans' 
                type="text"
                placeholder='Sudah Ditulis' 
                name="company" 
                onChange={handleChange}
                />
            </label>
          </form>
          </div>
          <div className='font-normal'>
            <p className='text-xs text-center lg:text-left font-normal text-[#414141] font-[Poppins]'>By clicking next, you agree to receive communications from DesignXX in accordance with our <b>Privacy Policy.</b></p>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-row gap-2 md:gap-6 md:grid-flow-col'>
            <button className='rounded border w-60 h-10 md:w-80 md:h-14 bg-[#FFFFFF] text-[#E9520B] border-[#E9520B] text-2xl'>VIDEO DEMO</button>
            <button onClick={StepTwo} className='rounded border w-60 h-10 md:w-80 md:h-14 bg-[#E9520B] text-[#FFFFFF] border-[#E9520B] text-2xl'>BOOK A CALL</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Demo
