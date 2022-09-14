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
            <div class="mb-6 relative w-100">
                <label class="txt-form-email block text-gray-700 text-sm font-bold mb-2" for="title">
                    Title
                </label>
                <select class="form-email shadow appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded leading-tight focus:outline-none focus:shadow-outline">
                <option>Pilih Disini</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
            </div>
            <div class="mb-6 relative w-100">
                <label class="txt-form-email block text-gray-700 text-sm font-bold mb-2" for="industry">
                    Industry
                </label>
                <select class="form-email shadow appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 rounded leading-tight focus:outline-none focus:shadow-outline">
                <option>Pilih Disini</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
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
