import React, { useRef, useState } from 'react'
import HomeNav from '../Components/HomeNav'
import { Link } from 'react-router-dom'
import Appoint from '../Photos/Appoint.png'
import { IoCloseCircleSharp } from 'react-icons/io5'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { MdOutlineCloudUpload } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import SideMenu from '../Components/SideMenu'
import { BiCalendarAlt } from 'react-icons/bi'

const HealthCard = () => {

    //pop up
    const [pop, setPop] = useState(false)

    function PopUp() {
        setPop(!pop)
    }

    //PDF
    const [PDF, setPDF] = useState()

    const hiddenChoosePDF = useRef()

    function handlePDFUpload(event) {
        const file = event.target.files[0];
        if (file.type === 'application/pdf') {
            setPDF(file);
        } else {
            console.log('Invalid file type');
        }
        setPDFname(file.name)
    }

    function uploadPDF() {
        hiddenChoosePDF.current.click()
    }

    const [PDFname, setPDFname] = useState("");

    function closeUploadPDF() {
        setPDF(!PDF)
    }

    return (
        <>

            <div className='flex flex-row min-h-screen h-[100%] bg-[#FEF8FD] '>
            
            <div className='sticky flex flex-row'><SideMenu/></div>
            <div className=' flex flex-col items-center w-screen'>
                <div className='bg-white w-full '>
                    <HomeNav />
                </div>
                <div className='bg-[#FEF8FD] w-full flex flex-col items-center '>
                
                
                    {/* background */}
                   
                        <div className='flex flex-col w-[90%] mx-[5%] justify-center'>
                            <h1 className=' my-6 text-lg font-semibold self-start'>Appointments</h1>
                            <div className='bg-white  rounded-[16px] flex flex-col items-center gap-8 justify-center py-[100px]' >
                                <div>
                                    <img src={Appoint} alt='Health_Record.jpg' />
                                </div>
                                <div className='w-[30%]  text-center'>
                                   <p className=' text-[16px] text-[#696969]'>Add your Appointment and there timing here
                                    so we can help you talking them on time.</p> 
                                </div>
                                <Link to=''>
                                    <div className=' bg-[#F2CF47] text-white px-4 py-2 rounded-[20px]' onClick={PopUp}>
                                        Add Appointments
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                    </div>
                    </div>
               
                
                
                


            {/* pop up */}
            {pop && (
                <div
                    className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
                    style={{ backdropFilter: 'blur(2px)' }}>

                    <div className='w-[40%] h-[83%] bg-white rounded-[24px] flex flex-col justify-center px-5 relative'>

                        <div className='flex items-center justify-center font-semibold'>
                            <h1 className='text-lg'>Add Appointment</h1>
                            <div className='absolute right-[8%] cursor-pointer' onClick={PopUp}  >
                                <RxCross1 />
                            </div>
                        </div>

                        <div className='h-[80%] w-[100%] flex flex-col items-center'>
                            <div className='w-[90%] h-[50%] mt-[3%] border-dotted rounded-lg border-2 border-gray-300 flex flex-col justify-center items-center'>
                                {!PDF && (<>
                                    <div className='text-[12px] text-[#7E7E7E] pr-10 py-2 w-full'>

                                        <p className='w-full text-right italic'>Max File Size: 3 MB</p>
                                    </div>
                                    <div className='flex flex-col items-center mb-4'>
                                        <MdOutlineCloudUpload size={50} color='#7E7E7E' />
                                        <h1>Drag and drop or</h1>
                                        <h1 className='text-[#3F75F3] font-semibold' onClick={uploadPDF}>Browse</h1>
                                        <p className='text-sm w-[100%] text-center text-[#7E7E7E]'>Add Appointment Letter</p>
                                    </div>
                                </>)}

                                {PDF && (
                                    <div className='relative flex items-center justify-center h-full w-full     '>
                                        <div className='flex items-center gap-2'>
                                            <BsFileEarmarkPdf size={30} />
                                            <p className='font-semibold text-xl'>{PDFname}</p>
                                            {/* <embed src={URL.createObjectURL(PDF)} className='h-[38%]' type='application/pdf' />    actual PDF */}

                                        </div>

                                        <button className='absolute top-5 right-5' onClick={closeUploadPDF} >
                                            <IoCloseCircleSharp color='black' />
                                        </button>
                                    </div>
                                )}

                                <input
                                    type='file'
                                    accept='application/pdf'
                                    ref={hiddenChoosePDF}
                                    style={{ display: 'none' }}
                                    onChange={handlePDFUpload}
                                />
                            </div>

                            <form className='flex flex-wrap justify-between mx-[4%] mt-4'>
                            <div className='flex py-3 gap-6 w-full'>
                                <input type='text' placeholder='Appointment name' className='border-2  p-2 rounded-[12px] w-1/2' />
                                 <input type='text' placeholder="Doctor's name" className='border-2  p-2 rounded-[12px] w-1/2' />
                            </div>
                            <div className='flex py-3 gap-6 w-full'>
                                 <input type='text' placeholder="Hospital's name" className='border-2  p-2 rounded-[12px] w-1/2'/>
                                 <input type='text' placeholder="Hospital's address" className='border-2  p-2 rounded-[12px] w-1/2' />
                            </div>
                            <div className='flex py-3 gap-6 w-full'>
                             <input placeholder='DD/MM/YYYY' className='border-2 p-2 w-1/2 rounded-[12px] ' onFocus={(e) => { e.target.type = 'date'; }}/>
  
                             <input placeholder='Time' type='text' onFocus={(e) => {e.target.type = 'time';}}className='border-2 p-2 rounded-[12px] w-1/2' />
                            </div>
                            
                                 <input type='text' placeholder='Add note' className='border-2 my-3 p-2 rounded-[12px] w-full' />

                            </form>

                            <div className='flex gap-4 mb-3 mt-3 w-full justify-end px-8'>
                                <button className='border-2  py-1 w-[15%] border-[#7E7E7E] text-center rounded-[12px]' onClick={PopUp}>
                                    Cancel
                                </button>
                                <button className='bg-[#F2CF47]  py-1 w-[15%] text-white text-center rounded-[12px]'><Link to='/Appointment1'>
                                    Save
                                    </Link></button>
                            </div>

                        </div>


                    </div>
             </div>
            )}

        </>
    )
}

export default HealthCard