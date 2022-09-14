import React from 'react';
import '../StepTwo.css';
import '../App.css';

function StepTwo() {
  return (
    <div className='container'>
        <div className='frame-step-two'>
            <div className='frame-nomor-step'>
                <div className='btn-step-1'>
                    <p className='txt-btn-step-one'>1</p>
                </div>
                    <p className='line-step-1'></p>
                <div className='btn-step-2'>
                    <p className='txt-btn-step-two'>2</p>
                </div>
                    <p className='line-step-2'></p>
                <div className='btn-step-3'>
                    <p className='txt-btn-step-three'>3</p>
                </div>
            </div>
            <div>
                <p className='txt-what-create'>What do you want to create</p>
                <p className='txt-what-consult'>Fill out the form to schedule a consultation with a DesignXX expert</p>
            </div>
            <div className='btn-list-step'>
                <p className='txt-list-step-sosmed'>Social Media Manajemen</p>
            </div>
            <div className='btn-list-step'>
                <p className='txt-list-step-sosmed'>Digital Ads & Marketing</p>
            </div>
            <div className='btn-list-step'>
                <p className='txt-list-step-sosmed'>Motion Graphic</p>
            </div>
            <div className='btn-list-step'>
                <p className='txt-list-step-sosmed'>Presentation & Power Point</p>
            </div>
            <div className='btn-list-step'>
                <p className='txt-list-step-sosmed'>Logos & Branding</p>
            </div>
            <div className='btn-list-step'>
                <p className='txt-list-step-sosmed'>Ilustrations</p>
            </div>
            <div className='btn-list-step'>
                <p className='txt-list-step-sosmed'>Print & Merchandise</p>
            </div>
            <div className='btn-list-step'>
                <p className='txt-list-step-sosmed'>Other</p>
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

export default StepTwo
