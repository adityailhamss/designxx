import React from 'react'

function paket({visible, onClose}) {
    
    if (!visible) return null
  return (
    <div className='flex flex-col px-20 py-10 w-auto items-center fixed inset-0 bg-opacity-30 backdrop-blur-sm'>
      <div className='flex flex-col bg-[#FFFFFF] items-center overflow-auto lg:w-[671px] lg:h-[716px] gap-4'>
        <div className='flex flex-col'>
        <p className='text-2xl text-[#444444]'>Paket Langganan</p>
        </div>
        {/* <div className='garis-2'></div> */}
        <button className='flex flex-row bg-[#F9F7F7] lg:w-[623px] lg:h-[230px] rounded-lg border-[1px] text-left'>
            <div className='block lg:flex flex-row lg:my-6 gap-2 lg:pl-[52px] '>
                <div className='flex flex-col w-max gap-2 px-2 '>
                    <h1 className='text-3xl text-[#E9520B] font-bold'>Pro</h1>
                    <h4 className='text-lg text-[#455A64]'>Hanya <s>Rp.5.000.000</s></h4>
                    <h1 className='text-4xl font-bold text-[#455A64]'>Rp.1.500.000</h1>
                    <h4 className='text-lg text-[#455A64]'>/Month</h4>
                </div>
                <div className='flex flex-col lg:w-[2px] lg:h-[182px] bg-[#D9D9D9] lg:ml-[33px]'>

                </div>
                <div className='flex flex-col gap-5 lg:pl-[33px] w-max'>
                    <h4 className='text-lg text-[#455A64]'>Yang kamu dapat:</h4>
                    <div className='flex flex-row'>
                        <img className='lg:w-6 lg:h-6' src='./assets/icon/Check.png' />
                        <h4 className='text-lg text-[#455A64]'> 1 Bulan Durasi</h4>
                    </div>
                    <div className='flex flex-row'>
                        <img className='lg:w-6 lg:h-6' src='./assets/icon/Check.png' />
                        <h4 className='text-lg text-[#455A64]'> Dedicated Designer Team</h4>
                    </div>
                    <div className='flex flex-row'>
                        <img className='lg:w-6 lg:h-6' src='./assets/icon/Check.png' />
                        <h4 className='text-lg text-[#455A64]'> Unlimited Revision</h4>
                    </div>
                    
                </div>
            </div>

        </button>
        <button className='flex flex-row bg-[#F9F7F7] lg:w-[623px] lg:h-[230px] rounded-lg border-[1px] text-left'>
            <div className='block lg:flex flex-row lg:my-6 gap-2 lg:pl-[52px] '>
                <div className='flex flex-col w-max gap-2 px-2 '>
                    <h1 className='text-3xl text-[#E9520B] font-bold'>Pro</h1>
                    <h4 className='text-lg text-[#455A64]'>Hanya <s>Rp.5.000.000</s></h4>
                    <h1 className='text-4xl font-bold text-[#455A64]'>Rp.1.500.000</h1>
                    <h4 className='text-lg text-[#455A64]'>/Month</h4>
                </div>
                <div className='flex flex-col lg:w-[2px] lg:h-[182px] bg-[#D9D9D9] lg:ml-[33px]'>

                </div>
                <div className='flex flex-col gap-5 lg:pl-[33px] w-max'>
                    <h4 className='text-lg text-[#455A64]'>Yang kamu dapat:</h4>
                    <div className='flex flex-row'>
                        <img className='lg:w-6 lg:h-6' src='./assets/icon/Check.png' />
                        <h4 className='text-lg text-[#455A64]'> 1 Bulan Durasi</h4>
                    </div>
                    <div className='flex flex-row'>
                        <img className='lg:w-6 lg:h-6' src='./assets/icon/Check.png' />
                        <h4 className='text-lg text-[#455A64]'> Dedicated Designer Team</h4>
                    </div>
                    <div className='flex flex-row'>
                        <img className='lg:w-6 lg:h-6' src='./assets/icon/Check.png' />
                        <h4 className='text-lg text-[#455A64]'> Unlimited Revision</h4>
                    </div>
                    
                </div>
            </div>

        </button>
        <button className='flex flex-row bg-[#F9F7F7] lg:w-[623px] lg:h-[230px] rounded-lg border-[1px] text-left'>
            <div className='block lg:flex flex-row lg:my-6 gap-2 lg:pl-[52px] '>
                <div className='flex flex-col w-max gap-2 px-2 '>
                    <h1 className='text-3xl text-[#E9520B] font-bold'>Pro</h1>
                    <h4 className='text-lg text-[#455A64]'>Hanya <s>Rp.5.000.000</s></h4>
                    <h1 className='text-4xl font-bold text-[#455A64]'>Rp.1.500.000</h1>
                    <h4 className='text-lg text-[#455A64]'>/Month</h4>
                </div>
                <div className='flex flex-col lg:w-[2px] lg:h-[182px] bg-[#D9D9D9] lg:ml-[33px]'>

                </div>
                <div className='flex flex-col gap-5 lg:pl-[33px] w-max'>
                    <h4 className='text-lg text-[#455A64]'>Yang kamu dapat:</h4>
                    <div className='flex flex-row'>
                        <img className='lg:w-6 lg:h-6' src='./assets/icon/Check.png' />
                        <h4 className='text-lg text-[#455A64]'> 1 Bulan Durasi</h4>
                    </div>
                    <div className='flex flex-row'>
                        <img className='lg:w-6 lg:h-6' src='./assets/icon/Check.png' />
                        <h4 className='text-lg text-[#455A64]'> Dedicated Designer Team</h4>
                    </div>
                    <div className='flex flex-row'>
                        <img className='lg:w-6 lg:h-6' src='./assets/icon/Check.png' />
                        <h4 className='text-lg text-[#455A64]'> Unlimited Revision</h4>
                    </div>
                    
                </div>
            </div>

        </button>
      </div>
    </div>
  )
}

export default paket