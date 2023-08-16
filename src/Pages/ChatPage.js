import React, { useEffect, useRef, useState } from "react";
import HomeNav from "../Components/HomeNav";
import { FiSearch } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { IoIosInformationCircleOutline, IoIosInformationCircle, } from "react-icons/io";
import { BsTelephone, BsCheck2All, BsThreeDotsVertical, BsChat } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { AiOutlineSend } from "react-icons/ai";
import { GrMicrophone } from "react-icons/gr";
import commentIcon from '../Photos/commentIcon.png'
import account from "../Photos/account.jpg";
import account2 from "../Photos/account2.jpg";
import SideMenu from "../Components/SideMenu";
import Page from "../Layouts/Pages";
import sendIcon from '../Photos/sendIcon.png'
import micIcon from '../Photos/micIcon.png'
import smileIcon from '../Photos/smileIcon.png'
import downloadIcon from '../Photos/downloadIcon.svg'
import crossIcon from '../Photos/crossIcon.svg'
import leftarrowIcon from '../Photos/leftarrowIcon.svg'
import rightarrowIcon from '../Photos/rightarrowIcon.svg'
import climbeverst from '../Photos/climberEverest.webp'
import c3 from '../Photos/c3.png'
import c4 from '../Photos/c4.png'


const ChatPage = () => {
  const [chats, setChats] = useState(true);

  const toggleReq = () => {
    setChats(!chats);
  };

  //chats
  const [text, setText] = useState("");
  const [sendImage, setSendImage] = useState(null)
  const [result, setResult] = useState([]);
  const [imageResult, setImageResult] = useState([])
  const [incoming, setIncoming] = useState([])
  const [Info, setInfo] = useState(true)
  const [viewAll, setViewAll] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [muteShow, setMute] = useState(false)
  const [toggleStates, setToggleStates] = useState(false);
  const threeDotsOutClick = useRef(null);
  const [ViewUsers, setViewUser] = useState(false)
  const ViewUserOutClick = useRef(null)
  const [Reportuser, setReportUser] = useState(false)

  const handleReportuser = () => {
    setReportUser(!Reportuser)
  }

  const handleViewUserSettings = () => {
    setViewUser(!ViewUsers)
  }

  const handleClickOutisideViewUser = (event) => {
    if(ViewUserOutClick.current && !ViewUserOutClick.current.contains(event.target)){
      setViewUser(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click' ,handleClickOutisideViewUser, true )
    return () => {
      document.removeEventListener('click',handleClickOutisideViewUser,true)
    }
  },[])

  const handleClickOutsidethreeDots = (event) => {
    if (threeDotsOutClick.current && !threeDotsOutClick.current.contains(event.target)) {
      setMute(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsidethreeDots, true);
    return () => {
        document.removeEventListener('click', handleClickOutsidethreeDots, true);
    };
}, []);


  const toggleButton = () => {
    setToggleStates(!toggleStates)
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? viewAllImmages.length - 1 : prevIndex - 1
    );
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === viewAllImmages.length - 1 ? 0 : prevIndex + 1
    )
  }


  const handleViewClick = () => {
    setViewAll(!viewAll)
  }

  const handleMuteClick = () => {
    setMute(!muteShow)
  }

  const handleClick = () => {
    setInfo((prevState) => !prevState);
  }

  const inputTaken = (event) => {
    setText(event.target.value);
  };

  const HandleImageSend = (e) => {
    const file = e.target.files[0]
    console.log(file)
    setSendImage(URL.createObjectURL(file))

  }

  const listOfItems = () => {
    setResult((oldItems) => {
      return [...oldItems, text];
    });
    setText("");

  };

  const listOfImage = () => {
    setImageResult((oldImage) => {
      return [...oldImage, sendImage]
    });
    console.log(imageResult)
    setSendImage('')

  }

  const viewAllImmages = [
    {
      id: 1,
      image: climbeverst
    },
    {
      id: 2,
      image: c3
    },
    {
      id: 3,
      image: c4
    },

  ]

  const Groups = [
    {
      id: 1,
      image: 'account2.jpg',
      name: 'Nihal',
      groupName: 'Group1'
    },
    {
      id: 2,
      image: 'account2.jpg',
      name: 'Sierra',
      groupName: 'Group1'
    },
    {
      id: 3,
      image: 'account2.jpg',
      name: 'Naveen',
      groupName: 'Group1'
    },
    {
      id: 4,
      image: 'account2.jpg',
      name: 'Naveen',
      groupName: 'Group1'
    },
    {
      id: 5,
      image: 'account2.jpg',
      name: 'Naveen',
      groupName: 'Group1'
    },
    {
      id: 6,
      image: 'account2.jpg',
      name: 'Naveen',
      groupName: 'Group1'
    },

  ]

  const AllChats = [
    {
      id: 1,
      image: 'account2.jpg',
      name: 'Nihal fasadffdsa',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 2,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 3,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 4,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 5,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 6,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
  ]

  const AllRequests = [
    {
      id: 1,
      image: 'account2.jpg',
      name: 'Nihal fasadffdsa',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 2,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 3,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 4,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },

  ]

  const GroupMembers = [
    {
      id: 1,
      name: 'Ananya Nagpal',
      image: 'account2.jpg'
    },
    {
      id: 2,
      name: 'Ananya Nagpal',
      image: 'account2.jpg'
    },
    {
      id: 3,
      name: 'Ananya Nagpal',
      image: 'account2.jpg'
    },
    {
      id: 4,
      name: 'Ananya Nagpal',
      image: 'account2.jpg'
    },
  ]


  return (
    <Page
      pageContent={
        <>
          {/* background */}
          <div className="bg-[#FEF8FD] h-full flex items-center  px-16   ">
            {/* chat space */}
            <div className="  w-full    ">
              <div className="  bg-white  rounded-3xl  shadow-2xl">
                <div className="flex h-full w-full">
                  {/* left bar */}
                  <div className="pt-4 px-4   w-1/4 border-r-2">
                    <div className="flex  items-center gap-2 mt-3 p-2 shadow-2xl bg-white rounded-3xl">
                      <FiSearch color="black" />
                      <input placeholder="Search" className="outline-none overflow-hidden" />
                    </div>

                    <h2 className="mt-5 font-semibold">Group's</h2>

                    {/* persons */}
                    {/* <div className="flex  overflow-x-scroll pt-2">
                      {Groups.map((item) => (
                        <div key={item.id} className=" mx-6 flex flex-col items-center">
                          <img src={item.image} className="rounded-full" />
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-xs">{item.groupName}</p>
                        </div>
                      ))}

                      
                    </div> */}
                    <div className="flex overflow-x-scroll py-4 w-full" >
                      <div className="flex" style={{ width: "fit-content" }}>
                        {Groups.map((item) => (
                          <div key={item.id} className="w-24  flex flex-col items-center">
                            <div className="w-14 h-14 border-red-600 border-2 rounded-full flex items-center justify-center">
                              <img
                                src={item.image}
                                alt={item.name} // Added alt attribute for accessibility
                                className="w-12 h-12 rounded-full object-cover" // Adjust size of the image
                              />
                            </div>

                            <p className="font-semibold text-[14px]">{item.name}</p>
                            <p className=" text-[12px]">{item.groupName}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* chats */}
                    <div className=" flex pt-3 justify-between  relative">
                      <div
                        className={
                          chats
                            ? "font-bold border-b-2 w-1/2 flex items-center justify-center transform-all ease-in-out duration-500 border-[#8B1539] text-[#8B1539] cursor-pointer"
                            : "font-bold border-b-2 w-1/2 flex items-center justify-center border-[#C4C4C4] text-[#C4C4C4] cursor-pointer"
                        }
                        onClick={toggleReq}
                      >
                        <h2 className="">Chat</h2>

                      </div>
                      <div
                        className={
                          !chats
                            ? "font-bold border-b-2 w-1/2 flex items-center justify-center transform-all ease-in-out duration-500 border-[#8B1539] text-[#8B1539] cursor-pointer"
                            : "font-bold border-b-2 w-1/2 flex items-center justify-center border-[#C4C4C4] text-[#C4C4C4] cursor-pointer"
                        }
                        onClick={toggleReq}
                      >
                        <h2 className="">Requests</h2>

                      </div>
                    </div>

                    {/* Requests */}

                    {chats && (
                      <div className="flex flex-col mt-2 gap-6 h-[300px]    overflow-y-scroll " style={{}}>

                        {AllChats.map((item) => (
                          <div className="flex flex-row items-center gap-5" key={item.id}>
                            <div className="relative">
                              <img
                                src={item.image} alt={item.name}
                                className="h-12 w-12 rounded-full  "
                              />
                              <div className=" absolute top-0 right-0 h-3 w-3 flex items-center justify-center rounded-full text-[10px] text-white font-poppins bg-[#C31A7F]">2</div>
                              <div className=" absolute bottom-0 right-2 h-2 w-2 flex items-center justify-center rounded-full text-[10px] text-white font-poppins bg-[#11D800]"></div>
                            </div>

                            <div className="flex flex-row gap-3 justify-between">
                              <div className="flex flex-col     ">
                                <h1 className=" text-[14px] font-poppins"> {item.name.length > 12 ? item.name.slice(0, 12) + "..." : item.name}</h1>
                                <p className=" text-[12px]  font-poppins">{item.message}</p>
                              </div>
                              <p className="text-[10px]  ">{item.time}</p>
                            </div>
                            <BsCheck2All className="flex item-center justify-center" color="#C4C4C4" size={13} />
                          </div>
                        ))}


                      </div>
                    )}

                    {/* Requests */}

                    {!chats && (

                      <div className="overflow-y-scroll h-[310px]">
                        {AllRequests.map((item) => (
                          <div className="">

                            <div className="flex flex-row gap-4 pt-4 items-center " key={item.id}>
                              <img
                                src={item.image} alt="none"
                                className="h-10 w-10 rounded-full"
                              />
                              <div>
                                <div className="flex flex-row item-center gap-3 justify-between">
                                  <div className="flex flex-col items-start     ">
                                    <h1 className="font-bold">{item.name.length > 12 ? item.name.slice(0, 12) + "..." : item.name}</h1>
                                    <p className=" text-[12px] font-poppins">{item.message}</p>
                                  </div>
                                  <p className="text-[10px] text-center">{item.time}</p>
                                </div>


                              </div>
                            </div>
                            <div className="flex justify-evenly  pt-2 pl-7  items-center">
                              <div className="cursor-pointer rounded-3xl   text-[#C31A7F]">
                                Reject
                              </div>
                              <div className="  cursor-pointer rounded-3xl text-[#efc419d4]">
                                Accept!
                              </div>
                              <div className="h-6 w-6 bg-white flex items-center justify-center rounded-full   " style={{
                                boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.5)'
                              }}>
                                {" "}
                                <AiOutlineEye />{" "}
                              </div>
                            </div>
                            <hr className="mt-4" />
                          </div>

                        ))}
                      </div>

                    )}
                  </div>

                  {/* right side */}
                  <div className=" w-full ">


                    {/* main chat */}
                    <div className=" bg-[#F5F5F5] h-full relative overflow-hidden rounded-r-3xl  flex flex-col justify-between  ">
                      <div className="flex bg-white h-[10vh]">
                        <div className=" w-full flex px-6 items-center  ">
                          <img src={account} className="rounded-full w-[6%]" />
                          <h2 className="px-2 font-bold">Sierra's Group</h2>
                        </div>

                        <div className="flex gap-4 items-center mr-6">
                          <AiOutlineVideoCamera />
                          <BsTelephone />
                          <div onClick={handleClick}>
                            {Info ? <IoIosInformationCircleOutline /> : <IoIosInformationCircle color="#C31A7F" />}
                          </div>
                        </div>
                      </div>


                      {/* <div className="left-[5%] bottom-[20%]  h-80 w-full overflow-y-scroll flex flex-col-reverse items-end">
                                {incoming.reverse().map((message, index) => {
                                  return (
                                    <div className="flex flex-row items-center gap-4" key={index}>
                                      <img src={account2} alt='incomingImage' />
                                      <p className="m-2 bg-white">
                                        {message}
                                      </p>
                                    </div>
                                  )
                                })}
                              </div> */}


                      {/* outgoing message */}

                      <div className="  pr-10  h-80 w-full overflow-y-scroll flex flex-col-reverse items-end ">
                        {result.reverse().map((itemValue, index) => {
                          if (itemValue) {
                            return (
                              <div>
                                <p
                                  className="m-2 bg-[#86C6C5] p-2 w-max rounded-xl text-right text-white"
                                  key={index}
                                  style={{ borderRadius: '10px 10px 0px 10px' }}
                                >
                                  {itemValue}
                                </p>

                                {/* <div className="flex justify-center mt-2" >
                            <img
                              src={sendImage}
                              alt="Selected"
                              style={{ maxWidth: "200px" }}
                              onChange={HandleImageSend} // Adjust the size as per your requirement
                            />
                          </div> */}
                              </div>

                            )
                          }


                        })}
                        {/* {sendImage && (
                          <div className="flex justify-center mt-2">
                            <img
                              src={sendImage}
                              alt="Selected"
                              style={{ maxWidth: "200px" }}
                              onChange={HandleImageSend} // Adjust the size as per your requirement
                            />
                          </div>
                        )} */}

                        {imageResult.reverse().map((item, index) => {
                          if (item) {
                            return (
                              <div className="flex justify-center mt-2" key={index}>
                                <img
                                  src={item}
                                  alt="Selected"
                                  style={{
                                    maxWidth: "100px",
                                    borderRadius: '20px 20px 0px 20px'
                                  }}
                                // Adjust the size as per your requirement
                                />
                              </div>
                            )
                          }

                        })}
                      </div>

                      <div className="ml-10 flex flex-row items-center">
                        <img className="w-12 h-12 rounded-full " src={account2} alt='incomingImage' style={{ boxShadow: '0px 5px 15px 0px rgba(139, 21, 57, 0.50)' }} />
                        <p className="m-2 bg-white p-2 w-max rounded-xl text-right text-black text-[14px] font-poppins " style={{ borderRadius: '10px 10px 10px 0px' }}>message</p>
                      </div>
                      <div className="flex flex-row   w-full mb-7">
                        <div className="bg-white w-full p-2 px-4 shadow-2xl rounded-2xl flex justify-between items-center mx-5">
                          <input
                            placeholder="Type your message...."
                            className="w-[90%] outline-none"
                            onChange={inputTaken}
                            value={text}
                          />
                          {/* <ImAttachment color="#C4C4C4" /> */}
                          <label>
                            <input
                              type="file"
                              accept="image/*" // Specify the file types you want to allow
                              style={{ display: "none" }}
                              onChange={HandleImageSend}
                            />
                            <ImAttachment color="#C4C4C4" />
                          </label>
                        </div>

                        <div className="flex relative items-center justify-center mr-6 gap-3">
                          <div
                            onClick={() => { listOfItems(); listOfImage(); }}
                            className="bg-[#EFC319] p-2 rounded-full shadow-gray-950 shadow-2xl"
                          >
                            {" "}
                            <AiOutlineSend size={20} color="white" />
                          </div>
                          <div className="bg-[#ffffff] p-2 rounded-full shadow-gray-950 shadow-2xl">
                            {" "}
                            <GrMicrophone size={20} />
                          </div>
                        </div>
                      </div>



                    </div>

                  </div>
                  {!Info && (
                    <div className="bg-white rounded-3xl w-[450px] overflow-hidden px-4  relative" >
                      <div className='absolute right-5 top-5'>
                        <BsThreeDotsVertical className="cursor-pointer" onClick={handleMuteClick} />
                      </div>

                      {muteShow && (
                        <div className="absolute top-5 right-10 w-[160px] p-4 bg-white flex flex-col  justify-start gap-4 " ref={threeDotsOutClick} style={{ boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.10)' }}>
                          <div className="flex flex-row item-center justify-between">
                            <p className="text-[14px] text-[#484848] font-poppins">Mute</p>
                            <div>
                              <div
                                className={`flex rounded-[30px] w-[45px] p-1 ${toggleStates ? ' bg-[#C31A7F] justify-end' : 'justify-start bg-[#E2E2E2]'
                                  }`}
                                style={{ boxShadow: '0px 15px 30px rgba(139, 21, 57, 0.10' }}
                                onClick={toggleButton}
                              >
                                <div className='bg-[#fff] text-white rounded-[100%] w-[20px] h-[20px]' ></div>
                              </div>

                            </div>

                          </div>
                          <hr />
                          <div className="flex flex-col gap-1">
                            <p className="text-[14px] text-[#484848] font-poppins">Select messages</p>
                            <p className="text-[14px] text-[#484848] font-poppins">Clear messages</p>
                          </div>
                        </div>
                      )}
                      <div>
                        <div className="flex flex-col items-center gap-2 justify-center pt-7">
                          <img className="h-14 w-14 object-cover rounded-full " src={account} alt="none" />
                          <h1 className="text-[14px] font-poppins font-semibold">Shriniwasan’s Group</h1>
                          <p className="text-[12px] font-poppins ">Group Members 5/7</p>
                          <div className="flex flex-row gap-3">
                            <AiOutlineVideoCamera className="cursor-pointer" size={13} />
                            <BsTelephone className="cursor-pointer" size={13} />
                          </div>
                          <p className="text-[10px] font-poppins text-[#7E7E7E]">Group Create by 18/06/2023 </p>
                          <div className="w-full h-24 flex flex-col gap-3  bg-white rounded-3xl"
                            style={{ boxShadow: '0px 10px 30px 0px rgba(139, 21, 57, 0.10)' }}>
                            <div className="flex flex-row px-5 pt-1 justify-between">
                              <p className="text-[10px] font-semibold font-poppins">Media Shared in the group</p>
                              <p onClick={handleViewClick} className="text-[10px] font-poppins underline text-[#4B65C2] cursor-pointer">View All</p>
                            </div>

                            {viewAll && (
                              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50  ">

                                <div className="bg-white w-1/2 p-4 rounded-[20px]  ">
                                  <div className="flex flex-row items-center justify-between px-4">
                                    <div className="flex flex-row items-center gap-2">
                                      <img className="w-10 h-10 rounded-full" src={account2} alt="accountimage" />
                                      <p className="text-[14px] font-poppins font-semibold">Shriniwasan’s Group</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                      <img className="w-8" src={downloadIcon} alt='download' />
                                      <img onClick={handleViewClick} className="w-8 cursor-pointer" src={crossIcon} alt="cross" />
                                    </div>
                                  </div>

                                  <div className="pt-5 ">

                                    <div className="flex flex-row items-center justify-between">
                                      <img
                                        className="cursor-pointer w-20"
                                        src={leftarrowIcon}
                                        alt="leftarrow"
                                        onClick={handlePrevImage}
                                      />

                                      <div className=" ">
                                        <img
                                          className="max-w-[600px] max-h-[300px] object-cover"
                                          src={viewAllImmages[currentImageIndex].image}
                                          alt="slide"
                                        />
                                      </div>
                                      <img
                                        className="cursor-pointer w-20"
                                        src={rightarrowIcon}
                                        alt="rightarrow"
                                        onClick={handleNextImage}
                                      />
                                    </div>

                                  </div>

                                  <div className="flex flex-row items-center justify-center gap-4 py-10">
                                    {viewAllImmages.map((item) => (
                                      <div key={item.id} className="">
                                        <img className="max-w-[200px] max-h-[100px]" src={item.image} alt="media" />
                                      </div>
                                    ))}
                                  </div>


                                </div>

                              </div>
                            )}

                            <div className="flex flex-row items-center justify-evenly ">
                              <img className="h-12 w-12 object-cover rounded-full " src={account} alt="none" style={{ boxShadow: '0px 5px 15px 0px rgba(139, 21, 57, 0.50)' }} />
                              <img className="h-12 w-12 object-cover rounded-full " src={account} alt="none" style={{ boxShadow: '0px 5px 15px 0px rgba(139, 21, 57, 0.50)' }} />
                              <img className="h-12 w-12 object-cover rounded-full " src={account} alt="none" style={{ boxShadow: '0px 5px 15px 0px rgba(139, 21, 57, 0.50)' }} />
                            </div>

                          </div>
                        </div>
                        <h1 className="text-[12px] font-poppins font-semibold pl-3 pt-2">Group Members</h1>
                        <div className="pt-2">
                          <div className="flex flex-row gap-4 items-center ">
                            <div className="h-10 w-10 rounded-full border-2 border-red-500 flex items-center justify-center">
                              <img className="h-8 w-8 rounded-full object-cover " src={account} alt='none' />
                            </div>
                            <p className="text-[10px] font-poppins font-semibold text-[#7E7E7E]">You</p>

                          </div>
                          <hr className="mt-2" />
                        </div>
                        <div className="h-[220px] overflow-y-scroll pr-3 relative ">
                          {GroupMembers.map((item) => (
                            <div className="" >
                              <div className="pt-2 flex flex-row justify-between items-center" key={item.id}>

                                <div className="flex flex-row gap-4 items-center ">
                                  <div className="h-10 w-10 rounded-full border-2 border-red-500 flex items-center justify-center">
                                    <img className="h-8 w-8 rounded-full object-cover " src={item.image} alt='none' />
                                  </div>
                                  <p className="text-[10px] font-poppins font-semibold text-[#7E7E7E]">{item.name}</p>

                                </div>
                                <div className="flex flex-row gap-1">
                                  {/* <img src={commentIcon} className="" alt="chat" /> */}
                                  <BsChat className="cursor-pointer" size={13} />
                                  <AiOutlineVideoCamera className="cursor-pointer" size={13} />
                                  <BsTelephone className="cursor-pointer" size={13} />
                                  <BsThreeDotsVertical className="cursor-pointer" size={13} onClick={handleViewUserSettings} />
                                </div>

                                
                                

                              </div>
                              <hr className="mt-2" />
                            </div>
                          ))}
                          {ViewUsers && (
                                  <div className="absolute top-10 right-5 bg-white w-[100px] p-1" style={{ boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.10)' }} ref={ViewUserOutClick}>
                                  <div className="flex flex-col items-center justify-center gap-3">
                                      <p className=" text-[12px] text-[#7E7E7E] cursor-pointer ">View Profile</p>
                                      <p className=" text-[12px] text-[#7E7E7E] cursor-pointer " onClick={handleReportuser}>Report</p>
                                      <p className=" text-[12px] text-[#7E7E7E] cursor-pointer ">Block</p>
                                      <p className="text-[#C31A7F] text-[12px] cursor-pointer">Remove as friend</p>
                                  </div>
                                </div>
                                )}
                        </div>



                      </div>

                    </div>

                  )}
                </div>
              </div>
            </div>
          </div>
          {Reportuser && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="w-[400px] bg-white p-4 flex flex-col gap-4 rounded-[20px]">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-[20px] font-poppins text-[#C31A7F]">Report Ananya Nagpal</h1>
                      <p className="text-[14px] font-poppins text-[#7E7E7E]">The last 5 message from this user will be forwarded to CAN. This user will not be notified.</p>
                      <div className="flex flex-row items-center gap-2">
                      <input className="accent-[#C31A7F]" type="checkbox" />
                      <p className="text-[14px] text-[#7E7E7E] font-poppins">Block user and delete chat</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 justify-end">
                      <button className="w-20 h-10 border border-[#7E7E7E] rounded-[10px] text-[14px] font-poppins" onClick={handleReportuser}>Cancel</button>
                      <button className="w-20 h-10 bg-[#C31A7F] text-white rounded-[10px] text-[14px] font-poppins" onClick={handleReportuser}>Report</button>
                    </div>
                </div>
            </div>
          )}
        </>
      }
    />
  );
};

export default ChatPage;
