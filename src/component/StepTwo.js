import React, {useState} from 'react';
import '../StepTwo.css';
import '../App.css';
import StepThree from './StepThree';
import {useNavigate} from 'react-router-dom';

function StepTwo() {
    const [changeColor, setChangeColor] = useState(false)

    //function for changeColor
    const handleClick = () => {
        setChangeColor(!changeColor)
    }

    //function for navigate
    const navigate = useNavigate();

    const Demo = () => {
        navigate('/Demo');
    };

    const StepThree = () => {
        navigate('/StepThree');
    };
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
                <button onClick={handleClick} className={`txt-list-step-sosmed ${(changeColor === true)? `bg-gray-77` : `bg-red-300` }`}>Social Media Manajemen</button>
            </div>
            <div className='btn-list-step'>
                <button className='txt-list-step-sosmed'>Digital Ads & Marketing</button>
            </div>
            <div className='btn-list-step'>
                <button className='txt-list-step-sosmed'>Motion Graphic</button>
            </div>
            <div className='btn-list-step'>
                <button className='txt-list-step-sosmed'>Presentation & Power Point</button>
            </div>
            <div className='btn-list-step'>
                <button className='txt-list-step-sosmed'>Logos & Branding</button>
            </div>
            <div className='btn-list-step'>
                <button className='txt-list-step-sosmed'>Ilustrations</button>
            </div>
            <div className='btn-list-step'>
                <button className='txt-list-step-sosmed'>Print & Merchandise</button>
            </div>
            <div className='btn-list-step'>
                <button className='txt-list-step-sosmed'>Other</button>
            </div>
            <div className='frame-btn-step'>
                <div className='frame-btn-previous'>
                    <button onClick={Demo} className='btn-previous'>
                        Previous
                    </button>
                </div>
                <div className='frame-btn-next-step'>
                    <button onClick={StepThree} className='btn-next-step'>
                        Next
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StepTwo
