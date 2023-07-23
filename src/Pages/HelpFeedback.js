import React, {useState} from 'react'
import Page from '../Layouts/Pages'
import { CiSearch } from 'react-icons/ci'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TiLocation } from 'react-icons/ti'
import { BsTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaRegSmile, FaRegFrown, FaRegMeh, FaRegLaughBeam } from 'react-icons/fa';



const HelpFeedback = () => {
    
    const [showAns, setShowAns] = useState([]);
    const [rotateArrow, setRotateArrow] = useState([]);
  
    const handleShowAns = (index) => {
      setShowAns((prevShowAns) => {
        const updatedShowAns = [...prevShowAns];
        updatedShowAns[index] = !updatedShowAns[index];
        return updatedShowAns;
      });
    };
  
    const handleRotateArrow = (index) => {
      setRotateArrow((prevRotateArrow) => {
        const updatedRotateArrow = [...prevRotateArrow];
        updatedRotateArrow[index] = !updatedRotateArrow[index];
        return updatedRotateArrow;
      });
    };
 
    const questionsAndAnswers = [
        {
          question: 'How to join a meeting?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus eu tristique finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus eu tristique finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus eu tristique finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus eu tristique finibus.',
        },
        // Add more question-answer pairs here as needed
        {
            question: 'How to save posts in feeds?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus eu tristique finibus. Lorem ipsum dolor sit amet,'
        },
        {
            question:'How to add my Medicine or Appointment for Reminder?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus eu tristique finibus'

        },
        {
            question:'How to add my all health records?',
            answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus eu tristique finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus eu tristique finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus eu tristique finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus eu tristique finibus.',
        },
      ];
  return (
    <Page pageContent={(
        <>
        {/* screen  */}
            <div className='flex flex-row bg-[#FEF8FD] h-full px-20 gap-20'>
                {/* 2 column divide  */}
                {/* Help/Feedback */}
                <div className='flex flex-col w-4/5'> 
                {/* title */}
                <div className='flex flex-row justify-between py-10'>
                  <div> <h1 className='text-[40px] font-[500] text-[#212B27]'>Help/ Feedback</h1> </div> 
                    <div className=" flex flex-row relative align-middle outline-none rounded-[20px] h-9 py-2 px-8 bg-white">
                    <CiSearch className="text-[20px] font-[300] left-1 absolute " />
                        <input placeholder="Search"  className=" placeholder:text-[14px] placeholder:font-semibold align-top outline-none " />
                    </div>
                </div>
                {/* questions block */}
                <div className='flex flex-col gap-2'>
                {/* mapping question and answer blocks */}
      {questionsAndAnswers.map((qa, index) => (
        <div
          key={index}
          className="flex flex-col px-10 py-6 bg-white rounded-[20px] border-[0.5px] border-[#e6e5e5]"
          style={{ boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.05)' }}
        >
          <div className="flex flex-row justify-between py-4">
            <div className="font-[500] text-[18px] text-[#444]">
              Q{index + 1}. &nbsp; &nbsp; &nbsp; &nbsp; {qa.question}
            </div>
            <div
              className={`flex items-center font-[500] text-[26px] cursor-pointer ${
                rotateArrow[index] ? 'transition-all rotate-180 ease-in-out duration-300' : ''
              }`}
              onClick={() => {
                handleShowAns(index);
                handleRotateArrow(index);
              }}
            >
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div
            className={`flex flex-row ${
              showAns[index] ? ' transform transition-transform ease-in-out duration-300 visible' : ' hidden'
            }  `}
          >
            <div className="flex flex-col">
              <p className="py-4">
                <hr />
              </p>
              <div className="flex flex-row gap-9 py-4 text-[#9a9a9a] ">
                Ans.
                <p className="">{qa.answer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
                </div>
                </div>
                {/* Column 2 */}
                <div className='flex flex-col justify-center gap-6 w-1/5'>
                    {/* Contact us card */}
                    <div className='flex flex-col rounded-[25px] text-[14px] gap-3 px-8 py-4 text-center justify-center bg-white' style={{boxShadow:'0px 10px 30px 0px rgba(0, 0, 0, 0.05)'}}>
                        <h1 className='font-[600] text-[25px] leading-10'>Contact Us</h1>
                        <p className='text-[#555555]'>Reaching us is easy! Let us know your queries.</p>
                        <p className='text-[#555555]'>We would love to hear from you!</p>
                        <div className='flex flex-row gap-4 text-[#555555]'><GrMail size={16} className='text-[#C4C4C4]'/><a href="" className=' underline'>support@carebynd.com</a></div>
                        <div className='flex flex-row gap-4 text-[#555555]'><BsTelephoneFill size={16} className='text-[#C4C4C4]'/>281-430-2345</div>
                        <div className='flex flex-row gap-4 text-[#555555]'><TiLocation size={16} className='text-[#C4C4C4]'/>A47, Lorem ipsum dummy, State, Country-01001</div>
                    </div>

                    <div className='flex flex-col rounded-[25px] text-[14px] gap-3 px-12 py-4 text-center text-[#555555] justify-center bg-white' style={{boxShadow:'0px 10px 30px 0px rgba(0, 0, 0, 0.05)'}}>
                        <h2 className='font-[600] text-[18px]'>Give us feedback</h2>
                        <p>What do you think about this CAN?</p>
                        <hr/>
                        <div className="flex flex-row items-center justify-evenly gap-4 py-6 cursor-pointer">
                        <FaRegSmile size={25} id=''/>
                        <FaRegFrown size={25} id=''/>
                        <FaRegMeh size={25} id=''/>
                        <FaRegLaughBeam size={25} id=''/>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )}/>

  )
}

export default HelpFeedback
