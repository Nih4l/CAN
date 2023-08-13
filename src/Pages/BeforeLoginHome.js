import React, { useState } from 'react'
import Navigation from '../Components/Navigation'
import bcancer from '../Photos/bcancer.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Customdotstyle.css'
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
import greyCloud from '../Photos/greyCloud1.png'
import greenCloud from '../Photos/greenCloud1.png'
import slideImage1 from '../Photos/slideImage1.png'
import slideImage2 from '../Photos/slideImage2.png'
import slideImage3 from '../Photos/slideImage3.png'
import slideImage4 from '../Photos/slideImage4.png'
import leafLeft from '../Photos/leafLeft.png'
import leafRight from '../Photos/leafRight.png'
import lamp1 from '../Photos/lamp1.png'
import lamp2 from '../Photos/lamp2.png'
import sparrow from '../Photos/sparrow.png'
import rightBranch from '../Photos/rightBranch.png'
import leftBranch from '../Photos/leftBranch.png'
import manyPeople from '../Photos/manyPeople.png'
import heartLanding from '../Photos/heartLanding.png'
import capsuleLanding from '../Photos/capsuleLanding.png'
import supportLanding from '../Photos/supportLanding.png'
import LandingPageFooter from './LandingPageFooter';



const BeforeLoginHome = () => {

  const [isHovered, setIsHovered] = useState(-1);

  const handleHoverEnter = (index) => {
    setIsHovered(index);
  };

  const handleHoverLeave = () => {
    setIsHovered(-1);
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true

    // customPaging: i => (
    //   <div
    //   className={`
    //             transition-all w-3 h-3 bg-[#084943] rounded-full 
    //             ${isHovered === i ? 'p-1' : 'bg-opacity-40'}
    //           `}
    //   >

    //   </div>
    // )

  };

  const data = [
    {
      id: 1,
      imageUrl: greyCloud,
      imageUrl1: greenCloud,
      overlayImage: leafLeft,
      overlayImage1: leafRight,
      overlayImage2: lamp1,
      overlayImage3: lamp2,
      slideImage: slideImage1,

      title: 'Emotional Support',
      description: 'Providing a non-judgmental empathetic space to fighters so that they feel heard and understood',
    },
    {
      id: 2,
      imageUrl: greyCloud,
      imageUrl1: greenCloud,
      overlayImage: leafLeft,
      overlayImage1: leafRight,
      overlayImage2: lamp1,
      overlayImage3: lamp2,
      slideImage: slideImage2,

      title: 'Validate & Trivialize',
      description: 'Acknowledging and validating individual experiences and emotions, reassuring individuals that their struggles are valid and they are not alone.',
    },
    {
      id: 3,
      imageUrl: greyCloud,
      imageUrl1: greenCloud,
      overlayImage: leafLeft,
      overlayImage1: leafRight,
      overlayImage2: lamp1,
      overlayImage3: lamp2,
      slideImage: slideImage3,

      title: 'Coping strategies and skill building',
      description: 'Support groups build coping strategies, stress management, problem-solving skills, and healthy coping mechanisms for navigating difficulties effectively.',
    },
    {
      id: 4,
      imageUrl: greyCloud,
      imageUrl1: greenCloud,
      overlayImage: leafLeft,
      overlayImage1: leafRight,
      overlayImage2: lamp1,
      overlayImage3: lamp2,
      slideImage: slideImage4,

      title: 'Goal-oriented approach',
      description: 'Providing emotional support alongside practical guidance, enabling individuals to set achievable goals and proactively work towards positive transformations in their emotional well-being, relationships, and life objectives.',
    },



    // Add more images and data as needed
  ];

  return (
    <>

      <div className='relative'>
        <div className='bg-[#52D8E9] flex items-center justify-center  group overflow-hidden  relative  w-full h-[700px]'>

          {/* <Navigation /> */}
          <div className=' absolute top-8 '>
            <NewNavigation />
          </div>

          <div className='pb-64 flex flex-col items-center justify-center gap-4 z-10 w-full'>
            <h1 className='text-[36px] font-semibold text-[#084943]'>Join the fight against cancer!</h1>


            <button className='text-[14px] bg-[#084943] flex   items-center justify-center  rounded-full  h-10 w-40 font-poppins font-semibold text-white transition duration-300 ease-in-out hover:bg-[#084943] transform hover:-translate-y-1 hover:scale-110 '>
              Join a meeting
            </button>
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
            className="absolute bottom-[25%] left-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform -translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />
          <img
            src={leftCloud2}
            alt="Overlay"
            className="absolute bottom-[30%] left-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform -translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
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
            className="absolute bottom-[30%] left-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform -translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
          />
          <img
            src={leftCloud7}
            alt="Overlay"
            className="absolute bottom-[40%] left-0  sm:w-[200px] sm:h-full md:w-[200px] md:h-[200px] lg:w-full  opacity-100 group-hover:opacity-40 transform -translate-x-full  group-hover:translate-x-0  transition-all duration-1000 ease-in-out"
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

        {/* image with beach */}
        <img className='absolute top-0  w-full ' src={LandingPage1} alt='none' />
      </div>

      <div className=' pt-44 flex items-center justify-center '>
        <div className='w-[500px] flex flex-col items-center justify-center '>
          <h1 className='text-[40px] font-bold text-[#084943]'>What is Support Therapy?</h1>
          <p className='text-center text-[20px] font-semibold'>Guiding individuals through challenges and distress, fostering resilience and well-being.</p>
        </div>
      </div>

      <div className='relative w-full'>
        <img className='absolute right-36' src={sparrow} alt='none' />
        <img className='absolute top-56 right-0' src={leftBranch} alt='none' />
        <img className='absolute  left-0' src={rightBranch} alt='none' />
      </div>

      {/* carousel with animation */}

      <div className='w-full flex items-center justify-center'>
        <div className='w-full     pt-10'>
          <Slider {...settings} className=' '>
            {data.map((item) => (
              <div
                className='carousel-item relative group flex items-center justify-center'
                key={item.id}
                onMouseEnter={() => handleHoverEnter(item.id)}
                onMouseLeave={() => handleHoverLeave(item.id)}
              >
                {/* Background Image */}
                <div className='flex items-center justify-center'>
                  <img
                    className='carousel-image w-[400px]  object-cover relative '
                    src={item.imageUrl}
                    alt={item.title}
                  />
                  <img className='absolute w-[200px] z-10 top-20 ' src={item.slideImage} alt='none' />
                  <div className={`absolute  top-0 left-[37%] w-full  group-hover:opacity-100 ${isHovered === item.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                    <img className=' w-[400px]  relative ' src={item.imageUrl1} alt='none' />
                    <img className={`absolute  bottom-20 -left-28 w-[100px] transition-all duration-700 ease-in-out ${isHovered === item.id ? 'opacity-100 transform translate-x-full rotate-12' : ''} `} src={item.overlayImage} alt='none' />
                    <img className={`absolute  bottom-20 -left-[-27%] w-[100px] transition-all duration-700 ease-in-out ${isHovered === item.id ? 'opacity-100 transform -translate-x-full -rotate-12' : ''} `} src={item.overlayImage1} alt='none' />
                    <img className={`absolute -top-28 left-28 w-[30px] transition-all duration-700 ease-in-out ${isHovered === item.id ? 'opacity-100 transform translate-y-full ' : ''} `} src={item.overlayImage2} alt='none' />
                    <img className={`absolute -top-28 left-44 w-[30px] transition-all duration-700 ease-in-out ${isHovered === item.id ? 'opacity-100 transform translate-y-full ' : ''} `} src={item.overlayImage3} alt='none' />
                  </div>
                </div>

                <div className='flex items-center justify-center'>
                  <div className='flex flex-col items-center  w-[60%] justify-center pt-10'>
                    <h2 className='text-[36px] text-[#084943] font-bold'>{item.title}</h2>
                    <p className='text-[20px] text-center font-roboto '>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* content */}

      <div className='flex items-center justify-center relative  mt-40'>
        <div className='flex flex-col w-[65%] items-center justify-center gap-4'>
          <h1 className='text-[40px] font-roboto font-extrabold text-[#084943]'>Our Vision</h1>
          <p className='text-center text-[24px] font-roboto '>Our purpose is to transform the lives of cancer patients with unwavering support and compassion. We create a safe and nurturing environment where patients find solace and encouragement. By lending a listening ear, offering comfort, and being a reliable presence, we instill hope and resilience. Additionally, we raise awareness about cancer prevention, collaborate with medical professionals, and organize support initiatives, aiming to improve well-being and quality of life. Together, we strive to conquer cancer and build a future filled with healing and empowerment.
          </p>
        </div>
        <img className='absolute right-0' src={leftBranch} alt='none' />
      </div>

      {/* why can button */}

      <div className='flex items-center justify-center pt-10'>
        <button className='h-10 w-36 rounded-[10px] bg-[#88C2C8] transition duration-300 ease-in-out hover:bg-[#88C2C8] transform hover:-translate-y-1 hover:scale-110 text-white  '>Why CAN?</button>
      </div>

      {/* image below why can button */}

      <div className='flex items-center justify-center pt-16'>
        <img className='object-cover w-1/2' src={manyPeople} alt='none' />
      </div>

      {/* three content below image  */}

      <div className='pt-16 px-10'>
        <div className='w-full flex flex-row items-center justify-between'>
          <div className='w-[350px] flex flex-col items-center justify-center'>
            {/* <img className='' src={heartLanding} alt='none' /> */}
            <h1 className='text-[#9D1F60] text-[24px] font-roboto font-semibold'>Health Articles</h1>
            <p className='text-center text-[17px] font-thin'>Lorem ipsum dolor sit amet consectetur. Vestibulum et neque tincidunt purus tincidunt duis. Feugiat vulputate sed morbi morbi neque nulla malesuada risus. Egestas venenatis nunc egestas lacinia id. At quam amet non ullamcorper.</p>
          </div>

          <div className='w-[350px] flex flex-col items-center justify-center'>
            {/* <img src={capsuleLanding} alt='none' /> */}
            <h1 className='text-[#9D1F60] text-[24px] font-roboto font-semibold'>Medicine Reminders</h1>
            <p className='text-center  text-[17px] font-thin'>Lorem ipsum dolor sit amet consectetur. Vestibulum et neque tincidunt purus tincidunt duis. Feugiat vulputate sed morbi morbi neque nulla malesuada risus. Egestas venenatis nunc egestas lacinia id. At quam amet non ullamcorper.</p>
          </div>

          <div className='w-[350px] flex flex-col items-center justify-center'>
            {/* <img className='w-[150px]' src={supportLanding} alt='none' /> */}
            <h1 className='text-[#9D1F60] text-[24px] font-roboto font-semibold'>Support Group Meetings</h1>
            <p className='text-center  text-[17px] font-thin'>Lorem ipsum dolor sit amet consectetur. Vestibulum et neque tincidunt purus tincidunt duis. Feugiat vulputate sed morbi morbi neque nulla malesuada risus. Egestas venenatis nunc egestas lacinia id. At quam amet non ullamcorper.</p>
          </div>

        </div>
      </div>

      {/* lets fight cancer with button */}
      <div className='pt-10 relative'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='text-[30px] font-bold font-roboto text-[#9D1F60]'>Let’s fight cancer together!</h1>
          <button className='h-10 w-56 rounded-2xl flex items-center justify-center text-white bg-[#F2CF47] transition duration-300 ease-in-out hover:bg-[#F2CF47] transform hover:-translate-y-1 hover:scale-110'>
            Start Your Journey
          </button>
        </div>
        <img className='absolute right-36' src={sparrow} alt='none' />
        <img className='absolute  left-0' src={rightBranch} alt='none' />
      </div>

      {/* image below the button  */}
      <div className='flex items-center justify-center pt-16'>
        <img src={manyPeople} alt='none' />
      </div>

      {/* complete footer */}
      <div className='pt-10'>
        <LandingPageFooter />
      </div>

    </>
  )
}

export default BeforeLoginHome