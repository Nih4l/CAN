import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Photos/Logo.png'
import CAN from '../Photos/CAN.png'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import { IoKeyOutline } from 'react-icons/io5'

const ResetPassword = () => {
  const [eye1, setEye1] = useState()
  const [eye, setEye] = useState()

  function seePass() {
    setEye(!eye)
  }
  function seePass1() {
    setEye1(!eye1)
  }

  const [firstpass, setFirstpass] = useState('')

  function passwordChange(e) {
    setFirstpass(e.target.value)
  }

  const [firstpass1, setFirstpass1] = useState(null)

  function passwordChange1(e) {
    setFirstpass1(e.target.value)
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

          <div className='h-[80%] mt-10  flex flex-col items-center justify-center gap-5'>
            <div>
              <h1 className='text-[30px] font-medium text-[#EFC319]'>Reset Password</h1>
            </div>

            <div className='text-center'>
              <p className='text-[16px] text-[#555555] font-semibold'>Your new password must be different from</p>
              <p className='text-[16px] text-[#555555] font-semibold'>previous used password</p>

            </div>

            <div className='mt-8 flex flex-col w-full gap-5'>
              <div className='flex items-center gap-4 mx-8 px-2 p-2 border-2 rounded-[20px]'>
                <IoKeyOutline />
                <div className='font-bold bg-[#000] h-[35px] w-[1px] inline-block text-[20px]'></div>
                <input placeholder='Enter password'
                  className='bg-transparent w-full outline-none'
                  type={eye ? 'text' : 'password'}
                  onChange={passwordChange}
                  minLength={3}
                  value={firstpass}
                />
                <div onClick={seePass}>
                  {eye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </div>
              </div>
              <div className='flex items-center gap-4 mx-8 px-2 p-2 border-2 rounded-[20px]'>
                <IoKeyOutline />
                <div className='font-bold bg-[#000] h-[35px] w-[1px] inline-block text-[20px]'></div>
                <input placeholder='Re-enter password'
                  className='bg-transparent w-full outline-none'
                  type={eye1 ? 'text' : 'password'}
                  onChange={passwordChange1}
                  minLength={3}
                  value={firstpass1}
                />
                <div onClick={seePass1}>
                  {eye1 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </div>
              </div>

            </div>

            <div className='mt-2'>

            {(firstpass) === (firstpass1) ? 
              <Link to='/ResetPasswordSuccessfully'>
                <div className='w-52 h-12 cursor-pointer'>
                  <h2 className='bg-[#EFC319]  text-center p-3 rounded-xl text-white font-semibold'>Verify</h2>
                </div>
              </Link>
                :
                <div className='w-52 h-12 cursor-pointer opacity-50'>
                  <h2 className='bg-[#EFC319]  text-center p-3 rounded-xl text-white font-semibold'>Verify</h2>
                </div>

            }
              
            </div>

            <div className='mt-2'>
              <p className='text-[#C31A7F] font-semibold underline decoration-1'>Login</p>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
