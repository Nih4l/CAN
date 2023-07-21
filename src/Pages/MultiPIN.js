import React, { useRef, useState } from 'react';
import LogoCAn from '../Photos/LogoCAn.png';
import CANa from '../Photos/CANa.png';
import Video from '../Photos/Video.png';
import CarouselMain from '../Components/CarouselMain';
import { Link } from 'react-router-dom';
import SelfCare from '../Photos/SelfCare.png'
import vibird1 from '../Photos/vibird1.gif'
import PinInput from 'react-pin-input'

const MultiPIN = () => {

    const [pin, setPin] = useState('');
    const [repin, setRepin] = useState('');
    const [error, setError] = useState('');

    const SetLoginPin = () => {
        const userValue = JSON.parse(localStorage.getItem('userValue')) || {};
        userValue.profile_pin = pin
        userValue.profile_pin = repin
        localStorage.setItem('userValue', JSON.stringify(userValue));
        console.log(userValue)
    }



    const handlePinChange = (value) => {
        setPin(value);
        console.log('Pin value:', value);
    };


    const handleRepinChange = (value) => {
        setRepin(value);
        console.log('Repin value:', value);

        if (pin === value) {
            setError('Pins are equal');
        } else {
            setError('Pins do not match, Please re-enter the pin correctly!');
        }
    };

    //OTP range
    // const [value, setValue] = useState('');

    // const handleInputChange = (event) => {
    //     const inputValue = event.target.value;
    //     if (/^\d*$/.test(inputValue)) {
    //         setValue(inputValue);
    //     }
    // };
    // //Re Enter OTP range
    // const [value1, setValue1] = useState('');

    // const handleInputChange1 = (event) => {
    //     const inputValue1 = event.target.value;
    //     if (/^\d*$/.test(inputValue1)) {
    //         setValue1(inputValue1);
    //     }
    // };

    return (
        <>

            <div className='lg:ml-[80px] mt-2 lg:absolute flex items-center justify-center  '>
                <img src={LogoCAn} alt='not found' className='w-[80px] h-[80px]' />
                <img src={CANa} alt='not found' className='w-[42.88px] h-[16.19px]  ' />
            </div>
            <div>


                <div className='flex lg:flex-row lg:p-0 p-2 items-center justify-center'>
                    <div className='hidden lg:block w-[55%] mt-20  flex flex-col items-center justify-center '>
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
                    <div className='h-full  flex items-center mt-4  lg:mt-10 lg:bottom-10'>
                        <div className='lg:h-[600px] lg:w-[420px] w-[330px] h-[550px] lg:mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-md rounded-[20px]' style={{
                            boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div>
                                <img src={vibird1} alt='Video' />
                            </div>

                            <div className='text-center lg:text-[30px] text-[24px] font-poppins font-semibold p-1 text-[#EFC319]'>
                                <h1>Create a PIN</h1>
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center '>
                                <p className='lg:text-[18px] text-[14px] font-poppins font-semibold'>Its your space, so add a profile lock to keep
                                </p>
                                <p className='lg:text-[18px] text-[14px] font-poppins font-semibold'>your account information with you</p>
                            </div>

                            <div className=' text-xl py-6 flex flex-row items-end justify-between w-full lg:gap-6 gap-6  lg:pl-3 pl-3 '>

                                {/* <p className='text-sm  font-semibold flex justify-center w-[14%] '>PIN</p> */}

                                {/* <input
                                    type="text"
                                    value={value}
                                    onChange={handleInputChange}
                                    maxlength="4"
                                    placeholder='__  __  __  __'
                                    className='w-[64%] placeholder:text-4xl placeholder:tracking-[0em] bg-transparent tracking-[.50em]  mb-4 outline-none  '
                                    
                                /> */}

                                <label className='font-poppins lg:text-[18px] text-[14px] align-bottom '> PIN </label>
                                <PinInput
                                    length={4}
                                    id='pin'
                                    value={pin}
                                    onComplete={handlePinChange}
                                    inputStyle={{
                                        border: 'none',
                                        borderBottom: '1px solid black',
                                        width: '30px',
                                        textAlign: 'center',
                                        marginRight: '30px',
                                    }}
                                ></PinInput>
                            </div>

                            <div className=' text-xl lg:py-3 lg:gap-6 gap-4  flex items-end justify-between  w-full lg:pl-3 pl-2  '>

                                {/* <p className='text-sm  font-semibold flex justify-center w-[14%] '>Re Enter</p> */}

                                {/* <input
                                    type="text"
                                    value={value1}
                                    onChange={handleInputChange1}
                                    maxlength="4"
                                    placeholder='__  __  __  __'
                                    className='w-[64%] placeholder:text-4xl placeholder:tracking-[0em] bg-transparent tracking-[.50em] mb-4 outline-none'
                                /> */}
                                <label className='font-poppins lg:text-[18px] text-[14px] align-bottom lg:mr-8 '>Re Enter</label>
                                <PinInput
                                    length={4}
                                    id='repin'
                                    value={repin}
                                    onComplete={handleRepinChange}
                                    inputStyle={{
                                        border: 'none',
                                        borderBottom: '1px solid black',
                                        width: '30px',
                                        textAlign: 'center',
                                        marginRight: '30px',
                                    }}
                                ></PinInput>

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

                            {/* <div className='flex justify-center '>
                                {(value.length && value === value1) ?
                                    (<Link to={(value.length && value === value1) ? '/ShowProfile' : ''} className='w-[50%] '>
                                        <h2 className='bg-[#EFC319] text-center p-3 rounded-lg text-white'>Continue</h2>
                                    </Link>)
                                    :
                                    (<div className='w-[50%] '>
                                        <h2 className='bg-[#EFC319] opacity-50 text-center p-3 rounded-lg text-white'>Continue</h2>
                                    </div>

                                    )}
                            </div> */}


                            {error && <p className='text-red-500 text-center'>{error}</p>}
                            
                            <div className='flex flex-col justify-center pt-7'>
                                <button
                                    className={`w-48 h-12 bg-[#efc31a33] font-bold rounded-[20px] text-white items-center mx-auto ${error && error === 'Pins are equal' ? 'bg-[#efc31a]' : 'pointer-events-none'
                                        }`}
                                    disabled={error && error !== 'Pins are equal'}
                                >
                                    <Link to='/ShowProfile' onClick={SetLoginPin}>Continue</Link>
                                </button>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MultiPIN