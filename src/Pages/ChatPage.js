import React, { useState } from 'react'
import HomeNav from '../Components/HomeNav'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineVideoCamera } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BsTelephone } from 'react-icons/bs'
import { ImAttachment } from 'react-icons/im'
import { AiOutlineSend } from 'react-icons/ai'
import { GrMicrophone } from 'react-icons/gr'
import account from '../Photos/account.jpg'
import account2 from '../Photos/account2.jpg'

const ChatPage = () => {

    const [chats, setChats] = useState(true)

    const toggleReq = () => {
        setChats(!chats)
    }

    //chats
    const [text, setText] = useState("")
    const [result, setResult] = useState([])

    const inputTaken = (event) => {
        setText(event.target.value)
    }

    const listOfItems = () => {
        setResult((oldItems) => {
            return [...oldItems, text]
        })
        setText("")
    }

    return (
        <>
            <div className=' h-[100%]'>
                <div>
                    <HomeNav />
                </div>

                {/* background */}
                <div className='bg-[#FEF8FD] h-[100vh]'>

                    {/* chat space */}
                    <div className=' h-full flex pt-[2%] justify-center pl-[5%]'>
                        <div className='h-[85%] w-[85%] bg-white rounded-3xl overflow-hidden shadow-2xl'>

                            <div className='flex'>
                                {/* left bar */}
                                <div className='pt-4 px-4 h-[80vh] w-[25%] border-r-2'>

                                    <div className='flex items-center gap-2 mt-3 p-2 shadow-2xl bg-white rounded-3xl'>
                                        <FiSearch color='black' />
                                        <input placeholder='Search' className='outline-none' />
                                    </div>

                                    <h2 className='mt-5 font-semibold'>Group's</h2>


                                    {/* persons */}
                                    <div className='flex gap-4 pt-2'>
                                        <div className=' w-[20%] flex flex-col items-center'>
                                            <img src={account} className='rounded-full' />
                                            <p className='font-semibold'>Sierra</p>
                                            <p className='text-xs'>Group</p>
                                        </div>
                                        <div className=' w-[20%] flex flex-col items-center'>
                                            <img src={account} className='rounded-full' />
                                            <p className='font-semibold'>Sierra</p>
                                            <p className='text-xs'>Group</p>
                                        </div>
                                        <div className=' w-[20%] flex flex-col items-center'>
                                            <img src={account} className='rounded-full' />
                                            <p className='font-semibold'>Sierra</p>
                                            <p className='text-xs'>Group</p>
                                        </div>
                                        <div className=' w-[20%] flex flex-col items-center'>
                                            <img src={account} className='rounded-full' />
                                            <p className='font-semibold'>Sierra</p>
                                            <p className='text-xs'>Group</p>
                                        </div>
                                    </div>

                                    {/* chats */}
                                    <div className='flex pt-3 justify-between px-5 relative'>
                                        <div className={chats ? 'font-bold text-[#8B1539] cursor-pointer' : 'font-bold text-[#C4C4C4] cursor-pointer'} onClick={toggleReq}>
                                            <h2 className=''>Chat</h2>
                                            <p className='absolute top-[50%]'>_______________</p>
                                        </div>
                                        <div className={!chats ? 'font-bold text-[#8B1539] cursor-pointer' : 'font-bold text-[#C4C4C4] cursor-pointer'} onClick={toggleReq}>
                                            <h2>Requests</h2>
                                            <p className='absolute top-[50%] right-[7%]'>_______________</p>
                                        </div>
                                    </div>

                                    {chats && (<div className='flex pt-4 items-center'>
                                        <img src={account2} className='h-[20%] w-[20%] rounded-full' />
                                        <div>
                                            <div className='flex justify-between items-center w-[115%] px-1'>
                                                <h1 className='font-bold'>Iqra</h1>
                                                <p className='text-xs'>Yesterday</p>
                                            </div>

                                            <p className='px-1 text-xs'>Hey! , how are you</p>

                                        </div>
                                    </div>)}

                                    {!chats && (<div className='flex pt-4 items-center'>
                                        <img src={account} className='h-[20%] w-[20%] rounded-full' />
                                        <div>

                                            <div className='flex justify-between items-center w-[100%] px-1'>
                                                <h1 className='font-bold'>Iqra</h1>
                                                <p className='text-xs'>Yesterday</p>
                                            </div>

                                            <p className='px-1 text-xs'>Hey! , how are you</p>

                                            <div className='flex px-1 gap-2 pt-1 items-center'>
                                                <div className='border-[#C31A7F] rounded-3xl border-2 px-3 text-[#C31A7F]'>Reject</div>
                                                <div className='bg-[#efc419d4] px-3 p-1 rounded-3xl text-white'>Accept</div>
                                                <div className=' shadow-xl'> <AiOutlineEye /> </div>
                                            </div>

                                        </div>
                                    </div>)}


                                </div>

                                {/* right side */}
                                <div className='w-full flex flex-col'>

                                    <div className='flex h-[12vh]'>
                                        <div className=' w-full flex px-6 items-center  '>
                                            <img src={account} className='rounded-full w-[6%]' />
                                            <h2 className='px-2 font-bold'>Sierra's Group</h2>
                                        </div>

                                        <div className='flex gap-4 items-center mr-6'>
                                            <AiOutlineVideoCamera />
                                            <BsTelephone />
                                            <BsThreeDotsVertical />
                                        </div>
                                    </div>

                                    {/* main chat */}
                                    <div className='h-[69vh] bg-[#FFF8FC] '>
                                        <div className='flex items-center absolute bottom-[10%] w-[63%] justify-between '>

                                            <div className='bg-white w-[110vh] p-2 px-4  shadow-2xl rounded-2xl flex justify-between items-center mx-5 '>
                                                <input placeholder='Type your message....' className='w-[90%] outline-none' onChange={inputTaken} value={text} />
                                                <ImAttachment color='#C4C4C4' />
                                            </div>

                                            <div className='flex items-center justify-center mr-6 gap-3'>
                                                <div onClick={listOfItems} className='bg-[#EFC319] p-2 rounded-full shadow-gray-950 shadow-2xl'> <AiOutlineSend size={25} color='white' /></div>
                                                <div className='bg-[#ffffff] p-2 rounded-full shadow-gray-950 shadow-2xl'> <GrMicrophone size={25} /></div>
                                            </div>

                                        </div>

                                        <div className='absolute right-[12%] bottom-[20%]  h-[55vh] overflow-y-scroll flex flex-col-reverse items-end '>
                                            {result.reverse().map((itemValue, index) => {
                                                return (
                                                    <p className='m-2 bg-[#86C6C5] p-2 w-max rounded-xl text-right text-whi' key={index}>
                                                        {itemValue}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ChatPage