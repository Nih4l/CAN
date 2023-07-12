import React, { useRef, useState } from 'react';
import Logo from '../Photos/Logo.png';
import CAN from '../Photos/CAN.png';
import Video from '../Photos/Video.png';
import CarouselMain from '../Components/CarouselMain';
import { Link } from 'react-router-dom';
import SelfCare from '../Photos/SelfCare.png'
import vibird1 from '../Photos/vibird1.gif'

const MultiPIN = () => {
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

    //OTP range
    const [value, setValue] = useState('');

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        if (/^\d*$/.test(inputValue)) {
            setValue(inputValue);
        }
    };
    //Re Enter OTP range
    const [value1, setValue1] = useState('');

    const handleInputChange1 = (event) => {
        const inputValue1 = event.target.value;
        if (/^\d*$/.test(inputValue1)) {
            setValue1(inputValue1);
        }
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
                            <div className=''>
                                {/* <CarouselMain /> */}
                                <img src={SelfCare} alt='none' className='h-[390px] w-[390px]' />
                            </div>

                            <div className='mt-2 flex flex-col items-center justify-center gap-1 '>
                                <h1 className='text-center text-[36px] font-bold'>A companion to your relaxation.</h1>
                                <p className='text-center text-[18px] font-semibold'>Listen to our evergreen radio, do guided meditations, and</p>
                                <p className='text-center text-[18px] font-semibold'>record your memories to relax and unwind.</p>
                            </div>

                            <div className="flex flex-row items-center gap-4 mt-3">
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#EFC319]'></div>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className='h-[100vh] flex flex-col justify-center items-center'>
                        <div className='h-[90%] w-[60vh]  mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-lg rounded-[20px]' style={{
                            boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div>
                                <img src={vibird1} alt='Video' />
                            </div>

                            <div className='text-center text-[30px] font-semibold p-1 text-[#EFC319]'>
                                <h1>Create a PIN</h1>
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center '>
                                <p className='text-[18px] font-semibold'>Its your space, so add a profile lock to keep
                                </p>
                                <p className='text-[18px] font-semibold'>your account information with you</p>
                            </div>

                            <div className=' text-4xl py-4 flex flex-row items-center justify-center w-full gap-12 ml-7'>

                                <p className='text-sm  font-semibold flex justify-center w-[14%] '>PIN</p>

                                <input
                                    type="text"
                                    value={value}
                                    onChange={handleInputChange}
                                    maxlength="4"
                                    placeholder='__  __  __  __'
                                    className='w-[64%] placeholder:text-4xl placeholder:tracking-[0em] bg-transparent tracking-[.50em]  mb-4 outline-none  '
                                    
                                />
                            </div>

                            <div className=' text-4xl py-4 flex items-center justify-center  w-full gap-12 ml-7'>

                                <p className='text-sm  font-semibold flex justify-center w-[14%] '>Re Enter</p>

                                <input
                                    type="text"
                                    value={value1}
                                    onChange={handleInputChange1}
                                    maxlength="4"
                                    placeholder='__  __  __  __'
                                    className='w-[64%] placeholder:text-4xl placeholder:tracking-[0em] bg-transparent tracking-[.50em] mb-4 outline-none'
                                />

                            </div>
                            {/* <div className='flex flex-col gap-8 mt-8'>
                            <div className='flex flex-row gap-5  justify-center relative items-center   '>
                                <input maxLength={4} className='absolute mb-3 outline-none  ml-7 bg-transparent h-12 w-44  p-2  ' style={{ letterSpacing: 32 }}
                                    value={value}
                                    onChange={handleInputChange1}
                                />
                                <span>PIN</span>
                                <span>___</span>
                                <span>___</span>
                                <span>___</span>
                                <span>___</span>

                            </div>
                            <div className='flex flex-row gap-5  justify-center relative items-center   '>
                                <input maxLength={4} className='absolute mb-3 outline-none  ml-7 bg-transparent h-12 w-44  p-2  ' style={{ letterSpacing: 32 }}
                                    value={value1}
                                    onChange={handleInputChange}
                                />
                                <span>Re Enter</span>
                                <span>___</span>
                                <span>___</span>
                                <span>___</span>
                                <span>___</span>

                            </div>
                            </div> */}

                            <div className='flex justify-center '>
                                {(value.length === 4 && value === value1) ?
                                    (<Link to={(value.length === 4 && value === value1) ? '/ShowProfile' : ''} className='w-[50%] '>
                                        <h2 className='bg-[#EFC319] text-center p-3 rounded-lg text-white'>Continue</h2>
                                    </Link>)
                                    :
                                    (<div className='w-[50%] '>
                                        <h2 className='bg-[#EFC319] opacity-50 text-center p-3 rounded-lg text-white'>Continue</h2>
                                    </div>

                                    )}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MultiPIN