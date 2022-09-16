import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Demo.css';

function Demo() {
  const navigate = useNavigate();

    const StepTwo = () => {
        navigate('/StepTwo');
    };
  return (
    <div className='container'>
      <div className='container-demo'>
        <p className='txt-demo'>Book a call with us</p>
        <p className='txt-demo1'>Fill out the form to schedule a consultation with a DesignXX expert</p>
      <div class="mb-4">
      <label class="txt-form-email block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="form-email shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Sudah Ditulis"/>
    </div>
    <div class="mb-6">
      <label class="txt-form-email block text-gray-700 text-sm font-bold mb-2" for="company">
        Company
      </label>
      <input class="form-email shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="Sudah Ditulis"/>
      <p className='txt-clicking'>By clicking next, you agree to receive communications from DesignXX in accordance with our <b>Privacy Policy</b></p>
    </div>
    <div className="frame-btn-demo">
          <div className='btn-video-demo'>
            <button className='btn-video'>Video Demo</button>
          </div>
          <div className='btn-book'>
            <button onClick={StepTwo} className='btn-call'>Book A Call</button>
          </div>
    </div>
    </div>
    </div>
  )
}

export default Demo
