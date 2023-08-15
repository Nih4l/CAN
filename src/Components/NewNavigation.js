import React, { useEffect, useState } from 'react'
import SearchLens from '../Photos/SearchLens.png'
import HomeIcons from '../Photos/HomeIcon.png'
import KnowAbout from '../Photos/KnowAbout.png'
import JoinMeet from '../Photos/JoinMeet.png'
import LogoCAn from '../Photos/LogoCAn.png'
// import './navbar.css'
import { Link } from 'react-router-dom'

const NewNavigation = () => {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return (
      window.removeEventListener('scroll', handleScroll)
    )
  }, []);



  return (
    <>
      <nav className={`bg-white px-4 z-20 fixed top-8  ${
          scrolled ? 'w-[1000px] rounded-none' : 'w-[950px] rounded-full'
        }`} style={{boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.1)'}}>
        <div className='flex flex-row items-center justify-evenly  '>
          <div className='w-[40%] flex flex-row px-10 items-center justify-between'>
            <div className='flex flex-row gap-2 items-center pl-4 '>
              <img className='w-4 h-4' src={SearchLens} alt='search' />
              <p className='text-[14px] font-poppins font-semibold text-[#084943]'>Search</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <img className='w-4 h-4' src={HomeIcons} alt='search' />
              <p className='text-[14px] font-poppins font-semibold text-[#084943]'>My Space</p>
            </div>
          </div>
          <div className='flex flex-row  item-center justify-center w-[20%] '>
            <img className='w-16' src={LogoCAn} alt='Logo' />

          </div>
          <div className='w-[40%] flex flex-row items-center justify-between '>
            <div className='flex flex-row gap-2 items-center pl-2'>
              <img className=' w-4 h-4' src={KnowAbout} alt='search' />
              <Link to='/KnowMore'>
                <p className='text-[14px] font-poppins font-semibold text-[#084943]'>Know About Cancer</p>
              </Link>
            </div>
            <div className=' flex flex-row gap-2 items-center h-8 px-3 rounded-full  bg-[#084943] '>
              <img className='w-4 h-4' src={JoinMeet} alt='search' />
              <p className='text-[14px] font-poppins font-semibold text-white'>Join a meeting</p>

            </div>
          </div>
        </div>
      </nav>
      {/* <nav className='bg-white w-full'>
        <div>
          <ul className='flex flex-row items-center justify-evenly '>
            <li className='flex flex-row items-center'><img src={SearchLens} alt='search' /><p>Search</p></li>
            <li className='flex flex-row items-center'><img src={HomeIcons} alt='' /><p>My Space</p></li>
            <li><img className='w-16' src={LogoCAn} alt='logo' /></li>
            <li className='flex flex-row items-center'><img src={KnowAbout} alt='KnowAbout' /><p>Know About Cancer</p></li>
            <li className='bg-[#084943]'><img src={JoinMeet} alt='JoinMeet' /><p>Join a meeting</p></li>
          </ul>
        </div>
      </nav> */}
    </>
  )
}

export default NewNavigation
