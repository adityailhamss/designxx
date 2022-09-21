import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import CalendarPopup from './CalendarPopup';
import "@fontsource/poppins";
import "@fontsource/dm-sans";


function StepThree() {

    const navigate = useNavigate();

    const StepTwo = () => {
        navigate('/StepTwo');
    };

    const [showMyModal, setShowMyModal] = useState(false);

    const handleOnClose = () => setShowMyModal(false)
  return (
    <div className="md:px-80 py-20 flex flex-col gap-10 lg:gap-10">
      <div className='flex flex-row'>
        <div className='rounded-full border border-[#E9520B] w-[50px] h-[50px]'>
          <p className='py-2 text-center text-2xl text-[#E9520B] font-[dm-sans]'>1</p>
        </div>
        <div className='border border-[#DADADA] w-[200px] h-0 my-6'>
        </div>
        <div className='rounded-full border border-[#E9520B] w-[50px] h-[50px]'>
          <p className='py-2 text-center text-2xl text-[#E9520B] font-[dm-sans]'>2</p>
        </div>
        <div className='border border-[#DADADA] w-[200px] h-0 my-6'>
        </div>
        <div className='rounded-full border border-[#E9520B] bg-[#E9520B] w-[50px] h-[50px]'>
          <p className='py-2 text-center text-2xl text-[#FFFFFF] font-[dm-sans]'>3</p>
        </div>
      </div>
        <div className="flex flex-col w-full gap-8 text-[#414141]">
          <h1 className="font-bold text-3xl lg:text-3xl lg:leading-[4.5rem] text-center lg:text-left">
            <span className="font-normal"></span> Tell us about your company
          </h1>
          <p className='text-center lg:text-sm lg:text-left'>
            Fill out the form to schedule a consultation with a DesignXX expert
          </p>
          <form className='md:px-0 px-10'>
            <label className='block'>
                <span className='flex flex-row font-bold pb-6 text-lg font-[Poppins] text-[#414141]'>Nama Lengkap</span>
                <input className='border w-4/5 h-14 rounded border-[#DADADA] pl-3 font-sans' placeholder='Tulis Disini' />
            </label>
            <label className='block'>
                <span className='flex flex-row font-bold pt-8 pb-6 text-lg font-[Poppins] text-[#414141]'>Title</span>
                <select class="border w-4/5 h-14 rounded border-[#DADADA] pl-3 font-sans">
                <option>Pilih Disini</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            </label>
            <label className='block'>
                <span className='flex flex-row font-bold pt-8 pb-6 text-lg font-[Poppins] text-[#414141]'>Industry</span>
                <select class="border w-4/5 h-14 rounded border-[#DADADA] pl-3 font-sans">
                <option>Pilih Disini</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            </label>
          </form>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-row gap-6 md:grid-flow-col justify-center md:justify-start'>
            <button onClick={StepTwo} className='rounded border w-40 h-10 md:w-52 md:h-14 bg-[#FFFFFF] text-[#E9520B] border-[#E9520B] text-2xl'>PREVIOUS</button>
            <button onClick={() => setShowMyModal(true)} className='rounded border w-40 h-10 md:w-52 md:h-14 bg-[#E9520B] text-[#FFFFFF] border-[#E9520B] text-2xl'>NEXT</button>
            </div>
        </div>
        </div>
        <CalendarPopup visible={showMyModal}/>
    </div>
  )
}

export default StepThree
