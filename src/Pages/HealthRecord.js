import React, { useState } from 'react'
import HomeNav from '../Components/HomeNav'
import VerticalAppointment from '../Components/VerticalAppointment'
import VerticalMedicine from '../Components/VerticalMedicine'
import premium from '../Photos/premium.png'
import HealthReco from '../Photos/HealthReco.png'
import { RiArrowDropDownLine } from 'react-icons/ri'
import SingleLineCalendar from '../Components/SingleLineCalender'
import VerticalSLC from '../Components/VericalSLC'
import { Link } from 'react-router-dom'


const HealthRecord = () => {

    //vertical calender , appointments and Medicine
    const [vertical, setVertical] = useState('Upcoming')

    const toggleVertical = (item) => {
        setVertical(item)
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
                        <h1 className='ml-[8%] mt-6 text-lg font-semibold'>Health Record</h1>
                            <div className='bg-white h-[80vh] ml-[8%] mt-2 rounded-2xl shadow-xl flex flex-col items-center justify-center' >
                                <div>
                                    <img src={HealthReco} alt='Health_Record.jpg' />
                                </div>
                                <div className='w-[50%] text-lg text-center mt-3'>
                                    Add your document here of easy access anytime anywhere.
                                </div>
                                <Link to = '/HealthRecord1'>
                                <div className='mt-3 bg-[#F2CF47] text-white px-3 py-1 rounded-3xl'>
                                    Add health Record
                                </div>
                                </Link>
                            </div>

                        </div>

                        

                    </div>
                </div>
            </div>

        </>
    )
}

export default HealthRecord