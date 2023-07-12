import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Photos/Logo.png'
import CAN from '../Photos/CAN.png'

const OtpVerify = () => {

  const [otp, setOtp] = useState('')

  const inputvalue = (e) => {
    setOtp(e.target.value)
  }

  return (
    <>
      <div className='ml-[80px] mt-2 absolute flex items-center '>
        <img src={Logo} alt='not found' className='w-[80px] h-[80px]' />
        <img src={CAN} alt='not found' className='w-[42.88px] h-[16.19px]  ' />
      </div>

      <div className='h-[100vh] flex  items-center justify-center'>
        <div className='h-[75%] w-[60vh] shadow-xl mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-lg rounded-[20px]' style={{
          boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
        }}>

          <div className='h-[80%]  flex flex-col items-center justify-center gap-5'>
            <div>
              <h1 className='text-[28px] font-medium  text-[#EFC319]'>OTP Verfication</h1>
            </div>

            <div className='text-center'>
              <p className='text-[16px] text-[#555555] font-semibold'>OTP has been sent to +91 9191919191</p>

            </div>

            <div className='flex relative flex-row items-center gap-5 mt-6'>
              <input maxLength={4} className='absolute mb-3 outline-none bg-transparent h-12 w-44  p-1  ' style={{ letterSpacing: 32 }}
                value={otp}
                onChange={inputvalue}
              />
              <span>___</span>
              <span>___</span>
              <span>___</span>
              <span>___</span>
            </div>
            <div className='mt-2'>
              <div className='flex flex-row gap-1'><p className='text-[#7E7E7E] '>Don't receive the OTP?</p><p className='text-[#C31A7F] font-semibold'>Resend OTP</p></div>
            </div>

            <div className='mt-2'>
              {otp.length === 4 ?
                <Link to='/ResetPassword'>
                  <div className='w-52 h-12 cursor-pointer'>
                    <h2 className='bg-[#EFC319]  text-center p-3 rounded-xl text-white font-semibold'>Verify</h2>
                  </div>
                </Link>
                : <div className='w-52 h-12 cursor-pointer opacity-50'>
                  <h2 className='bg-[#EFC319]  text-center p-3 rounded-xl text-white font-semibold'>Verify</h2>
                </div>
              }


            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default OtpVerify
