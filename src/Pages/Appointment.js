import React, { useRef, useState } from 'react'
import HomeNav from '../Components/HomeNav'
import { Link } from 'react-router-dom'
import Appoint from '../Photos/Appoint.png'
import { IoCloseCircleSharp } from 'react-icons/io5'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { MdOutlineCloudUpload } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'

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
            <div className=' h-[100%]'>

                <div>
                    <HomeNav />
                </div>

                <div className='flex'>
                    {/* background */}
                    <div className='bg-[#FEF8FD] h-[100vh] w-full flex flex-row'>


                        <div className='flex flex-col w-[90%] mx-[5%]'>
                            <h1 className='ml-[8%] mt-6 text-lg font-semibold'>Appointment</h1>
                            <div className='bg-white h-[80vh] ml-[8%] mt-2 rounded-2xl shadow-xl flex flex-col items-center justify-center' >
                                <div>
                                    <img src={Appoint} alt='Health_Record.jpg' />
                                </div>
                                <div className='w-[50%] text-lg text-center mt-3'>
                                    Add your Appointment and there timing here
                                    so we can help you talking them on time.
                                </div>
                                <Link to=''>
                                    <div className='mt-3 bg-[#F2CF47] text-white px-3 py-1 rounded-3xl' onClick={PopUp}>
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

                    <div className='w-[40%] h-[80%] bg-white rounded-3xl flex flex-col justify-center px-5 relative'>

                        <div className='flex items-center justify-center font-semibold'>
                            <h1 className='text-lg'>Add Appointment</h1>
                            <div className='absolute right-[8%]' onClick={PopUp} >
                                <RxCross1 />
                            </div>
                        </div>

                        <div className='h-[80%] w-[100%] flex flex-col items-center'>
                            <div className='w-[90%] h-[50%] mt-[3%] border-dotted rounded-lg border-2 border-gray-300 flex flex-col justify-center items-center'>
                                {!PDF && (<>
                                    <div className='text-sm text-[#7E7E7E] p-2 w-full'>

                                        <p className='w-full text-right'>Max File Size: 3 MB</p>
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
                                <div className='w-[46%] border-2 m-2 p-2 rounded-xl'><input placeholder='Appointment name' className='w-full px-2' /></div>
                                <div className='w-[46%] border-2 m-2 p-2 rounded-xl'><input placeholder="Doctor's name" className='w-full px-2' /></div>
                                <div className='w-[46%] border-2 m-2 p-2 rounded-xl'><input placeholder="Hospital's name" className='w-full px-2' /></div>
                                <div className='w-[46%] border-2 m-2 p-2 rounded-xl'><input placeholder="Hospital's address" className='w-full px-2' /></div>
                                <div className='w-[46%] border-2 m-2 p-2 rounded-xl'><input placeholder='DD/MM/YYYY' className='w-full px-2' /></div>
                                <div className='w-[46%] border-2 m-2 p-2 rounded-xl'><input placeholder='Time' className='w-full px-2' /></div>
                                <div className='w-[100%] border-2 m-2 p-2 rounded-xl'><input placeholder='Add note' className='w-full px-2' /></div>
                            </form>

                            <div className='flex gap-4 my-4 w-full justify-end px-8'>
                                <div className='border-2  py-1 w-[15%] border-[#7E7E7E] text-center rounded-xl' onClick={PopUp}>
                                    Cancel
                                </div>
                                <div className='bg-[#F2CF47]  py-1 w-[15%] text-white text-center rounded-xl'>
                                    Save
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            )}

        </>
    )
}

export default HealthCard