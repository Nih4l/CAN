import React, { useState } from 'react'
import Logo from '../Photos/Logo.png'
import CAN from '../Photos/CAN.png'
import vibird1 from '../Photos/vibird1.gif'
import { AiOutlineMail } from 'react-icons/ai'
import { BsGenderAmbiguous } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { SlCalender } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import CarouselMain from '../Components/CarouselMain'
import c4 from '../Photos/c4.png'
import PageImg from '../Photos/p8.png'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const LoginDetails = () => {

    //Email input box



    //before continue
    const [Username, setUsername] = useState('')
    const [gender, setgender] = useState('')
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (e) => {
        // Handle the selected value here
        setgender(e.target.value);
    };


    function changeUsername(e) {
        setUsername(e.target.value)
    }

    function handleGenderChange(e) {
        setgender(e.target.value)
    }

    function handledobChange(e) {
        setStartDate(e.target.value)
    }


    return (

        <>

            <div className='ml-[80px] mt-2 absolute flex items-center '>
                <img src={Logo} alt='not found' className='w-[80px] h-[80px]' />
                <img src={CAN} alt='not found' className='w-[42.88px] h-[16.19px]  ' />
            </div>



            <div className=' '>



                <div className='flex '>
                    <div className='w-[55%] mt-16  flex flex-col items-center justify-center'>

                        <div className='flex flex-col items-center justify-center gap-2'>
                            {/* <img src={WelcomeScreen} className='' /> */}
                            <div className='w-[60%] -mt-20'>
                                {/* <CarouselMain /> */}
                                <img src={PageImg} alt='none' />
                            </div>

                            <div className=' flex flex-col items-center justify-center gap-1 -mt-10'>
                                <h1 className='text-center text-[36px] font-bold'>You are not alone</h1>
                                <p className='text-center text-[18px] font-semibold w-[60%]'>Join and host meeting to share relate and listen to experiences.
                                    Add people you connect with to your support group to
                                    chat, call, and spend time with..</p>
                            </div>

                            <div className="flex flex-row items-center gap-4 mt-4">
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#EFC319]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                            </div>
                        </div>
                    </div>


                    {/* right side */}
                    <div className='h-full  flex items-center mt-10 bottom-10'>
                        <div className='h-[90vh] w-[60vh]  mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-md rounded-[20px] ' style={{
                            boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
                        }}>

                            <div>
                                <img src={vibird1} />
                            </div>

                            <div className='text-center text-[34px] font-semibold p-2 text-[#EFC319]'>
                                <h1>Your Details</h1>
                            </div>

                            <div className='border-2 h-14 mx-8 my-4 px-2 rounded-[20px] flex items-center justify-center gap-4'>
                                <h1 className='font-bold flex items-center w-max h-full px-2'><VscAccount /></h1>
                                <div className='font-bold bg-[#000] h-[35px] w-[1px] inline-block text-[20px]'></div>
                                <input placeholder='Enter full name' className='border-none w-full bg-transparent placeholder:p-2 outline-none'
                                    value={Username} onChange={changeUsername} />
                            </div>

                            <div className='border-2 h-14 mx-8 m-2 px-2 rounded-[20px] flex items-center gap-4'>
                                <h1 className='font-bold flex items-center w-max h-full px-2'><BsGenderAmbiguous /></h1>
                                <div className='font-bold bg-[#000] h-[35px] w-[1px] inline-block text-[20px]'></div>
                                {/* <label htmlFor="gender" className="mr-2">
                                        Gender:
                                    </label> */}
                                <select
                                    value={gender}
                                    id="gender"
                                    name="gender"
                                    onChange={handleChange}
                                    className="px-4 py-2 w-full  rounded-md focus:outline-none focus:none bg-transparent "
                                >
                                    <option className='text-[#7E7E7E]' value="default">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                {/* <Select options={options} className='w-full bg-transparent placeholder:p-2 outline-none bg-slate-200 ' defaultInputValue='Gender' /> */}
                            </div>

                            <div className='border-2 h-14 mx-8 my-4 px-2 rounded-[20px] flex items-center gap-4'>
                                <h1 className='font-bold flex items-center w-max h-full px-2'><SlCalender /></h1>
                                <div className='font-bold bg-[#000] h-[35px] w-[1px] inline-block text-[20px]'></div>
                                {/* <input placeholder='Date of Birth' className='border-none w-full bg-transparent placeholder:p-2 outline-none'
                                    value={dob}
                                    onChange={handledobChange} /> */}
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    isClearable
                                    placeholderText="Date of Birth"
                                    className='outline-none'
                                />
                            </div>

                            <div className='flex justify-center py-2'>
                                {Username && gender && startDate ?
                                    (<Link to='/loginimage' className='w-[56%]'>
                                        <h2 className='bg-[#EFC319]  text-center p-3 rounded-xl text-white'>Continue</h2>
                                    </Link>)
                                    :
                                    (<div className='w-[56%]'>
                                        <h2 className='bg-[#EFC319] opacity-50 text-center p-3 rounded-xl text-white'>Continue</h2>
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

export default LoginDetails