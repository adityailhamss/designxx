import React from 'react'
import { useTimer } from 'react-timer-hook';

function HeaderPayment() {

    const menit = 1440 * 60;
    const time = new Date();
        time.setSeconds(time.getSeconds() + menit);
        

    const {seconds, minutes, hours,} = useTimer({ expiryTimestamp : time, onExpire: () => 
        alert('onExpire called') });

  return (
    <>
    <div className='flex flex-col items-center gap-2 '>
            <div>
                <p className='text-lg font-bold text-[#414141]'>Selesaikan pembayaran dalam</p>
            </div>
            <div>
                <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <div>
                <p className='text-[#414141]'>Batas Akhir Pembayaran</p>
            </div>
            <div className='text-lg font-bold text-[#414141]'>
                <p className='text-[#414141]'>Jumat, 1 Oktober 2022 13:00</p>
            </div>
        </div>
        <div className='flex flex-row px-7 pt-4'>
            <div>
                <p className='text-lg font-bold text-[#414141]'>Cara Pembayaran</p>
            </div>
        </div>
    </>
  )
}

export default HeaderPayment