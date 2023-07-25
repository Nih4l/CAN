import React, {useState} from 'react'
import {IoKeyOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import SetPin from '../Components/SetPin';

const ProfileLock = () => {
    const [eye,setEye] = useState(false);
    const [createPin_open, setCreatePin_open] = useState(false); 
    const handlePin = () => {
      setCreatePin_open(!createPin_open)
  };
  return (
    <div className='flex flex-col bg-white px-20 py-6 rounded-[20px] gap-3 w-fit border-[0.5px] border-[#e3e2e2]' style={{boxShadow:'0px 10px 30px 0px rgba(0, 0, 0, 0.05)'}}>
        <p className='font-[500]'>Enter your account password to edit Profie lock for Ananya profile.</p>
        <div className='flex items-center gap-4  px-3 p-2 border-2 rounded-[20px]'>
            <IoKeyOutline />
            <div className='font-bold bg-[#000] h-[35px] w-[1px] inline-block text-[20px]'></div>
            <input placeholder='Enter Your password' 
            className='bg-transparent w-full outline-none'
            type={eye ?  'text' : 'password'}
            minLength={3}
            />
            
        </div>
        <div className='text-[14px] flex justify-end text-[#3C37FF]'>
        <a href="/ForgotPassword">Forgot Password?</a>
        </div>
        <div className='flex flex-row gap-4 justify-end py-4'> 
        <button className='border-2 text-[#7E7E7E] rounded-[15px] px-3 py-2'>Cancel</button>
        <button className='bg-[#EFC319] text-white rounded-[15px] px-5 py-2' onClick={handlePin}>Continue</button>
        {createPin_open && (<SetPin createPin_open={createPin_open} handlePin={handlePin}/>)
    }
        </div>
    </div>
   
  )
}

export default ProfileLock