import React, {useState} from 'react';
import Calendar from 'react-calendar';
import '../CalendarPopup.css';

function CalendarPopup( {visible, onClose} ) {
    
    const [value, onChange] = useState(new Date());
    if (!visible) return null
  return (
    <div className='frame-booking fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='frame-b-1'>
            <p className='txt-b-1'>
                Book a call with us
            </p>
                <div className='frame-time'>
                    <img className = 'iconTime' src = 'assets/img/iconTime.png'/>
                    <p className='txt-iconTime'>30 Min</p>
                </div>
                <div className='frame-time'>
                    <img className = 'iconTime' src = 'assets/img/iconDevice.png'/>
                    <p className='txt-iconTime'>Web Conference</p>
                </div>
                <div className='frame-time'>
                    <img className = 'iconTime' src = 'assets/img/iconDate.png'/>
                    <p className='txt-iconTime'>-</p>
                </div>
        </div>
        <div className='frame-b-2'>
            <p className='txt-date'>Select a Date & Time</p>
            <div className='frame-calendar-1'>
                <div className='frame-calendar-2'>
                    <Calendar onChange={onChange} value={value} />
                </div>
                <div className='line-calendar'>
                </div>
                <div className='frame-pick-time overflow-auto'>
                    <div className='frame-pt-1'>
                        <p className='txt-pick-time'>Pick Time</p>
                    </div>
                    <div className='frame-pt-2'>
                        <p className='txt-pick-time-1'>08:00</p>
                    </div>
                    <div className='frame-pt-2'>
                        <p className='txt-pick-time-1'>09:00</p>
                    </div>
                    <div className='frame-pt-2'>
                        <p className='txt-pick-time-1'>10:00</p>
                    </div>
                    <div className='frame-pt-2'>
                        <p className='txt-pick-time-1'>11:00</p>
                    </div>
                    <div className='frame-pt-2'>
                        <p className='txt-pick-time-1'>12:00</p>
                    </div>
                    <div className='frame-pt-2'>
                        <p className='txt-pick-time-1'>13:00</p>
                    </div>
                    <div className='frame-pt-2'>
                        <p className='txt-pick-time-1'>14:00</p>
                    </div>
                    <div className='frame-pt-2'>
                        <p className='txt-pick-time-1'>15:00</p>
                    </div>
                </div>
            </div>
            <div className='frame-btn-calendar'>
                    <div className='frame-btn-cancel'>
                        <button className='btn-cancel-calendar'>
                            Cancel
                        </button>
                    </div>
                    <div className='frame-btn-next-calendar'>
                        <button className='btn-next-calendar'>
                            Next
                        </button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default CalendarPopup
