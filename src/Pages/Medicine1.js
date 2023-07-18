import {React, useState} from "react";
import CalenderRecords from "../Components/CalenderRecords";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import MedicinePopup from '../Components/MedicinePopup';
import SideMenu from "../Components/SideMenu";
import HomeNav from "../Components/HomeNav";


function MedicineReminder() {
    const [isClicked, setIsClicked]=useState(true)
    const handleIsClicked=()=>{
        setIsClicked(!isClicked);
    }
  return (
    <div className="h-[100%] flex flex-row">
      <div className="[h-100%]">
        <SideMenu />
      </div>
      <div className=" w-full">
        <div>
          <HomeNav />
        </div>

        <div className="flex">
          {/* background */}
          <div className="bg-[#FEF8FD] w-full flex flex-row">
            <div className="flex flex-col w-[90%] mx-[5%]">
              <div className=" ml-8 mt-6 flex justify-between m-4 flex-nowrap">
                <div className="flex gap-8 w-[50%]">
                  <button
                    className={`text-lg font-semibold py-2 px-6 rounded-[20px] w-fit text-center'  ${
                      isClicked
                        ? "bg-white shadow-lg"
                        : "bg-[#ffffff7b] shadow-sm"
                    } `}
                    onClick={handleIsClicked}
                  >
                    Appointments
                  </button>
                  <button
                    className={`text-lg font-semibold py-2 px-10 shadow-lg rounded-[20px] w-fit text-center ${
                      isClicked
                        ? "bg-white shadow-lg"
                        : "bg-[#ffffff7b] shadow-sm"
                    }`}
                    onClick={handleIsClicked}
                  >
                    {" "}
                    Medicine
                  </button>
                </div>
                <button
                  className="text-lg font-semibold bg-[#F2CF47] text-white py-2 px-6 shadow-lg rounded-[20px] w-fit text-center"
                  
                ><Link to={MedicinePopup}>
                  Add Medicines</Link>
                </button>
                
              </div>

              <div className="bg-white h-[80vh] ml-8 mt-2 rounded-2xl shadow-xl flex flex-col items-center px-8">
                <div className="my-6">
                  <CalenderRecords />
                </div>

                <div className="bg-[#FEF8FD] h-[70%] w-full rounded-[24px] p-6 flex flex-col gap-3 overflow-y-visible">
                  <h1 className="font-semibold">Today's Medicine</h1>

                  <div className=" flex flex-row h-fit w-[100%] justify-around bg-white border-gray-200 border-2 rounded-[16px] ">
                      <div className='flex flex-row items-start h-full gap-3 overflow-y-auto text-left py-4 px-4 w-[80%]'>
                      <div className="flex flex-col px-10">
                        <p className="text-[18px] font-[500] ">
                          Before Breakfast
                        </p>
                        <p className="text-[16px] font-[500]">12:10</p>
                      </div>
                      {/** Individual medicine block */}
                      <div className="border-l-2 flex flex-col px-10 gap-4">
                        <p className="text-[#7E7E7E] text-[14px] font-[500]">
                          {" "}
                          Medicine 1{" "}
                        </p>

                        <div className="flex flex-col justify-center">
                          <div className="flex flex-row gap-10 py-0 justify-center align-middle text-[16px] font-[500]">
                            <div> Mathadol </div>

                            <div>5 mg</div>
                          </div>
                        </div>
                        </div>
                        </div>
                        
                          {/**  individual medicine block ends */}

                          {/** delete and add button */}
                          <div className='flex w-[20%] self-center justify-end px-4'>
                          <div className="relative flex flex-row py-10 gap-3 ">
                            <div className="flex bg-[#C31A7F33] rounded-[15px] px-2 py-2 items-center justify-center text-[16px]">
                              <RiDeleteBinLine />
                            </div>
                            <div className="flex bg-[#C31A7F33] rounded-[15px] px-2 py-2 items-center justify-center text-[16px]">
                              <MdOutlineEdit />
                            </div>
                          </div>
                        </div>
                        </div>
                        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicineReminder;
