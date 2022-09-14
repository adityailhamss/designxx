import React from 'react'

function Order() {
  return (
    <section className='container-order'>
        <div className='frm-o-1'>
            <p className='txt-o-1'>Order Detail</p>
            <p className='txt-o-2'>GANTI PAKET</p>
        </div>
        <div className='box-o-1'>
            <div className='box-o-2'>
                <p className='styletxt-6'>Pro</p>
                <p className='styletxt-7'>Hanya <s>Rp.5.000.000</s></p>
                <p className='styletxt-8'>Rp.1.500.000</p>
                <p className='styletxt-9'>/Month</p>
            </div>
            <div className='garis'></div>
            <div className='box-o-3'>
                <p className='styletxt-10'>Yang kamu dapat:</p>
                <div className='box-o-4'>
                    <img src='./assets/icon/Check.png' />
                    <p className='styletxt-10'>1 Bulan Durasi</p>
                </div>
                <div className='box-o-4'>
                    <img src='./assets/icon/Check.png' />
                    <p className='styletxt-10'>Dedicated Designer Team</p>
                </div>
                <div className='box-o-4'>
                    <img src='./assets/icon/Check.png' />
                    <p className='styletxt-10'>Unlimited Revision</p>
                </div>
            </div>
        </div>
        <p className='txt-o-3'>Billing information</p>
        <p className='txt-o-4'>We'll use this information to issue the first invoice. You'll be able to update the details for future invoices from your account profile.</p>
        <div className='box-o-5'>
            <label class="block mb-2 styletxt-11" for="nama">
                Nama Lengkap
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama" type="text" placeholder="Nama Lengkap" />
        </div>
        <div className='box-o-5'>
            <label class="block mb-2 styletxt-11" for="alamat">
                Alamat
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="alamat" type="text" placeholder="Nama Lengkap" />
        </div>
        <div className='box-o-5'>
            <label class="block mb-2 styletxt-11" for="email">
                Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
        </div>
        <div className='box-o-5'>
            <label class="block mb-2 styletxt-11" for="telepon">
                No Handphone/Telepon
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="telepon" type="text" placeholder="No Handphone" />
        </div>
        <div className='box-o-5'>
            <label class="block mb-2 styletxt-11" for="perusahaan">
                Perusahaan
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="perusahaan" type="text" placeholder="Perusahaan" />
        </div>
        <p className='styletxt-12'>By clicking next, you agree to receive communications from DesignXX in accordance with our <b>Privacy Policy.</b></p>
        <button className='btn-order'> <p className='styletxt-13'>PILIH METODE PEMBAYARAN</p></button>
        
    </section>
    
  )
}

export default Order
