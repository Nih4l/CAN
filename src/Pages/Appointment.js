import React, { useRef, useState } from 'react'
import HomeNav from '../Components/HomeNav'
import Appoint from '../Photos/Appoint.png'

import SideMenu from '../Components/SideMenu'
import AppointmentPopup from '../Components/AppointmentPopup'


const HealthCard = () => {

    //pop up
    const [pop, setPop] = useState(false)

    function PopUp() {
        setPop(!pop)
    }

    

    return (
        

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
                                
                                    <div className=' bg-[#F2CF47] text-white px-4 py-2 rounded-[20px] cursor-pointer' onClick={PopUp}>
                                        Add Appointments
                                    </div>
                                
                            </div>

                        </div>
                </div>
            </div>
                    {/* pop up */} 
               {pop && ( <AppointmentPopup /> )}
            </div>
               
               
       
    )
}  


            
            

export default HealthCard