import React from 'react'
import HeaderPayment from '../HeaderPayment';
import OptionPayment from '../OptionPayment';

function Mandiri() {
    const Option = {
        option1 : [
            {
                metode: <div className='text-[#414141]'>ATM MANDIRI</div>,

                penjelasan: 
                <div className='text-[#414141] pl-5'>
                    <ol class="list-decimal">
                        <li>Masukkan kartu ATM dan PIN ATM.</li>
                        <li>Pilih menu Bayar/Beli</li>
                        <li>Pilih opsi Lainya lalu pilih Multipayment.</li>
                        <li>Masulan kode <i>biller </i>perusahaan (biasanya sudah tercantum di intruksi pembayaran).</li>
                        <li>Masukan nomor Virtual account dengan Benar.</li>
                        <li>Masukan angka yang diminta untuk memilih tagihan lalu pilih Ya</li>
                        <li>Layar akan menampilkan konfirmasi. Jika sesuai, pilih Ya.</li>
                        <li>selesai</li>
                    </ol>
                </div>
            },
        ],
        option2 : [
            {
                metode: <div className='text-[#414141]'>M-Banking</div>,

                penjelasan: 
                <div className='text-[#414141] pl-5'>
                    <ol class="list-decimal">
                        <li>Buka aplikasi <i>m-banking.</i></li>
                        <li>Masukan <i>username</i> dan <i>password</i></li>
                        <li>Pilih menu Bayar lalu One Time lalu Multipayment</li>
                        <li>Pilih Penyedia Jasa yang digunakan lalu lanjut</li>
                        <li>Masukkan nomor Virtual account lalu Lanjut.</li>
                        <li>Layar akan menampilkan konfirmasi. Jika sudah sesuai, masukkan PIN transaksi dan akhiri dengan OK.</li>
                        <li>Selesai.</li>
                    </ol>
                </div>
            },
        ],
        option3: [
            {
                metode: 
                <div className='text-[#414141]'>I-Banking</div>,
                    

                penjelasan:
                <div className='text-[#414141] pl-5'>
                    <ol class="list-decimal">
                        <li>Akses situs Mandiri Online, masukkan <i>username</i> dan <i>password.</i></li>
                        <li>Pilih menu Pembayaran lalu  Multipayment.</li>
                        <li>Pilih Penyedia Jasa yang digunakan.</li>
                        <li>Masukkan nomor <i>virtual account</i> Mandiri dan nominal yang akan dibayarkan lalu Lanjut.</li>
                        <li>Layar akan menampilkan konfirmasi. Apabila sesuai, lanjutkan dengan pilih Konfirmasi.</li>
                        <li>Masukkan PIN token.</li>
                        <li>Selesai</li>
                    </ol>
                </div>
            },
        ],
    };
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

export default Mandiri