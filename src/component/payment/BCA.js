import React from 'react'
// import { useTimer } from 'react-timer-hook';
import HeaderPayment from '../HeaderPayment';
import OptionPayment from '../OptionPayment';



function Payment() {
    const Option = {
        option1 : [
            {
                metode: <div className='text-[#414141]'>ATM BCA</div>,

                penjelasan: 
                <div className='text-[#414141] pl-5'>
                    <ol class="list-decimal">
                        <li>Masukkan kartu ATM dan PIN BCA kamu.</li>
                        <li>Pada menu utama, pilih menu <b>"Transaksi lainnya".</b></li>
                        <li>Pilih menu <b>"Transfer"</b> dan kemudian pilih <b>"BCA Virtual Account".</b></li>
                        <li>Masukkan no. BCA Virtual Account & klik <b>"Lanjutkan".</b></li>
                        <li>Periksa kembali rincian pembayaran kamu, lalu pilih Ya.</li>
                    </ol>
                </div>
            },
        ],
        option2 : [
            {
                metode: <div className='text-[#414141]'>M-BCA</div>,

                penjelasan: 
                <div className='text-[#414141] pl-5'>
                    <ol class="list-decimal">
                        <li>Lakukan log in pada aplikasi BCA mobile.</li>
                        <li>Pilih <b>"m-BCA"</b> masukan kode akses m-BCA.</li>
                        <li>Pilih <b>"m-Transfer".</b></li>
                        <li>Pilih <b>"BCA Virtual Account".</b></li>
                        <li>Masukkan nomor BCA Virtual Account dan klik <b>"OK".</b></li>
                        <li>Konfirmasi no virtual account dan rekening pendebetan.</li>
                        <li>Periksa kembalian rincian pembayaran kamu, lalu klik <b>"Ya".</b></li>
                        <li>Masukan pin m-BCA.</li>
                        <li>Pembayaran selesai.</li>
                    </ol>
                </div>
            },
        ],
        option3: [
            {
                metode: 
                <div className='text-[#414141]'>Klik BCA</div>,
                    

                penjelasan:
                <div className='text-[#414141] pl-5'>
                    <ol class="list-decimal">
                        <li>Login pada aplikasi KlikBCA, masukkan user ID & PIN.</li>
                        <li>Pilih <b>Transfer Dana"</b>, kemudian pilih <b>Transfer ke BCA Virtual Account".</b></li>
                        <li>Masukkan no. BCA Virtual Account & klik <b>"Lanjutkan".</b></li>
                        <li>Pastikan data yang dimasukkan sudah benar, dan Input <b>"Respon KeyBCA"</b>, lalu klik <b>"Kirim".</b></li>
                    </ol>
                </div>
            },
        ],
    };
      


    // const menit = 1440 * 60;
    // const time = new Date();
    //     time.setSeconds(time.getSeconds() + menit);
        

    // const {seconds, minutes, hours,} = useTimer({ expiryTimestamp : time, onExpire: () => alert('onExpire called') });

  return (
    <div className='flex flex-col py-20 px-10 lg:px-72 gap-7'>
        <HeaderPayment />
        {/* <div className='flex flex-col items-center gap-2 '>
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
        </div> */}
        <div className='flex flex-col px-7'>
                {Option.option1.map((item) => (
                <OptionPayment metode={item.metode} penjelasan={item.penjelasan} />
                ))}
        </div>
        <div className='flex flex-col px-7'>
                    {Option.option2.map((item) => (
                    <OptionPayment metode={item.metode} penjelasan={item.penjelasan} />
                    ))}
        </div>
        <div className='flex flex-col px-7'>
                    {Option.option3.map((item) => (
                    <OptionPayment metode={item.metode} penjelasan={item.penjelasan} />
                    ))}
        </div>
    </div> 
  )
}

export default Payment