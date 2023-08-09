import React from 'react'
import Navigation from '../Components/Navigation'
import bcancer from '../Photos/bcancer.png'
import NewNavigation from '../Components/NewNavigation'
import LandImage1 from '../Photos/LandImage1.png'

const BeforeLoginHome = () => {
  return (
    <>

      {/* <div className=' items-center  flex justify-center w-[67vh] md:w-[200vh]'>
        <div className=' md:w-[88%]  w-[80vh] pl-10 '>
          <img src={bcancer} alt='not found' className='relative'/>
        </div>
        <h2 className='absolute md:text-white md:top-[50%] md:left-[50%] top-[50vh] font-bold text-2xl text-black w-[60vh] md:w-[80vh]'>
          <p className='w-full'>lorem lorem lorem lorem lorem lorem lorem </p>
          <p>lorem lorem lorem lorem lorem lorem lorem </p>
          <p>lorem lorem lorem lorem lorem lorem lorem </p>
        </h2>
      </div> */}

      <div className='bg-[#52D8E9]  w-full h-screen   '>
        <div className=' flex items-center justify-center pt-4'>
          {/* <Navigation /> */}
          <NewNavigation />
        </div>
        <div>
          <img src={LandImage1} alt='none' />
        </div>

      </div>
      


    </>
  )
}

export default BeforeLoginHome