import React from 'react'
import HeaderPayment from '../HeaderPayment';
import OptionPayment from '../OptionPayment';

function BNI() {
    const Option = {
        option1 : [
            {
                metode: <div className='text-[#414141]'>ATM BNI</div>,

                penjelasan: 
                <div className='text-[#414141] pl-5'>
                    <ol class="list-decimal">
                        <li>Masukkan kartu, pilih bahasa kemudian ketikkan 6 digit PIN ATM</li>
                        <li>Pilih menu Lainnya</li>
                        <li>Pilih Transfer kemudian pilih jenis rekening yang akan digunakan (misalnya Tabungan)</li>
                        <li>Pilih Virtual Account Billing kemudian masukkan 16 digit nomornya. Jumlah yang harus dibayar akan muncul pada layar konfirmasi</li>
                        <li>Jika sudah sesuai, lanjutkan transaksi dan simpan bukti transfer.</li>
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
                        <li>Buka aplikasi BNI Mobile Banking lewat ponsel</li>
                        <li>Isi user ID dan <i>password</i></li>
                        <li>Setelah terbuka, pilih menu Transfer kemudian tekan pilihan Virtual Account Billing</li>
                        <li>Pilih rekening debet kemudian pilih input baru dan masukkan 16 digit nomor <i>virtual account</i></li>
                        <li>Jumlah tagihan akan muncul di layar. Lakukan konfirmasi kemudian ketikkan Password Transaksi</li>
                        <li>Pembayaran selesai.</li>
                        
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
                        <li>Buka browser kemudian akses ibank.bni.co.id</li>
                        <li>Isi kolom user ID dan <i>password</i></li>
                        <li>Pilih menu Transfer kemudian klik pada pilihan Virtual Account Billing</li>
                        <li>Masukkan nomor <i>virtual account</i> yang dituju dan pilih rekening yang akan digunakan untuk membayar</li>
                        <li>Jumlah tagihan akan muncul pada layar konfirmasi. Jika sudah cocok, lanjutkan transaksi</li>
                        <li>Masukkan token atau Kode Otentikasi Token</li>
                        <li>Jika transaksi sukses, Anda akan memperoleh notifikasi.</li>
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

export default BNI