import React from 'react'
import "@fontsource/poppins";
import "@fontsource/dm-sans";

function portofolio() {
  return (
    <div className='container'>
      <div className='txt-box'>
        <h1 className='h1a '>Explore Our Projects</h1>
        <p className='styletxt-1'>Check what's our team did and make your project look trendy and professional.</p>
      </div>
          
        
        <div class="grid grid-rows-2 grid-flow-col gap-4"></div>
          <div>
            <img className='row-span-2 col-span-2 gmbr-1' src='./img/Rectangle 29.png' alt='' />
          </div> 
          <div>
            <img className='row-span-1 col-span-1 gmbr-2' src='./img/Rectangle 30.png' alt='' />
          </div>    
          <div>
            <img className='row-span-1 col-span-1 gmbr-3' src='./img/Rectangle 32.png' alt='' />
          </div>
        
        <div>
          <img className='row-span-1 col-span-1 gmbr-4' src='./img/Rectangle 31.png' alt='' />
        </div>
        <div>
          <img className='row-span-1 col-span-1 gmbr-5' src='./img/Rectangle 33.png' alt='' />
        </div>
        <div>
          <img className='row-span-1 col-span-1 gmbr-6' src='./img/Rectangle 34.png' alt='' />
        </div>
        <div>
          <img className='gmbr-7' src='./img/Rectangle 35.png' alt='' />
        </div>                
        <div>
          <img className=' gmbr-8' src='./img/Rectangle 36.png' alt='' />
        </div>    
        <div>
          <img className='gmbr-9 ' src='./img/Rectangle 37.png' alt='' />
        </div>
        <div>
          <p className='h1b'>Unlock your inner creator</p>
        </div>
        <div>
          <p className='styletxt-2'>Get the inspiration you need with these collections carefully selected to boost your project's engagement</p>
        </div>
        <div className='grid gap-4 grid-cols-3'>
        
          <img className='row-span-1 col-span-1 gmbr-10' src='./img/Rectangle 41.png' alt='' />
        
        <div>
          <img className='row-span-1 col-span-1 gmbr-11' src='./img/Rectangle 39.png' alt='' />
        </div>
        <div>
          <img className='row-span-1 col-span-1 gmbr-12' src='./img/Rectangle 40.png' alt='' />
        </div>
        </div>
        <div className='box-1'>
          <div>
            <p className='styletxt-3'>Ready to try DesignXX?</p>
          </div>
          <div>
            <p className='styletxtt-4'>Create your project today and get your design tomorrow. It's that simple. Try design today 30-day risk-free</p>
          </div>
          <button className='box-2'><p className='styletxt-5'>BOOK A DEMO</p></button>
        </div>
    </div>
  )
}

export default portofolio
