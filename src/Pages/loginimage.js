import React, { useRef, useState } from 'react';
import Logo from '../Photos/Logo.png';
import CAN from '../Photos/CAN.png';
import Video from '../Photos/Video.png';
import { VscAccount } from 'react-icons/vsc';
import { IoCloseCircleSharp } from 'react-icons/io5';
import CarouselMain from '../Components/CarouselMain';
import Freeline from '../Photos/Freeline.png'
import { Link } from 'react-router-dom';
import vibird1 from '../Photos/vibird1.gif'

const LoginImage = () => {
  const [image, setImage] = useState(null);
  const hiddenChooseImage = useRef(null);

  const hideImage = () => {
    setImage(false);
  };

  const uploadImage = () => {
    hiddenChooseImage.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <>
      <div className='ml-[80px] mt-2 absolute flex items-center '>
        <img src={Logo} alt='not found' className='w-[80px] h-[80px]' />
        <img src={CAN} alt='not found' className='w-[42.88px] h-[16.19px]  ' />
      </div>
      <div>


        <div className='flex'>
        <div className='w-[55%] mt-16  flex flex-col items-center justify-center'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            {/* <img src={WelcomeScreen} className='' /> */}
                            <div className='w-[70%] '>
                                {/* <CarouselMain /> */}
                                <img src={Freeline} alt='none'  />
                            </div>

                            <div className=' flex flex-col items-center justify-center gap-1 '>
                                <h1 className='text-center text-[36px] font-bold'>Hospital visits, easier.</h1>
                                <p className='text-center text-[18px] font-semibold w-[60%]'>Upload and manage your medical records and reports,
                                    all in one place.</p>
                            </div>

                            <div className="flex flex-row items-center gap-4 mt-3">
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#E7E7E7]"></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-[#EFC319]"></div>
                                <div className='h-[12px] w-[12px] rounded-full bg-[#E7E7E7]'></div>
                            </div>
                        </div>
                    </div>
         

          {/* right side */}
          <div className='h-[100vh] flex items-center'>
            <div className='h-[90%] w-[60vh]  mx-24 bg-[#D0F5D3] bg-opacity-10 z-10 backdrop-blur-lg rounded-[20px]' style={{
              boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.1)'
            }}>
              <div>
                <img src={vibird1} alt='Video' />
              </div>
              <div className='text-center text-3xl font-semibold p-1 text-[#EFC319]'>
                <h1>Add Profile</h1>
              </div>

              <div className='border-2 border-dashed rounded-xl h-[40%] mx-8 my-2 flex justify-center items-center overflow-hidden'>
                <div className='flex flex-col items-center'>
                  {!image && (
                    <div className='flex flex-col items-center cursor-pointer ' onClick={uploadImage}>
                      <VscAccount size={50} />
                      <h1>Choose image</h1>
                    </div>
                  )}

                  {image && (
                    <div className='relative'>
                      <img src={image} alt='Uploaded' className='h-[38%] w-80 rounded-lg  ' />
                      <button className='absolute top-0 right-0' onClick={hideImage}>
                        <IoCloseCircleSharp color='white' />
                      </button>
                    </div>
                  )}

                  <input
                    type='file'
                    accept='image/*'
                    ref={hiddenChooseImage}
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                  />
                </div>
              </div>

              <div className='flex px-5 justify-center'>
                <Link to='/loginprofile' className='flex justify-center py-2 w-[50%]'>
                  <h2 className='bg-transparent border-[#C31A7F] border-2 w-[86%] text-center p-3 rounded-lg text-[#C31A7F]'>Add later</h2>
                </Link>

                {image ? (
                  <div className='flex justify-center py-2 w-[50%]'>

                    <Link to='/loginprofile' className='w-[86%]'>
                      <h2 className='bg-[#EFC319]  text-center p-3 rounded-lg text-white'>Continue</h2>
                    </Link>
                  </div>)
                  :
                  (<div className='flex justify-center py-2 w-[50%]'>

                    <div className='w-[86%]'>
                      <h2 className='bg-[#EFC319] opacity-50 text-center p-3 rounded-lg text-white'>Continue</h2>
                    </div>
                  </div>)

                }


              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default LoginImage