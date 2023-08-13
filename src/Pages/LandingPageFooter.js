import React from 'react'
import LogoCAN from '../Photos/LogoCAn.png'
import Logo from '../Photos/CANPink.png'
import USflag from '../Photos/usflag.png'
import copyright from '../Photos/copyrighticon.png'
import facebookIcon from '../Photos/facebookIcon.png'
import twitterIcon from '../Photos/twitterIcon.png'
import youtubeIcon from '../Photos/youtubeIcon.png'
import instagramIcon from '../Photos/instagramIcon.png'
import micIcongrey from '../Photos/MicIcongrey.png'
import googlePlayStore from '../Photos/googleplayStore.png'
import AppleStore from '../Photos/AppleStore.png'

const LandingPageFooter = () => {
    return (
        <>
        {/* footer */}
            <footer className=''>
                <div className='flex flex-row items-center justify-between px-28'>
                {/* footer logos */}

                    <div className='flex flex-col items-center'>
                        <img className='w-[200px]' src={LogoCAN} alt='Logo' />
                        <img className='w-[70px]' src={Logo} alt='CAN' />
                    </div>

                    {/* footer lists */}

                    <div className='w-[250px] flex flex-col items-start gap-3 '>
                        <h1 className='text-[#EB8299] font-semibold text-[20px] font-roboto'>My Space</h1>
                        <ul className='flex flex-col gap-3'>
                            <li className='text-[14px] text-[#5E5E5E]'><p>My Feed</p></li>
                            <li className='text-[14px] text-[#5E5E5E]'><p>Get Started</p></li>
                            <li className='text-[14px] text-[#5E5E5E]'><p>Heath Records</p></li>
                            <li className='text-[14px] text-[#5E5E5E]'><p>Chats</p></li>
                            <li className='opacity-0'><p>Chats</p></li>
                        </ul>
                    </div>
                    <div className='w-[250px] flex flex-col items-start gap-3'>
                        <h1 className='text-[#EB8299] font-semibold text-[20px] font-roboto'>Learn More</h1>
                        <ul className='flex flex-col gap-3'>
                            <li className='text-[14px] text-[#5E5E5E]'><p>Pricing</p></li>
                            <li className='text-[14px] text-[#5E5E5E]'><p>FAQ</p></li>
                            <li className='text-[14px] text-[#5E5E5E]'><p>Our Vision</p></li>
                            <li className='text-[14px] text-[#5E5E5E]'><p>About Us</p></li>
                            <li className='text-[14px] text-[#5E5E5E]'><p>Contact Us</p></li>
                        </ul>
                    </div>
                    <div className='w-[250px] flex flex-col items-start gap-3'>
                        <h1 className='text-[#EB8299] font-semibold text-[20px] font-roboto'>Resources</h1>
                        <ul className='flex flex-col gap-3'>
                            <li className='text-[14px] text-[#5E5E5E]'><p>Help & Support</p></li>
                            <li className='text-[14px] text-[#5E5E5E]'><p>Blog</p></li>
                            <li className='text-[14px] text-[#5E5E5E]'><p>CAN Stories</p></li>
                            <li className='text-[14px] text-[#5E5E5E]'><p>Careers</p></li>
                            <li className='text-[14px] text-[#5E5E5E]'><p>More Resources</p></li>
                        </ul>
                    </div>
                </div>
                 
                 {/* horizontal line */}

                <hr className='mt-16' />

                {/* footer end part  */}
                <div className='flex flex-row py-10 px-20 items-center justify-between '>
                    <div className='w-[500px] flex flex-col items-start gap-4 '>
                        <div className='h-10 w-44 border border-[#ED839A] rounded-xl flex flex-row items-center gap-1 justify-center '>
                            <img className='w-5' src={USflag} alt='US' />
                            <p className='text-[14px] text-[#5E5E5E]'>United States . English</p>
                        </div>
                        
                            <div className='flex flex-row items-center gap-4  '>
                                <img className='w-5' src={copyright} alt='copyright' />
                                <p className='text-[#5E5E5E] text-[14px] '>2022-2023 CAN</p>
                                <p className='text-[#EFC319] text-[16px] cursor-pointer'>Privacy Policy/FAQ</p>
                                <p className='text-[#EFC319] text-[16px] cursor-pointer'>Terms</p>
                                <p className='text-[#EFC319] text-[16px] cursor-pointer'>Legal</p>
                            </div>
                        
                    </div>
                    <div className='flex flex-col items-center gap-4 w-[300px]'>
                        <div className='flex flex-row items-center gap-4'>
                            <img className='w-6' src={facebookIcon} alt='facebook' />
                            <img className='w-6' src={youtubeIcon} alt='youtube' />
                            <img className='w-6' src={twitterIcon} alt='twitter' />
                            <img className='w-6' src={instagramIcon} alt='instagram' />
                            <img className='w-4' src={micIcongrey} alt='mic' />
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <img className='w-20' src={googlePlayStore} alt='playstore' />
                            <img className='w-20' src={AppleStore} alt='applestore' />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default LandingPageFooter
