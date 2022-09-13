import React from 'react';
import '../App.css';

function LandingPage() {
  return (
    <div className='container'>
        <div className='columns-2'>
            <p className='txt-4'>On-demand design services that save time and money</p>
            <p className='line-1'></p>
            <p className='txt-5'>Fueled by a dedicated global workforce, DesignXX combines tech and talent, offering a design solution that can make work work for you</p>
            <div className='btn-home'>
            <button className='txt-home'>Lihat Project</button>
            </div>
            <img className= "home" src ="assets/img/home.png" alt='homepag'/>
        </div>
        <div className='columns-2'>
            <p className='line-3'></p>
            <img className= "rect3"/>
                <p className='txt-rect3'>Submit Your Request</p>
                <p className='no-rect3'>01</p>
            <img className='rect4'/>
                <p className='txt-rect4'>Your Designer Gets to Work</p>
                <p className='no-rect4'>02</p>
            <img className='rect5'/>
                <p className='txt-rect5'>You've got a design</p>
                <p className='no-rect5'>03</p>
            <div className='work'>
                <p className='txt-work1'>How We Work?</p>
                <p className='txt-work2'>Let's discuss what projects you have in mind</p>
                <div className='btn-work'>
                    <button className='work-txt-btn'>Selengkapnya</button>
                </div>
            </div>
            <div className='columns-2'>
                <p className='txt-meet1'>Meet Our Customers</p>
                <p className='txt-meet2'>We have helped startups around the globe as well as fortune 500 companies</p>
                <div className='btn-meet'>
                    <button className='txt-btn-meet'>BUTTON</button>
                </div>
                <img className = 'mandiri' src = 'assets/img/mandiri.png' alt='logoMandiri'/>
                <img className = 'amartha' src = 'assets/img/amartha.png' alt='logoAmartha'/>
                <img className = 'paxel' src = 'assets/img/paxel.png' alt='logoPaxel'/>
                <img className = 'wahyoo' src = 'assets/img/wahyoo.png' alt='logoWahyoo'/>
                <img className = 'cisco' src = 'assets/img/cisco.png' alt='logoCisco'/>
                <img className = 'legoas' src = 'assets/img/legoas.png' alt='logoLegoas'/>
                <img className = 'lubna' src = 'assets/img/lubna.png' alt='logoLubna'/>
                <img className = 'riliv' src = 'assets/img/riliv.png' alt='logoRiliv'/>
                <img className = 'unai' src = 'assets/img/unai.png' alt='logoUnai'/>
            </div>
            <div className='columns-2'>
            <img className = 'weDo1' src = 'assets/img/weDo1.png' alt='logoWedo1'/>
            <img className = 'weDo2' src = 'assets/img/weDo2.png' alt='logoWedo2'/>
            <img className = 'weDo3' src = 'assets/img/weDo3.png' alt='logoWedo3'/>
            <div className='btn-wedo'>
                <button className='txt-btn-wedo'>Lihat Semua</button>
            </div>
            <p className='txt-wedo1'>What We Do?</p>
            <ul className='list-media'>
                <li>Social Media Manajemen</li>
                <li>Design Branding</li>
                <li>Design Logo</li>
                <li>Design Marketing</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
