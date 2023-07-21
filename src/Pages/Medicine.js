import React from 'react'
import { useState } from 'react'
import SideMenu from '../Components/SideMenu';
import HomeNav from '../Components/HomeNav';
import Medicineimg from '../Photos/Medicineimg.png'
import MedicinePopup from '../Components/MedicinePopup';
import { Link } from 'react-router-dom';
// import Add_Medicines_Popup from './Add_Medicines_Popup'




const Medicine = () => {
  const [medicine, setMedicine]=useState(false);
  const toggleMedicine= ()=>{
    setMedicine(!medicine);
};
   return (
    <div className='flex flex-row h-screen bg-[#FEF8FD] '>
            
            <div className='sticky flex flex-row '><SideMenu/></div>
            <div className=' flex flex-col items-center w-screen'>
                <div className='bg-white w-full '>
                    <HomeNav />
                </div>
                <div className='bg-[#FEF8FD] w-full flex flex-col items-center '>
                
                
                    {/* background */}
                   
                        <div className='flex flex-col w-[90%] mx-[5%] justify-center'>
                            <h1 className='ml-[8%] mt-6 mb-2 text-lg font-semibold self-start'>Medicines</h1>
                            <div className='ml-[8%] bg-white rounded-[16px] flex flex-col items-center gap-8 justify-center py-[100px]' >
                                <div>
                                    <img src={Medicineimg} alt='medicine image'/>
                                </div>
                                <div className='w-[30%] text-center'>
                                   <p className=' text-[18px] text-[#696969]'>Add your Medicines and there timing here
                                    so we can help you talking them on time.</p> 
                                </div>
                                
                                    <div className=' bg-[#F2CF47] text-white font-[500] text-[18px] px-4 py-2 rounded-[20px] cursor-pointer' onClick={toggleMedicine}>
                                        Add Schedule
                                        
                                    </div>
                                    {medicine && (<MedicinePopup/> )}
                            </div>

                        </div>
                </div>
            </div>
            </div>
  )
}

export default Medicine