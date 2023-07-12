import React, { useState } from 'react'
import Logo from '../Photos/Logo.png'
import CAN from '../Photos/CAN.png'
import Frame from '../Photos/Frame.png'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {


  const [email, setEmail] = useState('')
  const [error, setError] = useState('');


  const handleEmailChange = (event) => {
    const enteredValue = event.target.value;
    setEmail(enteredValue);

    // Regular expression patterns to check if entered text is in email or mobile number format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^\d{10}$/; // Assuming a 10-digit mobile number format

    if (!emailPattern.test(enteredValue) && !mobilePattern.test(enteredValue)) {
      setError('(Invalid Email or Mobile Number)');
    } else {
      setError('');
    }
  };

  const isResetDisabled = error === '';

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

          <div className='h-[80%] mt-14 flex flex-col items-center justify-center gap-4'>
            <div>
              <h1 className='text-[28px] font-semibold text-[#EFC319]'>Forgot Password</h1>
            </div>
            <div className='text-center'>
              <p className='text-[16px] text-[#555555] font-semibold'>Please, enter your registered email. You'll receive </p>
              <p className='text-[16px] text-[#555555] font-semibold'>a link to reset password.</p>
            </div>
            <div>
              <img className='w-28 h-28' src={Frame} alt='none' />
            </div>
            <div>
              <div className='border-2 h-14 rounded-xl w-96 flex items-center '>
                <input placeholder='Email/phone no.' className='border-none w-full p-4 bg-transparent placeholder:p-2 outline-none'
                  value={email}
                  onChange={handleEmailChange} />
                <div className='text-red-400 text-xs w-[50%]'>{error && <p>{error}</p>}</div>
              </div>
            </div>
            <div>


              {email && isResetDisabled ? <Link to='/OtpVerify'>
                <div className='w-52 h-12 cursor-pointer'>
                  <h2 className='bg-[#EFC319] text-center p-3 rounded-xl text-white font-semibold ' >Reset password</h2>
                </div>
              </Link> : <div className='w-52 h-12 cursor-pointer'>
                  <h2 className='bg-[#EFC319] text-center p-3 rounded-xl text-white font-semibold opacity-50'>Reset password</h2>
                </div> }

              

            </div>
            <div className='mt-3'>
              <Link to='/LoginForm'>
                <h1 className='text-[#C31A7F] text-[18px] font-semibold cursor-pointer underline decoration-1'>Login again</h1>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
