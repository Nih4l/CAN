import React, { useRef, useState } from 'react'
import HomeNav from '../Components/HomeNav'
import CalenderRecords from '../Components/CalenderRecords'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import {AiOutlineFilePdf} from 'react-icons/ai'
import {TfiClipboard} from 'react-icons/tfi'
import SideMenu from '../Components/SideMenu'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import AppointmentPopup from '../Components/AppointmentPopup'
const Appointment1 = () => {

    //pop up
    const [pop, setPop] = useState(false)

    function PopUp() {
        setPop(!pop)
    }

    const [isClicked, setIsClicked]=useState(true)
    const handleIsClicked=()=>{
        setIsClicked(!isClicked);
    }

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

  const appointmentName = queryParams.get('appointmentName');
  const doctorName = queryParams.get('doctorName');
  const hospitalName = queryParams.get('hospitalName');
  const hospitalAddress = queryParams.get('hospitalAddress');
  const appointmentDate = queryParams.get('appointmentDate');
  const appointmentTime = queryParams.get('appointmentTime');
  const appointmentNote = queryParams.get('appointmentNote');
    
  const [notePop,setNotePop] =useState(false);
  const handleNotePopUp=()=>{
    setNotePop(!notePop);
  }

    return (
        <>
            <div className='h-[100%] flex flex-row'>
            <div className='[h-100%]'>
                <SideMenu/>
            </div>
            <div className=' w-full'>
                <div>
                    <HomeNav />
                </div>

                <div className='flex'>
                    {/* background */}
                    <div className='bg-[#FEF8FD] w-full flex flex-row'>


                        <div className='flex flex-col w-[90%] mx-[5%]'>

                            <div className=' ml-8 mt-6 flex justify-between m-4 flex-nowrap'>
                                <div className='flex gap-8 w-[50%]'>
                                <button className={`text-lg font-semibold py-2 px-6 rounded-[20px] w-fit text-center'  ${isClicked ? 'bg-white shadow-lg' : 'bg-[#ffffff7b] shadow-sm'} `} onClick={handleIsClicked}>Appointments</button>                   
                                <button className={`text-lg font-semibold py-2 px-10 shadow-lg rounded-[20px] w-fit text-center ${isClicked ? 'bg-white shadow-lg' : 'bg-[#ffffff7b] shadow-sm'}`} onClick={handleIsClicked}> Medicine</button>
                                </div>
                                <button className='text-lg font-semibold bg-[#F2CF47] text-white py-2 px-6 shadow-lg rounded-[20px] w-fit text-center' onClick={PopUp}>
                                    
                                    
                                    Add Appointments
                                    
                                </button>
                               {/* pop up */} 
               {pop && ( <AppointmentPopup /> )}
                               
                            </div>

                            <div className='bg-white h-[80vh] ml-8 mt-2 rounded-2xl shadow-xl flex flex-col items-center px-8' >

                                <div className='my-6'>
                                    <CalenderRecords />
                                </div>

                                <div className='bg-[#FEF8FD] h-[70%] w-full rounded-[24px] p-6 flex flex-col gap-3 overflow-y-visible'>

                                    <h1 className='font-semibold'>
                                        Today's Appointment
                                    </h1>

                                    <div className='h-fit w-[100%] justify-around bg-white border-gray-200 border-2 rounded-[16px] text-left py-4 px-4'>

                                        <div className='flex flex-row items-start h-full w-full gap-3 overflow-y-auto '>
                                          <div className='flex flex-row w-[80%] gap-3'>
                                            <div className='flex flex-col self-center items-center '>
                                                <h1 className='font-semibold whitespace-nowrap text-[18px]'>{appointmentDate}</h1>
                                                <h1 className='text-[#7E7E77]'>{appointmentTime}</h1>
                                            </div>
                                            <div className="h-16 w-[1px] bg-[#C4C4C4]"></div>
                                            <div className='flex flex-col items-start text-left px-4 gap-2 '>
                                                <div className=' whitespace-nowrap text-[13px] font-semibold text-[#7E7E77]'>Appointment name</div>
                                                <div className=' font-semibold text-[15px] '>{appointmentName}</div>
                                            </div>

                                            <div className="h-16 w-[1px] bg-[#C4C4C4]"></div>

                                            <div className='flex flex-col text-left px-4 gap-2 '>
                                            <div className=' whitespace-nowrap text-[13px] font-semibold text-[#7E7E77]'>Doctor's name</div>
                                                <div className='font-semibold text-[15px] '>{doctorName}</div>
                                            </div>

                                            <div className="h-16 w-[1px] bg-[#C4C4C4]"></div>

                                            <div className='flex flex-col text-left px-4 gap-2 '>
                                            <div className='whitespace-nowrap text-[13px] font-semibold text-[#7E7E77]'>Hospital's name</div>
                                                <div className='font-semibold text-[15px] '>{hospitalName}</div>
                                            </div>

                                            <div className="h-16 w-[1px] bg-[#C4C4C4]"></div>

                                            <div className=' flex flex-col text-left px-4 gap-2 max-w-[250px]'>
                                            <div className='whitespace-nowrap text-[13px] font-semibold text-[#7E7E77]'>Hospital's address</div>
                                                <div className='font-semibold text-[15px] text-left  '>{hospitalAddress}</div>
                                            </div>

                                            <div className="h-16 w-[1px] bg-[#C4C4C4]"></div>
                                            </div>
                                            <div className='flex flex-row w-[20%] self-center justify-end'>
                                            <div className='flex flex-row gap-4 px-4 '>
                                               
                                                <div className='bg-[#c31a7f38] p-2 rounded-[12px] cursor-pointer'>
                                                    <TfiClipboard onClick={handleNotePopUp}/>
                                            {notePop && (
                                                <div className='absolute' onClick={handleNotePopUp}>
                                                <div className={`relative -left-24 min-w-[100px] flex flex-col p-2 items-start text-left bg-white shadow-md rounded-[15px] `}>
                                                <h4 className='text-[#7E7E77]'>Note</h4>
                                                <p>{appointmentNote}</p>
                                                </div>
                                                </div>
                                            )}
                                                </div>
                                                <div className='bg-[#c31a7f38] p-2 rounded-[12px] cursor-pointer'>
                                                    <AiOutlineFilePdf />
                                                </div>
                                                <div className='bg-[#c31a7f38] p-2 rounded-[12px] cursor-pointer'>
                                                    <MdOutlineModeEditOutline />
                                                </div>
                                                
                                            </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Appointment1