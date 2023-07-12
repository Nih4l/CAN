import React from 'react'
import Logo from '../Photos/Logo.png'
import CAN from '../Photos/CAN.png'
import { Link } from 'react-router-dom'

const ResetPasswordSuccessfully = () => {
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
                    <div className='h-[80%]  mt-12 flex flex-col items-center  gap-4'>
                        <div>
                            <h1 className='text-[30px] font-medium text-[#EFC319]'>Reset Password</h1>
                        </div>
                        <div className='text-center'>
                            <p className='text-[16px] text-[#555555] font-semibold'>Password reset is successfully done.</p>
                        </div>

                        <div className='mt-24'>
                            <Link to='/LoginForm'>
                                <div className='w-52 h-12 cursor-pointer'>
                                    <h2 className='bg-[#EFC319]  text-center p-3 rounded-xl text-white font-semibold'>Go Back To Login</h2>
                                </div>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>

            <div className='h-[80%] mt-10  flex flex-col items-center justify-center gap-5'>
                <div>
                    <h1 className='text-[30px] font-medium text-[#EFC319]'>Reset Password</h1>
                </div>
                <div className='text-center'>
                    <p className='text-[18px] text-[#555555] font-semibold'>Your new password must be different from</p>


                </div>

                

                <div className='mt-2'>
                
                    <Link to='/LoginForm'>
                        <div className='w-52 h-12 cursor-pointer'>
                            <h2 className='bg-[#EFC319]  text-center p-3 rounded-xl text-white font-semibold'>Verify</h2>
                        </div>
                    </Link>

                </div>

            </div>
        </>
    )
}

export default ResetPasswordSuccessfully
