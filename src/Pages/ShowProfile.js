import React, { useState } from 'react'
import LogoCAn from '../Photos/LogoCAn.png'
import CANa from '../Photos/CANa.png'
import account from '../Photos/account.jpg'
import CarouselMain from '../Components/CarouselMain'
import { IoAddCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import b4 from '../Photos/b4.png'
import WelcomScreen from '../Photos/WelcomeScreen.png'
import { RxCross2 } from 'react-icons/rx'

const ShowProfile = () => {
    const [creatPin_open, setCreatPin_open] = useState(false)
    const [value, setValue] = useState('');


    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        if (/^\d*$/.test(inputValue)) {
            setValue(inputValue);
        }
    };
    const [value1, setValue1] = useState('');


    const handleInputChange1 = (event) => {
        const inputValue1 = event.target.value;
        if (/^\d*$/.test(inputValue1)) {
            setValue1(inputValue1);
        }
    };


    const creatPin = () => {
        setCreatPin_open(!creatPin_open)
    }
    return (
        <>
            {creatPin_open && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '
                    style={{ backdropFilter: 'blur(2px)' }}>

                    <div className='bg-white h-max w-[35%] rounded-3xl'>
                        <div className='relative flex py-6 px-16 items-center flex-col'>
                            <div className='absolute top-2 right-2 '>
                                <RxCross2 size={20} onClick={creatPin} />
                            </div>
                            <div className='text-xl font-semibold'>Create a Pin</div>
                            <p className='font-medium  text-center px-4 -'>Its your space, so add a profile lock to keep
                                your account information with you</p>
                            <div className=' text-2xl py-1 flex flex-row items-center justify-center w-full  '>

                                <p className='text-xs  font-semibold flex justify-center w-[14%] '>PIN</p>

                                <input
                                    type="text"
                                    value={value}
                                    onChange={handleInputChange}
                                    maxlength="4"
                                    placeholder='__  __  __  __'
                                    className='w-[40%] placeholder:text-3xl placeholder:tracking-[0em] bg-transparent tracking-[1em]  mb-4 outline-none  '

                                />
                            </div>
                            <div className=' text-2xl py-1 flex flex-row items-center justify-center w-full  '>

                                <p className='text-xs  font-semibold flex justify-center w-[14%]'>Re Enter</p>

                                <input
                                    type="text"
                                    value={value1}
                                    onChange={handleInputChange1}
                                    maxlength="4"
                                    placeholder='__  __  __  __'
                                    className='w-[40%] placeholder:text-3xl placeholder:tracking-[0em] bg-transparent tracking-[1em]  mb-4 outline-none  '

                                />
                            </div>
                            <div className='w-[40%] pt-5 '>
                                {(value.length === 4 && value === value1) ?
                                    (<Link to={(value.length === 4 && value === value1) ? '/loginchoosetitle' : ''}>
                                        <div className='bg-[#EFC319] text-center p-3 rounded-xl text-white'>Continue</div>
                                    </Link>)
                                    :
                                    (
                                        <div className='bg-[#EFC319] text-center p-3 rounded-xl text-white opacity-50 '>Continue</div>


                                    )}

                            </div>
                        </div>
                    </div>
                </div>
            )}


            <div className='lg:ml-[80px] mt-2 lg:absolute flex items-center justify-center '>
                <img src={LogoCAn} alt='not found' className='w-[80px] h-[80px]' />
                <img src={CANa} alt='not found' className='w-[42.88px] h-[16.19px]  ' />
            </div>
            <div>



                <div className='flex lg:flex-row lg:p-0 p-2 items-center justify-center'>

                    <div className='hidden lg:block w-[55%] mt-20  flex flex-col items-center justify-center '>
                        <div className='flex flex-col items-center justify-center'>
                            {/* <img src={WelcomeScreen} className='' /> */}
                            <div className=''>
                                {/* <CarouselMain /> */}
                                <img src={WelcomScreen} className='h-[433px] w-[488px]' alt='none' />
                            </div>

                            <div className='  flex flex-col items-center justify-center   '>
                                    <h1 className='text-center text-[36px] font-bold'>Welcome Sierra!</h1>
                                    <p className='text-[18px] font-semibold mt-2'>We welcome you to CAN with all our</p>
                                    <p className='text-[18px] font-semibold'>Hearts. </p>
                                </div>

                        </div>
                    </div>


                    {/* right side */}
                    <div className='h-full  flex items-center mt-4  lg:mt-10 lg:bottom-10'>
                        <div className='lg:h-[600px] lg:w-[420px] w-[330px] h-[550px] lg:mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-md rounded-[20px]' style={{
                            boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
                        }}>

                            <div>
                                <img src={b4} />
                            </div>

                            <div className='p-4 mx-4 lg:text-[14px] font-poppins text-[14px] font-semibold text-center'>
                                <h1>You can add the profile of your Caregiver by clicking on the Add profile button.</h1>
                            </div>

                            <div className='h-[60%] w-[100%] px-[10%] mt-10  flex justify-between  flex-wrap relative'>

                                <div className='w-[45%] h-[40%] bg-[#FEE5EA] rounded-3xl flex flex-col justify-center items-center ' style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)' }}>
                                    <h1 className='font-semibold text-lg'>Sierra</h1>
                                    <p className='text-sm'>Fighter</p>
                                    <div className='absolute -top-5 rounded-full overflow-hidden bg-white w-[15%] h-[] '>
                                        <img src={account} className='p-1 rounded-full' />
                                    </div>
                                </div>

                                <div className='w-[45%] h-[40%] bg-[#FEE5EA] rounded-3xl flex flex-col justify-center items-center ' style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)' }} >
                                    <div onClick={creatPin} className='w-[45%] h-[100%]'>
                                        <div className='h-full  rounded-3xl flex flex-col justify-center items-center ' >
                                            <h1 className='font-semibold text-lg'><IoAddCircleOutline /></h1>
                                            <p className='text-sm text-center'>Add Profile</p>
                                        </div>
                                    </div>
                                </div>

                                
                                <Link to={'/home'} className='w-[50%] ml-[25%] '>
                                    <div className='bg-[#EFC319] text-center p-3 rounded-lg text-white'>Finish!</div>
                                </Link>
                                
                                


                            </div>

                            

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default ShowProfile