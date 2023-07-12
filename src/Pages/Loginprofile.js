import React, { useRef, useState } from 'react';
import Logo from '../Photos/Logo.png';
import CAN from '../Photos/CAN.png';
import Video from '../Photos/Video.png';
import { VscAccount } from 'react-icons/vsc';
import { IoCloseCircleSharp } from 'react-icons/io5';
import CarouselMain from '../Components/CarouselMain';
import Freeline from '../Photos/MeetPeople.png'
import { Link } from 'react-router-dom';
import account from "../Photos/account.jpg";


const LoginProfile = () => {
    const [image, setImage] = useState(null);
    const hiddenChooseImage = useRef(null);

    const hideImage = () => {
        setImage(false);
    };

    const uploadImage = () => {
        hiddenChooseImage.current.click();
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(URL.createObjectURL(file));
    };

    return (
        <>
            <div className='ml-[80px] mt-2 absolute flex items-center '>
                <img src={Logo} alt='not found' className='w-[80px] h-[80px]' />
                <img src={CAN} alt='not found' className='w-[42.88px] h-[16.19px]  ' />
            </div>
            <div>


                <div className='flex'>
                    <div className='w-[55%] mt-16  flex flex-col items-center justify-center'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            {/* <img src={WelcomeScreen} className='' /> */}
                            <div className='w-[70%] '>
                                {/* <CarouselMain /> */}
                                <img src={Freeline} alt='none' />
                            </div>

                            <div className=' flex flex-col items-center justify-center gap-1 '>
                                <h1 className='text-center text-[36px] font-bold'>Welcome Ananya!</h1>
                                <p className='text-center text-[18px] font-semibold w-[60%]'>We welcome you to CAN with all our
                                    Hearts.</p>
                            </div>

                            <div className="flex flex-row items-center gap-4 mt-3">
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#EFC319]"></div>
                            </div>
                        </div>
                    </div>


                    {/* right side */}
                    <div className='h-[100vh] flex items-center'>
                        <div className='h-[90%] w-[60vh]  mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-lg rounded-[20px]' style={{
                            boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div className='flex flec-row justify-center items-center mt-20'>
                                <img src={Logo} alt='not found' className='w-[100px] h-[100px]' />
                            </div>
                            <div className='text-center text-xl font-semibold p-1 text-[#EFC319]'>
                                <h1>Profile Successfully added!</h1>
                            </div>

                            <div className='flex flex-col justify-center items-center py-8'>
                                <div className='flex flex-wrap bg-[#8D193C] w-[80%] rounded-[14px] pt-1'>
                                    <div className='w-[30%] p-3 pl-8'>
                                        <div className='rounded-full p-1 bg-white'>
                                            <img src={account} alt="" className='rounded-full' />
                                        </div>

                                    </div>
                                    <div className='w-[70%] pt-2  text-white'>
                                        <p className='font-bold'>Shrinath Shandrashekar</p>
                                        <p className='font-thin'> Fighter, Male</p>
                                        <p className='font-thin'>+919099090909</p>
                                    </div>
                                    <div className='flex justify-end w-full px-6 pb-3 text-white'>
                                        <div className='w-fit font-thin'>10 Oct 1987</div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <p className=' w-[80%] text-center px-6 font-semibold pb-10'>Your account has been successfully
                                    linked to his account.</p>
                            </div>

                            <div className='flex px-5 justify-center'>
                               

                               
                                    <div className='flex justify-center py-2 w-[50%]'>

                                        <Link to='/home' className='w-[86%]'>
                                            <h2 className='bg-[#EFC319]  text-center p-3 rounded-lg text-white'>Finish!</h2>
                                        </Link>
                                    
                                    </div>

                                


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginProfile