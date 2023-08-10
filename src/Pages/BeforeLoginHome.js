import React from 'react'
import Navigation from '../Components/Navigation'
import bcancer from '../Photos/bcancer.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewNavigation from '../Components/NewNavigation'
import LandingPage1 from '../Photos/LandingPage1.png'
import leftSideImage from '../Photos/leftSideImage.png'
import rightSideImage from '../Photos/rightSideImage.png'
import leftCloud1 from '../Photos/leftCloud1.png'
import leftCloud2 from '../Photos/leftCloud2.png'
import leftCloud3 from '../Photos/leftCloud3.png'
import leftCloud4 from '../Photos/leftCloud4.png'
import leftCloud5 from '../Photos/leftCloud5.png'
import leftCloud6 from '../Photos/leftCloud6.png'
import leftCloud7 from '../Photos/leftCloud7.png'
import rightCloud1 from '../Photos/rightCloud1.png'
import rightCloud2 from '../Photos/rightCloud2.png'
import rightCloud3 from '../Photos/rightCloud3.png'
import rightCloud4 from '../Photos/rightCloud4.png'
import rightCloud5 from '../Photos/rightCloud5.png'
import rightCloud6 from '../Photos/rightCloud6.png'
import CarouselMain from '../Components/CarouselMain'


const BeforeLoginHome = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
};

// const data = [
//   {
//       imageUrl: 'space1.jpg',
//       overlayImage: image3,
//       overlayImage1: image3,
//       overlayImage2: image4,
//       title: 'Image 1',
//       description: 'Description for Image 1',
//   },
//   {
//       imageUrl: 'space2.jpg',
//       overlayImage: image4,
//       overlayImage1: image3,
//       overlayImage2: image4,
//       title: 'Image 2',
//       description: 'Description for Image 2',
//   },
//   // Add more images and data as needed
// ];

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
      <div className='relative'>
        <div className='bg-[#52D8E9] flex items-center justify-center  group overflow-hidden  relative  w-full h-[780px]'>

          {/* <Navigation /> */}
          <div className=' absolute top-8 '>
            <NewNavigation />
          </div>

          <div className='pb-64 flex flex-col items-center justify-center gap-4 z-10 w-full'>
            <h1 className='text-[36px] font-semibold text-[#084943]'>Join the fight against cancer!</h1>
            <div className=' flex   items-center justify-center  h-10 w-40 rounded-full  bg-[#084943] '>

              <p className='text-[14px] font-poppins font-semibold text-white'>Join a meeting</p>

            </div>
          </div>


          <img
            src={rightSideImage}
            alt="Overlay"
            className="absolute top-0 right-0  sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px] opacity-100 group-hover:opacity-100 transform translate-x-0  group-hover:translate-x-full  transition-all duration-1000 ease-in-out"
          />
          <img
            src={leftSideImage}
            alt="Overlay"
            className="absolute top-0 left-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px] opacity-100 group-hover:opacity-100 transform -translate-x-0  group-hover:-translate-x-full  transition-all duration-1000 ease-in-out"
          />

          {/* left side cloud images */}

          <img
            src={leftCloud1}
            alt="Overlay"
            className="absolute bottom-[20%] left-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform -translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />
          <img
            src={leftCloud2}
            alt="Overlay"
            className="absolute bottom-[20%] left-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform -translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />
          <img
            src={leftCloud3}
            alt="Overlay"
            className="absolute bottom-[20%] left-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform -translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />
          <img
            src={leftCloud4}
            alt="Overlay"
            className="absolute bottom-[30%] left-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform -translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />
          <img
            src={leftCloud5}
            alt="Overlay"
            className="absolute bottom-[20%] left-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform -translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />
          <img
            src={leftCloud6}
            alt="Overlay"
            className="absolute bottom-[40%] left-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform -translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />
          <img
            src={leftCloud7}
            alt="Overlay"
            className="absolute bottom-[50%] left-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform -translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />

          {/* right side cloud images */}

          <img
            src={rightCloud1}
            alt="Overlay"
            className="absolute bottom-[40%] right-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />
          <img
            src={rightCloud2}
            alt="Overlay"
            className="absolute bottom-[30%] right-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />
          <img
            src={rightCloud3}
            alt="Overlay"
            className="absolute bottom-[20%] right-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />
          <img
            src={rightCloud4}
            alt="Overlay"
            className="absolute bottom-[30%] right-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />
          <img
            src={rightCloud5}
            alt="Overlay"
            className="absolute bottom-[20%] right-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />
          <img
            src={rightCloud6}
            alt="Overlay"
            className="absolute bottom-[40%] right-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />



        </div>
        <img className='absolute top-20  w-full '    src={LandingPage1} alt='none' />

      </div>
      <div className=' pt-44 flex items-center justify-center '>
        <div className='w-[500px] flex flex-col items-center justify-center '>
          <h1 className='text-[40px] font-bold text-[#084943]'>What is Support Therapy?</h1>
          <p className='text-center text-[20px] font-semibold'>Guiding individuals through challenges and distress, fostering resilience and well-being.</p>

          
        </div>
      </div>


    </>
  )
}

export default BeforeLoginHome