import React, { useRef, useState } from 'react'
import HomeNav from '../Components/HomeNav'
import Acc from '../Photos/account.jpg'
import { CgAdd } from 'react-icons/cg'
import { MdOutlineCloudUpload } from 'react-icons/md'
import SideMenu from '../Components/SideMenu'

const HealthCard1 = () => {

  const hiddenChooseImage = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);






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

        <div className='h-full w-full bg-[#FEF8FD] flex flex-col gap-4  '>

          <h1 className='ml-[13%] pt-6 font-semibold'>Make Your Health Card</h1>

          <div className='ml-[13%] h-full w-[80%] bg-white shadow-xl rounded-xl p-2'>




            <div className=' flex flex-col gap-2 items-center justify-center mt-4'>

              <input
                type="file"
                id="upload-button"
                style={{ display: 'none' }}
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />



              {selectedImage && (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  style={{ borderRadius: '50%', width: '80px', height: '80px' }}
                />
              )}

              <label htmlFor="upload-button" className="text-[#C31A7F] cursor-pointer">
                Upload Picture
              </label>
            </div>



            <form className='flex flex-wrap items-center justify-center gap-7 mx-[4%] mt-4'>

              <div class="w-[46%] relative group">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " />
                <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label>
              </div>

              {/* <div className='w-[46%]  relative group'><input id='username' className='w-full px-4 peer outline-none h-10 ' />
              <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label></div> */}
              <div class="w-[46%] relative group">
                <label for="gender">Gender</label>
                <select id="gender" required class="w-full h-10 px-4 text-sm peer outline-none border rounded-lg">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="w-[46%] relative group">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " />
                <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label>
              </div>
              <div class="w-[46%] relative group">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " />
                <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label>
              </div>
              <div class="w-[46%] relative group">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " />
                <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label>
              </div>
              <div class="w-[46%] relative group">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " />
                <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label>
              </div>
              <div class="w-[46%] relative group">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " />
                <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label>
              </div>
              <div class="w-[46%] relative group">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " />
                <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label>
              </div>
              <div class="w-[46%] relative group">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " />
                <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label>
              </div>
              <div class="w-[46%] relative group">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " />
                <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label>
              </div>
              <div class="w-[46%] relative group">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " />
                <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label>
              </div>
              <div class="w-[46%] relative group">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " />
                <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label>
              </div>
              <div class="w-[46%] relative group">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " />
                <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label>
              </div><div className='w-[46%]'></div>

              <h1 className='font-semibold'>Emergency Contact</h1>
              <div className='w-[79%] m-2 p-2'></div>
              <div class="w-[46%] relative group">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " />
                <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label>
              </div>
              <div class="w-[46%] relative group">
                <input type="text" id="username" required class="w-full h-10 px-4 text-sm peer  outline-none border rounded-lg " />
                <label for="username" class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Username</label>
              </div>
              <div className='w-[48%] m-2 p-2 flex flex-row gap-4 items-center'>
                <CgAdd color='#C31A7F' size={30} />
                <h1 className='font-semibold'>Add More Emergency Contact</h1>
              </div>
              <div className='w-[46%] p-2 m-2'></div>

              <div className='w-[95%] p-2 m-2 font-semibold'>Add Your Document</div>

              <div className='p-2 m-2'
                style={{
                  width: '46%',
                  height: 200,
                  borderStyle: 'dashed',
                  borderWidth: 2,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#AFAFAF',
                }}>
                <div className='text-sm text-[#7E7E7E] p-2 w-full'>
                  <p className='w-full text-right'>Max File Size: 3 MB</p>
                </div>

                <div className='flex flex-col items-center mb-4'>
                  <MdOutlineCloudUpload size={50} color='#7E7E7E' />
                  <h1>Drag and drop or</h1>
                  <h1 className='text-[#3F75F3] font-semibold cursor-pointer' >Browse</h1>
                  <p className='text-sm w-[100%] text-center text-[#7E7E7E]'>Add Aadhaar Card</p>
                </div>
              </div>
              <div className='p-2 m-2'
                style={{
                  width: '46%',
                  height: 200,
                  borderStyle: 'dashed',
                  borderWidth: 2,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#AFAFAF',
                }}>
                <div className='text-sm text-[#7E7E7E] p-2 w-full'>
                  <p className='w-full text-right'>Max File Size: 3 MB</p>
                </div>

                <div className='flex flex-col items-center mb-4'>
                  <MdOutlineCloudUpload size={50} color='#7E7E7E' />
                  <h1>Drag and drop or</h1>
                  <h1 className='text-[#3F75F3] font-semibold cursor-pointer' >Browse</h1>
                  <p className='text-sm w-[100%] text-center text-[#7E7E7E]'>Add Fit to Fly certificate</p>
                </div>
              </div>

            </form>

            <div className='flex flex-row items-end justify-end mx-16 p-4'>
              <div className='flex flex-row gap-3'>
                <div className='h-10 w-28 bg-transparent text-[#7E7E7E] border-2 rounded-xl flex items-center justify-center cursor-pointer'>Cancel</div>
                <div className='h-10 w-28 bg-[#EFC319] text-[#FFFF] rounded-xl flex items-center justify-center cursor-pointer'>Save</div>
              </div>

            </div>


          </div>

        </div>
      </div>
      </div>
    </>
  )
}

export default HealthCard1