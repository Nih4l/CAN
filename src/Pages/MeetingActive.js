import React from 'react'
import video from '../Photos/MoreIcons/video.png'
import videocall1 from '../Photos/videocall1.png'
import emotions from '../Photos/MoreIcons/emotions.png'
import microphone from '../Photos/MoreIcons/microphone.png'
import hand from '../Photos/MoreIcons/hand.png'
import sharescreen from '../Photos/MoreIcons/sharescreen.png' 
import call from '../Photos/MoreIcons/call.png'
import profile from '../Photos/MoreIcons/profile.png'
import message from '../Photos/MoreIcons/message.png'
import videocall2 from '../Photos/videocall2.png'

const MeetingActive = () => {
    const imageSources = [videocall1, videocall2, videocall1, videocall2,videocall1, videocall2 ]; // Add more image sources to this array

  return (
    <>
    {/* video call screen */}
    <div className='flex flex-col w-full px-10 h-screen bg-[#FFF6FB]'>
        {/* top title bar */}
        <div className='flex flex-row justify-between'>
            {/* title space */}
            <div>
                <h2 className="text-pink-600 text-start text-[14px] font-medium tracking-wide ">Team CAN</h2>
                 <h2 className="text-black text-[16px] font-medium tracking-wide">
    agenda, about it, meeting descrip agenda,</h2>
                 <p   className="text-gray-500 text-start text-[12px] font-medium tracking-wide ">Cancer Fighter</p>
            </div>
        
        {/* live recorder space */}
        <div className=''>

        </div>
        </div>
    <div className='flex flex-row '>
        {/* speaker screen */}
        <div className='p-4 rounded-[20px] w-1/2'><img src={videocall1} className='rounded-[20px]'  style={{ boxShadow: '0px 5px 30px 0px rgba(0, 0, 0, 0.05)' }}/></div>
        {/* other participants screen */}
        <div className='flex flex-col w-1/2'>
            {/* individual participant screen */}
            <div className="flex w-full justify-start p-4">
      {imageSources.map((src, index) => (
        <div className=" w-1/2 px-4  nowrap" key={index} >
          <img src={src} alt={`Video Call ${index + 1}`} className="rounded-[20px]" style={{ boxShadow: '0px 5px 30px 0px rgba(0, 0, 0, 0.05)' }} />
        </div>
      ))}
    </div>
            {/* <div className='flex flex-row w-full p-4'>
                <div className='flex w-1/2 p-4 '>
                <img src={videocall2} className="rounded-[20px]" style={{ boxShadow: '0px 5px 30px 0px rgba(0, 0, 0, 0.05)' }} alt="Video Call"/>                
                </div>
                <div className='flex w-1/2 p-4'>
                <img src={videocall2} className='rounded-[20px]'  style={{ boxShadow: '0px 5px 30px 0px rgba(0, 0, 0, 0.05)' }}/>
                </div>
            </div> */}
            <div className='flex flex-row w-full p-4'>
                <div className='flex w-1/2 p-4'>
                <img src={videocall2} className='rounded-[20px]'  style={{ boxShadow: '0px 5px 30px 0px rgba(0, 0, 0, 0.05)' }}/>
                </div>
                <div className='flex w-1/2 p-4'>
                <img src={videocall2} className='rounded-[20px]'  style={{ boxShadow: '0px 5px 30px 0px rgba(0, 0, 0, 0.05)' }}/>
                </div>
            </div>
        </div>
        </div>
        <div className='flex flex-row justify-between px-4'>
        <div className='flex flex-row gap-4'>
        <button className='flex justify-center items-center p-2 bg-[#00000020] w-[50px] h-[50px] rounded-[20px] hover:bg-[#EFC319] hover:shadow-lg '><img src={microphone}/></button>
        <button className='flex justify-center items-center p-2 bg-[#00000020] w-[50px] h-[50px] rounded-[20px] hover:bg-[#EFC319] hover:shadow-lg'><img src={video}/></button>
        <button className='flex justify-center items-center p-2 bg-[#00000020] w-[50px] h-[50px] rounded-[20px] hover:bg-[#EFC319] hover:shadow-lg'><img src={sharescreen}/></button>
        <button className='flex justify-center items-center p-2 bg-[#00000020] w-[50px] h-[50px] rounded-[20px] hover:bg-[#EFC319] hover:shadow-lg'><img src={hand}/></button>
        <button className='flex justify-center items-center p-2 bg-[#00000020] w-[50px] h-[50px] rounded-[20px] hover:bg-[#EFC319] hover:shadow-lg'><img src={emotions}/></button>
        <button className='flex justify-center items-center p-2 bg-[#00000020] w-[50px] h-[50px] rounded-[20px]  hover:shadow-lg bg-[#EA4335]'><img src={call}/></button>
        </div>
        <div className='flex flex-row gap-4'>
        <button className='flex justify-center items-center p-2 bg-[#00000020] w-[50px] h-[50px] rounded-[20px] hover:bg-[#EFC319] hover:shadow-lg'><img src={profile}/></button>
        <button className='flex justify-center items-center p-2 bg-[#00000020] w-[50px] h-[50px] rounded-[20px] hover:bg-[#EFC319] hover:shadow-lg'><img src={message}/></button>
        </div>
    </div>
    </div>
    
    </>
  )
}

export default MeetingActive