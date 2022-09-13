import React from 'react';
import '../Demo.css';

function Demo() {
  return (
    <div className='container-demo'>
        <p className='txt-demo'>Book a call with us</p>
        <p className='txt-demo1'>Fill out the form to schedule a consultation with a DesignXX expert</p>
        <div className='frame1-demo'>
            <p className='txt-email'>
                Email
            </p>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Sudah Ditulis" img src='assets/img/iconx.png'></input>
        </div>
        <div>
            <p className='txt-company'>
                Password
            </p>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Sudah Ditulis" img src='assets/img/iconx.png'></input>
            </div>
    </div>
  )
}

export default Demo
