import React from 'react'

function TestCalendarPopup() {
  return (
    <div className='px-60 py-44 w-96 h-96'>
        <div className='flex flex-col w-96 h-96 px-20 py-8 gap-14 border'>
        <p className='text-4xl font-[Poppins]'>Book a call with us</p>
        <div className='flex flex-row gap-4 w-52 h-8'>
            <img className="h-4 w-4" src = 'assets/img/iconTime.png'/>
            <p className='text-xs'>30 Min</p>
        </div>
        <div className='flex flex-row gap-4 w-52 h-8'>
            <img className="h-4 w-4" src = 'assets/img/iconTime.png'/>
            <p className='text-xs'>30 Min</p>
        </div>
        </div>
    </div>
  )
}

export default TestCalendarPopup
