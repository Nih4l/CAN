import React, { useState } from 'react'
import Logo from '../Photos/Logo.png'
import CAN from '../Photos/CAN.png'
import Video from '../Photos/Video.png'
import { Link } from 'react-router-dom'
import CarouselMain from '../Components/CarouselMain'
import {IoKeyOutline} from 'react-icons/io5'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'
import Feed from '../Photos/Feed.png'
import vibird1 from '../Photos/vibird1.gif'


const LoginOTP = () => {

    const [eye, setEye] = useState()
    const [eye1, setEye1] = useState()
    

    //see pass
    function seePass () {
        setEye(!eye)
    }
    function seePass1 () {
        setEye1(!eye1)
    }

    //final
    const [firstpass, setFirstpass] = useState('')

    function passwordChange (e) {
        setFirstpass(e.target.value)
    }

    const [firstpass1, setFirstpass1] = useState(null)

    function passwordChange1 (e) {
        setFirstpass1(e.target.value)
    }

    return (
        <>
        <div className='ml-[80px] mt-2 absolute flex items-center  '>
                    <img src={Logo} alt='not found' className='w-[80px] h-[80px]'  />
                    <img src={CAN} alt='not found' className='w-[42.88px] h-[16.19px] ' />
                </div>
            <div>
                

                <div className='flex'>

                    <div className='p-[4%] w-[55%] relative '>
                        <div className='flex flex-col items-center justify-center '>
                            {/* <img src={WelcomeScreen} className='' /> */}
                            <div className='mt-12'>
                                {/* <CarouselMain /> */}
                                <img src={Feed} className='h-[350px] w-[350px]' alt='none' />
                            </div>

                            <div className='mt-5 flex flex-col items-center justify-center  '>
                                <h1 className='text-center text-[36px] font-bold '>Stay up to date, and inspired</h1>
                                <p className=' font-semibold text-[18px] mt-2'>Read curated articles on the latest research, and success</p>
                                <p className='font-semibold text-[18px]'>stories from our community</p>
                            </div>

                            <div className='flex flex-row items-center gap-4 mt-16 '>
                                    <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                                    <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                                    <div className='h-[12px] w-[12px] rounded-full bg-[#EFC319]'></div>
                                    <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                                    <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                                    <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>        
                            </div>
                        </div>
                    </div>


                    {/* right side */}
                    <div className='h-[100vh] flex items-center'>
                        <div className='h-[90%] w-[60vh] shadow-xl mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-lg rounded-[20px]' style={{
                            boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div>
                                <img src={vibird1} alt='none' />
                            </div>
                            <div className='text-center text-3xl font-semibold p-1 text-[#EFC319]'>
                                <h1>Create your password</h1>
                            </div>
                            
                            <div className='mt-6 flex flex-col gap-4'>
                                <div className='flex items-center gap-4 mx-8 px-3 p-2 border-2 rounded-[20px]'>
                                    <IoKeyOutline />
                                    <div className='font-bold bg-[#000] h-[35px] w-[1px] inline-block text-[20px]'></div>
                                    <input placeholder='Enter password' 
                                    className='bg-transparent w-full outline-none'
                                    type={eye ?  'text' : 'password'}
                                    onChange={passwordChange}
                                    minLength={3}
                                    value={firstpass}
                                    />
                                    <div onClick={seePass}>
                                        {eye ?<AiOutlineEye/> : <AiOutlineEyeInvisible />}
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 mx-8 px-3 p-2 border-2 rounded-[20px]'>
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
                                        {eye1 ?<AiOutlineEye/> : <AiOutlineEyeInvisible />}
                                    </div>
                                </div>
                                
                            </div>

                            <div className='flex justify-center py-6'>


                                {(firstpass) === (firstpass1) ?
                                    (<Link to='/choosetitle' className='w-[40%]'>
                                        <h2 className='bg-[#EFC319]  text-center p-3 rounded-lg text-white'>Verify</h2>
                                    </Link>)
                                    :
                                    (<div className='w-[40%]'>
                                        <h2 className='bg-[#EFC319] opacity-50  text-center p-3 rounded-lg text-white'>Verify OTP</h2>
                                    </div>)
                                }
                            </div>



                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}


export default LoginOTP