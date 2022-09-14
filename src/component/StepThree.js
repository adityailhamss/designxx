import React from 'react';
import '../StepThree.css';

function StepThree() {
  return (
    <div className='container'>
        <div className='frame-step-three'>
            <div className='frame-nomor-step-2'>
                <div className='btn-step-2-1'>
                    <p className='txt-btn-step-2-1'>1</p>
                </div>
                    <p className='line-step-2-1'></p>
                <div className='btn-step-2-2'>
                    <p className='txt-btn-step-2-2'>2</p>
                </div>
                    <p className='line-step-2-2'></p>
                <div className='btn-step-2-3'>
                    <p className='txt-btn-step-2-3'>3</p>
                </div>
            </div>
            <div>
                <p className='txt-what-create'>Tell us about your company</p>
                <p className='txt-what-consult'>Fill out the form to schedule a consultation with a DesignXX expert</p>
            </div>
            <div class="mb-4">
                <label class="txt-form-email block text-gray-700 text-sm font-bold mb-2" for="nama">
                    Nama Lengkap
                </label>
                <input class="form-email shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Tulis Disini"/>
            </div>
            <div class="mb-6">
                <label class="txt-form-email block text-gray-700 text-sm font-bold mb-2" for="title">
                    Title
                </label>
                <input class="form-email shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="Pilih Disini"/>
            </div>
            <div class="mb-6">
                <label class="txt-form-email block text-gray-700 text-sm font-bold mb-2" for="industry">
                    Industry
                </label>
                <input class="form-email shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="Pilih Disini"/>
            </div>
            <div className='frame-btn-step'>
                <div className='frame-btn-previous'>
                    <button className='btn-previous'>
                        Previous
                    </button>
                </div>
                <div className='frame-btn-next'>
                    <button className='btn-next'>
                        Next
                    </button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default StepThree
