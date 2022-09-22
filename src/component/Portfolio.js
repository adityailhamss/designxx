import React from 'react'
import { useNavigate } from 'react-router-dom';
import "@fontsource/poppins";
import "@fontsource/dm-sans";

function Portfolio() {
  const navigate = useNavigate();

    const Demo = () => {
        navigate('/demo');
    };

  return (
    <div className='px-5 lg:px-36 py-20 flex-row'>
        <div className='flex flex-col w-full gap-8 text-[#414141]'>
            <h1 className="font-bold text-3xl lg:text-6xl lg:leading-[4.5rem] text-center lg:text-left">Explore Our Projects</h1>
            <p className="text-center lg:text-left">
            Check what's our team did and make your project look trendy and professional.
            </p>
        </div>
        <div className=' pt-10 flex-row lg:w-[1000px]'>
            <div className='grid grid-rows-4 lg:grid-flow-col gap-6'>
                <div class="row-span-4 col-span-4 lg:w-[480px] lg:h-[344px] rounded-lg">
                    <img src='./img/Rectangle 29.png' />
                </div>
                <div class="row-span-2 col-span-2 lg:w-[277px] lg:h-[160px] rounded-lg">
                    <img src='./img/Rectangle 30.png' />
                </div>
                <div class="row-span-2 col-span-2 lg:w-[277px] lg:h-[160px] rounded-lg">
                    <img src='./img/Rectangle 32.png' />
                </div>
                <div class="row-span-2 col-span-2 lg:w-[277px] lg:h-[160px] rounded-lg">
                    <img src='./img/Rectangle 31.png' />
                </div>
                <div class="row-span-2 col-span-2 lg:w-[277px] lg:h-[160px] rounded-lg">
                    <img src='./img/Rectangle 33.png' />
                </div>
            </div>
            <div className='pt-6 grid grid-row-2 lg:grid-flow-col gap-6 justify-center lg:justify-start'>
                <div class="row-span-2 col-span-2 lg:w-[252px] lg:h-[160px] rounded-lg">
                    <img src='./img/Rectangle 34.png' />
                </div>
            
                <div class="row-span-2 col-span-2 lg:w-[252px] lg:h-[160px] rounded-lg">
                    <img src='./img/Rectangle 35.png' />
                </div>
                <div class="row-span-2 col-span-2 lg:w-[252px] lg:h-[160px] rounded-lg">
                    <img src='./img/Rectangle 36.png' />
                </div>
                <div class="row-span-2 col-span-2 lg:w-[252px] lg:h-[160px] rounded-lg">
                    <img src='./img/Rectangle 37.png' />
                </div>
                </div>
        </div>
        <div className='py-6 flex flex-col w-full gap-8 text-[#414141] justify-center'>
            <h1 className="font-bold text-3xl lg:text-6xl lg:leading-[4.5rem] text-center lg:text-left">Unlock your inner creator</h1>
            <p className="text-center lg:text-left lg:w-[734px]">
            Get the inspiration you need with these collections carefully selected to boost your project's engagement
            </p>
        </div>
        <div className='pt-6 grid lg:grid-flow-col gap-6 lg:w-[1000px] justify-center lg:justify-start'>
            <div class="row-span-3 col-span-3 lg:w-[338px] lg:h-[235px] rounded-lg">
                <img src='./img/Rectangle 41.png' />
            </div>
            <div class="row-span-3 col-span-3 lg:w-[338px] lg:h-[235px] rounded-lg">
                <img src='./img/Rectangle 39.png' />
            </div>
            <div class="row-span-3 col-span-3 lg:w-[338px] lg:h-[235px] rounded-lg">
                <img src='./img/Rectangle 40.png' />
            </div>
        </div>
        
        <div className='pt-6 '>
            <div className='pt-6 bg-[#FFEFE8] lg:w-[1081px] lg:h-[330px] text-center '>
                <h1 className="font-[Poppins] text-3xl lg:text-6xl lg:leading-[4.5rem] text-center">Ready to try DesignXX?</h1>
                <p className='pt-7 text-base '>Create your project today and get your design tomorrow. It's that simple. Try design today 30-day risk-free</p>
                <button onClick={Demo} className='mt-7 box-border bg-[#E9520B] font-sans text-white lg:w-72 lg:h-14'>BOOK A DEMO</button>
            </div>
        </div>
        </div>
                
        
        

  )
}

export default Portfolio
