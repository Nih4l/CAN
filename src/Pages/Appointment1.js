import React, { useRef, useState } from 'react'
import HomeNav from '../Components/HomeNav'
import CalenderRecords from '../Components/CalenderRecords'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import {AiOutlineFilePdf} from 'react-icons/ai'
import {TfiClipboard} from 'react-icons/tfi'

const Appointment1 = () => {

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
            <div className=' h-[100%]'>

                <div>
                    <HomeNav />
                </div>

                <div className='flex'>
                    {/* background */}
                    <div className='bg-[#FEF8FD] h-[100vh] w-full flex flex-row'>


                        <div className='flex flex-col w-[90%] mx-[5%]'>

                            <div className='ml-[8%] mt-6 flex justify-between m-4'>
                                <div className='flex gap-8 w-[50%]'>
                                    <h1 className='text-lg font-semibold bg-white p-2 shadow-lg rounded-3xl w-[30%] text-center'>Appointment</h1>
                                    <h1 className='text-lg font-semibold bg-[#ffffff7b] p-2 shadow-sm rounded-3xl w-[30%] text-center'>Medicine</h1>
                                </div>
                                <div className='text-lg font-semibold bg-[#F2CF47] text-white p-2 shadow-lg rounded-3xl w-[15%] text-center'>
                                    Add Appointment
                                </div>
                            </div>

                            <div className='bg-white h-[80vh] ml-[8%] mt-2 rounded-2xl shadow-xl flex flex-col items-center' >

                                <div className='my-6'>
                                    <CalenderRecords />
                                </div>

                                <div className='bg-[#FEF8FD] h-[70%] w-[90%] rounded-3xl p-6 flex flex-col gap-3 '>

                                    <h1 className='font-semibold'>
                                        Today's Appointment
                                    </h1>

                                    <div className='h-[25%] w-[100%] bg-white border-gray-200 border-2 rounded-2xl'>

                                        <div className='flex flex-row items-center justify-between h-full w-full px-4'>
                                            <div className='flex flex-col items-center justify-center h-full w-max'>
                                                <h1 className='font-semibold text-lg'>02 June 2023</h1>
                                                <h1 className='text-[#7E7E77]'>09:00 AM</h1>
                                            </div>

                                            <div className='text-4xl font-thin text-[#C4C4C4]'>
                                                |
                                            </div>

                                            <div>
                                                <div className='text-[#7E7E77]'>Appointment name</div>
                                                <div className='font-semibold text-lg'>Regular Checkup</div>
                                            </div>

                                            <div className='text-4xl font-thin text-[#C4C4C4]'>
                                                |
                                            </div>

                                            <div className='text-center'>
                                                <div className='text-[#7E7E77]'>Doctor's name</div>
                                                <div className='font-semibold text-lg'>Regular Checkup</div>
                                            </div>

                                            <div className='text-4xl font-thin text-[#C4C4C4]'>
                                                |
                                            </div>

                                            <div className='text-center'>
                                                <div className='text-[#7E7E77]'>Hospital's name</div>
                                                <div className='font-semibold text-lg'>KDA hospital</div>
                                            </div>

                                            <div className='text-4xl font-thin text-[#C4C4C4]'>
                                                |
                                            </div>

                                            <div className='text-center  w-[25%]'>
                                                <div className='text-[#7E7E77]'>Hospital's address</div>
                                                <div className='font-semibold text-lg flex flex-wrap'>4 bunglow road Andheri West Mumbai-400053</div>
                                            </div>

                                            <div className='text-4xl font-thin text-[#C4C4C4]'>
                                                |
                                            </div>

                                            <div className='flex gap-4'>
                                                <div className='bg-[#c31a7f38] p-2 rounded-xl'>
                                                    <TfiClipboard />
                                                </div>
                                                <div className='bg-[#c31a7f38] p-2 rounded-xl'>
                                                    <AiOutlineFilePdf />
                                                </div>
                                                <div className='bg-[#c31a7f38] p-2 rounded-xl'>
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
        </>
    )
}

export default Appointment1