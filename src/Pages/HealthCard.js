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
import SideMenu from '../Components/SideMenu'

const HealthCard = () => {

    //vertical calender , appointments and Medicine
    const [vertical, setVertical] = useState('Upcoming')

    const toggleVertical = (item) => {
        setVertical(item)
    }

    return (
        <>
            { /* complete screen  */}
      <div className="flex flex-row min-h-screen h-[100%] bg-[#FEF8FD] ">
        {/* side menu column */}
        <div className="sticky flex flex-row">
          <SideMenu />
        </div>
        {/* rest of the column  including homenav + bottom of the page code*/}
        <div className="flex flex-col h-[100%] w-screen">
          {/* home navigation top bar div */}
                <div className="  bg-white">
                    <HomeNav />
                </div>

                <div className='flex'>
                    {/* background */}
                    <div className='bg-[#FEF8FD] h-[100vh] w-full flex flex-row'>

                        
                        <div className='flex flex-col w-[90%] mx-[5%]'>
                        <h1 className='ml-[8%] mt-6 text-lg font-semibold'>Health Card</h1>
                            <div className='bg-white ml-[8%] mt-2 rounded-2xl gap-8 py-[100px] flex flex-col items-center justify-center' >
                                <div>
                                    <img src={HealthReco} alt='Health_Record.jpg' />
                                </div>
                                <div className='w-[25%] text-[18px] text-center text-[#696969]'>
                                Create your Fit-to-Fly Report Card by filling in your details.
                                </div>
                                <Link to='/HealthCard1'>
                                    <div className='bg-[#F2CF47] text-white px-4 py-2 rounded-3xl font-[500] text-[18px]'>
                                        Make Your Health Card
                                    </div>
                                </Link>
                            </div>

                        </div>

                        

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HealthCard