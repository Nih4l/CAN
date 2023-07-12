import React, { useState } from 'react';
import Logo from '../Photos/Logo.png';
import CAN from '../Photos/CAN.png';
import Roles_Fighter from '../Photos/Roles_Fighter.png';
import Roles_Caregiver from '../Photos/Roles_Caregiver.png';
import Roles_Veteran from '../Photos/Roles_Veteran.png';
import Video from '../Photos/Video.png';
import CarouselMain from '../Components/CarouselMain';
import { Link } from 'react-router-dom';
import MeetPeople from '../Photos/MeetPeople.png';
import { CiCircleInfo } from 'react-icons/ci';
import vibird1 from '../Photos/vibird1.gif'
import {BsDot} from 'react-icons/bs'

const ChooseTitle = () => {
  const [select, setSelect] = useState('');

  function selectedOption(value) {
    setSelect(value);
  }

  return (
    <>
      {/* <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 '
        style={{ backdropFilter: 'blur(2px)' }}>

        <div className='bg-white h-[340px] w-[450px] rounded-3xl'>
        <div className='p-6'>
          <div className='flex flex-wrap items-center justify-center '>
          <BsDot />
            <h1>Fighter:</h1>
            <p className=''>Embrace your inner superhero and join a</p>
            <p className=''>league of warriors ready to face cancer head-on</p>
            <p className=''>with strength and determination.</p>
            <p className='mb-4'>___________________________________________________</p>
          </div>
          
          <div className='flex flex-wrap items-start justify-center'>
          <BsDot className='' />
            <h1 className=''>Caregiver:</h1>
            <p className=''> Step into the role of a compassionate</p>
            <p className=''> guardian, providing unwavering love and support</p>
            <p className=''>to those battling cancer.</p>
            <p className='mb-4'>___________________________________________________</p>
          </div>
          <div className='flex flex-wrap items-start justify-center'>
          <BsDot />
            <h1>Veteran:</h1>
            <p className=''>Share your triumphs and inspire others as a</p>
            <p className=''>seasoned champion who has conquered cancer's</p>
            <p className='mr-24'>challenges.</p> 
          </div>
          </div>
        </div>

      </div> */}

      <div className="ml-[80px] mt-2 absolute flex items-center">
        <img src={Logo} alt="not found" className="w-[80px] h-[80px]" />
        <img src={CAN} alt="not found" className="w-[42.88px] h-[16.19px]" />
      </div>
      <div>
        <div className="flex">
          <div className="w-[55%] mt-14 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div>
                <img src={MeetPeople} className="h-[340px] w-[390px]" alt="none" />
              </div>

              <div className="flex flex-col items-center justify-center mt-3">
                <h1 className="text-center text-[36px] font-bold">You are not alone</h1>
                <p className="text-center text-[18px] font-semibold mt-2">
                  Join and host meeting to share relate and listen to
                </p>
                <p className="text-center text-[18px] font-semibold">experiences.</p>
                <p className="text-center text-[18px] font-semibold">
                  Add people you connect with to your support group to
                </p>
                <p className="text-center text-[18px] font-semibold">chat, call, and spend time with.</p>
              </div>

              <div className="flex flex-row items-center gap-4 mt-7">
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
          <div className="flex items-center h-[100vh]">
            <div
              className="h-[90%] w-[60vh] shadow-xl mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-lg rounded-[20px]"
              style={{
                boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div>
                <img src={vibird1} alt="video" />
              </div>
              <div className="text-center font-semibold text-lg flex pr-5 pl-40 items-center pb-2 justify-between">
                Create a Profile
                <div className="">
                  <CiCircleInfo color="#7E7E7E" className="cursor-pointer" />
                </div>
              </div>

              <div className="w-[100%]">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div
                    className={`flex justify-center cursor-pointer ${select !== '' && select !== 'Fighter' ? 'opacity-50' : ''
                      }`}
                    onClick={() => selectedOption('Fighter')}
                  >
                    <img src={Roles_Fighter} alt="not found" className='w-[90%] relative ' />
                    <div className="absolute top-[31%] left-60 text-white text-xl">
                      <h3 className="font-semibold text-xl">Fighter</h3>
                      <div className="flex flex-col relative">
                        <p className="text-[16px]">I will defeat</p>
                        <p className="text-[16px] absolute top-[70%]">cancer</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex justify-center cursor-pointer ${select !== '' && select !== 'Caregiver' ? 'opacity-50' : ''
                      }`}
                    onClick={() => selectedOption('Caregiver')}
                  >
                    <img src={Roles_Caregiver} alt="not found" className='w-[90%] relative ' />
                    <div className="absolute top-[48%] left-60 text-white text-xl">
                      <h3 className="font-semibold text-xl">Caregiver</h3>
                      <div className="flex flex-col relative">
                        <p className="text-[16px]">I will help fighter</p>
                        <p className="text-[16px] absolute top-[70%]">defeat cancer</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex justify-center cursor-pointer ${select !== '' && select !== 'Veteran' ? 'opacity-50' : ''
                      }`}
                    onClick={() => selectedOption('Veteran')}

                  >
                    <img src={Roles_Veteran} alt="not found" className='w-[90%] relative' />
                    <div className="absolute top-[66%] left-60 text-white text-xl">
                      <h3 className="font-semibold text-xl">Veteran</h3>
                      <div className="flex flex-col relative">
                        <p className="text-[16px]">I have defeated</p>
                        <p className="text-[16px] absolute top-[70%]">cancer</p>
                      </div>
                    </div>
                  </div>

                  {select ? (
                    <Link to="/registerimage" className="w-[50%]">
                      <h2 className="bg-[#EFC319] text-center p-3 rounded-lg text-white">
                        Continue
                      </h2>
                    </Link>
                  ) : (
                    <div className="w-[50%]">
                      <h2 className="bg-[#efc41975] text-center p-3 rounded-lg text-white">
                        Continue
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseTitle;
