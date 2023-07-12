import React, { useState } from 'react'
import Logo from '../Photos/Logo.png'
import CAN from '../Photos/CAN.png'
import Video from '../Photos/Video.png'
import { Link } from 'react-router-dom'
import CarouselMain from '../Components/CarouselMain'
import { IoKeyOutline } from 'react-icons/io5'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import Feed from '../Photos/Feed.png'
import SelfCare from '../Photos/SelfCare.png'
import vibird1 from '../Photos/vibird1.gif'


const LoginForm = () => {

    const [eye, setEye] = useState()
    const [eye1, setEye1] = useState()
    const [value, setValue] = useState(false);
    const [Username, setUsername] = useState('')
    //Email input box
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    //see pass
    function seePass() {
        setEye(!eye)
    }
    function seePass1() {
        setEye1(!eye1)
    }

    //final
    const [firstpass, setFirstpass] = useState('')

    function passwordChange(e) {
        setFirstpass(e.target.value)
    }

    const [firstpass1, setFirstpass1] = useState(null)

    function passwordChange1(e) {
        setFirstpass1(e.target.value)
    }

    function changeUsername(e) {
        setUsername(e.target.value)

        const enteredValue = e.target.value;
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

    const Tick = () => {
        setValue(true)
    }

    return (
        <>
            <div className='ml-[80px] mt-2 absolute flex items-center  '>
                <img src={Logo} alt='not found' className='w-[80px] h-[80px]' />
                <img src={CAN} alt='not found' className='w-[42.88px] h-[16.19px] ' />
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
                                <h1 className='text-center text-[36px] font-bold'>Welcome Again</h1>
                                <p className='text-center text-[18px] font-semibold w-[60%]'>CAN is a safe place to share strength, hope, and ask for help.
                                    Lets fight against cancer, together.</p>
                            </div>

                            <div className="flex flex-row items-center gap-4 mt-3">
                                <div className="h-[12px] w-[12px] rounded-full bg-[#EFC319]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
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
                                <img src={vibird1} alt='none'/>
                            </div>
                            <div className='text-center text-[34px] font-semibold p-2 text-[#EFC319]'>
                                <h1>Sign In</h1>
                            </div>

                            <div className=' text-center flex justify-center gap-1'>
                                <p className='text-[18px]'>Don’t Have an account?</p>
                                <p className='text-[#3C37FF] text-[18px]'><Link to={`/Register`}>Sign Up</Link></p>
                            </div>

                            <div className='mt-6 flex flex-col gap-4'>
                                <div className='border-2 h-14 mx-8 m-2 px-2 rounded-xl flex items-center justify-center gap-4'>


                                    <input placeholder='Email/Phone' className='border-none w-full bg-transparent  outline-none p-2 placeholder:font-thin placeholder:text-[18px]'
                                        value={Username} onChange={changeUsername} />
                                    <div className='text-red-400 text-xs w-[50%]'>{error && <p>{error}</p>}</div>
                                </div>
                                <div className='flex items-center gap-4 mx-8 p-4 border-2 rounded-2xl'>
                                    <input placeholder='password'
                                        className='bg-transparent w-full outline-none placeholder:font-thin placeholder:text-[18px]'
                                        type={eye1 ? 'text' : 'password'}
                                        onChange={passwordChange1}
                                        minLength={3}
                                        value={firstpass1}
                                    />
                                    <div onClick={seePass1} className='cursor-pointer'>
                                        {eye1 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                    </div>
                                </div>
                                <div className='flex flex-row items-center justify-between px-9'>
                                    <div className='flex flex-row items-center gap-2'>
                                    <input id="default-checkbox" type="checkbox" value={value} onChange={Tick} className="w-4 h-4   rounded-xl border-[#7E7E7E] cursor-pointer" />
                                        <p className='text-[#7E7E7E] text-[18px] font-thin'>Remember me</p>
                                    </div>
                                    <div>
                                    <Link to='/ForgotPassword'> <p className='text-[#3C37FF] text-[18px] font-normal hover:underline cursor-pointer'>Forgot Password?</p></Link>
                                       
                                    </div>

                                </div>


                            </div>

                            <div className='flex justify-center py-6'>

                                {Username && firstpass1 ?
                                    (<Link to='/AddProfile' className='w-[40%]'>
                                        <h2 className='bg-[#EFC319]  text-center p-3 rounded-lg text-white'>Continue</h2>
                                    </Link>)
                                    :
                                    (
                                        <h2 className='bg-[#EFC319]  text-center opacity-50 p-3 rounded-lg text-white w-[40%]'>Continue</h2>
                                    )
                                }


                                {/* {(firstpass) === (firstpass1) ?
                                    (<Link to='/OldUserLogin' className='w-[40%]'>
                                        <h2 className='bg-[#EFC319]  text-center p-3 rounded-lg text-white'>Continue</h2>
                                    </Link>)
                                    :
                                    (<div className='w-[40%]'>
                                        <h2 className='bg-[#EFC319] opacity-50  text-center p-3 rounded-lg text-white'>Continue</h2>
                                    </div>)
                                } */}
                            </div>



                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}


export default LoginForm