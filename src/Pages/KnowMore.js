import React from 'react'
import NewNavigation from '../Components/NewNavigation'
import ColorCells from '../Photos/3ColorCells.png'
import MadeOfCells from '../Photos/MadeOfCells.png'
import CellsDestroy from '../Photos/CellsDestroy.png'
import VerticalCells from '../Photos/VerticalCells.png'
import BrokenCells from '../Photos/BrokenCells.png'
import BodyImage from '../Photos/BodyImage.png'
import LandingPageFooter from './LandingPageFooter'
import icebergExample from '../Photos/icebergExapmple.png'

const KnowMore = () => {
    return (
        <>
        <div className='flex items-center justify-center'>
       
                <NewNavigation />
            
        </div>
            

            <div className='flex items-center justify-center pt-36'>
                <h1 className='text-[36px] font-roboto font-bold'>Know about <span className='text-[#B2437D]'>CANCER</span></h1>
            </div>


            {/* first upper part  content with images  */}

            <div className=' flex flex-row  justify-evenly py-10'>
                <div className='w-[400px]'>
                    <p className='text-[14px] text-[#084943] text-left font-roboto'><span className='font-bold'>Cancer is sort of like a sickness, but you can't catch it like you catch a cold.</span>Here's how it works! Every living thing is made up of tiny little guys called <span className='font-bold'>cells.</span></p>
                    <div className='flex items-center justify-center pt-10'>
                    <img src={ColorCells} alt='colorcells' />
                </div>
                </div>
                <div className='w-[400px]'>
                    <p className='text-[14px] text-[#084943] text-left font-roboto'>Cells are like blocks, but they put themselves together.<span className='font-bold'> One really cool thing about cells is that one cell can turn itself into two cells anytime it wants.</span></p>
                    <div className='flex items-center justify-center pt-10'>
                    <img src={MadeOfCells} alt='madeofcells' />
                </div>
                </div>
            </div>

            {/* pink cells with content */}

            <div className=' flex flex-row  justify-evenly py-10'>
                <div className='w-[400px]'>
                    <p className='text-[14px] text-[#084943] text-left font-roboto'><span className='font-bold'>Cancer is sort of like a sickness, but you can't catch it like you catch a cold.</span>Here's how it works! Every living thing is made up of tiny little guys called <span className='font-bold'>cells.</span></p>
                    <div className='flex items-center justify-center pt-10'>
                    <img src={CellsDestroy} alt='cellsdetroy' />
                </div>
                </div>
                <div className='w-[400px]'>
                    <p className='text-[14px] text-[#084943] text-left font-roboto'>Cells are like blocks, but they put themselves together.<span className='font-bold'> One really cool thing about cells is that one cell can turn itself into two cells anytime it wants.</span></p>
                    <div className=' flex items-center justify-center pt-10 '>
                    <img src={VerticalCells} alt='verticalsCells' />
                </div>
                </div>
            </div>

           
            {/* third content with images */}
            <div className=' flex flex-row  justify-evenly pt-10'>
                <div className='w-[400px] '>
                    <p className='text-[14px] text-[#084943]  font-roboto text-left'><span className='font-bold'>Cancer is sort of like a sickness, but you can't catch it like you catch a cold.</span>Here's how it works! Every living thing is made up of tiny little guys called <span className='font-bold'>cells.</span></p>
                    <div className='flex items-center justify-center pt-28'>
                        <img src={BrokenCells} alt='brokencells' />
                    </div>
                </div>
                <div className='w-[400px]'>
                    <p className='text-[14px] text-[#084943] text-left font-roboto'>Imagine if you were drawing and someone kept pushing your hand and scribbling all over your paper. It would be pretty hard to finish your drawing, wouldn't it?<br></br><span className='font-bold'>
                        That's what cancer is like. Cancer makes it really hard for healthy cells to do their jobs. Pretty soon, the body part that has cancer stops working right. Not cool, cancer.</span></p>
                        <div className='   pt-10'>
                        <img  src={BodyImage} alt='bodyimage' />

                        </div>
                </div>
            </div>

            <div className='flex items-center justify-center py-10'>
                <h1 className='text-[40px] font-bold text-[#0094C3]'>ICE-BERG ANALYSIS</h1>
            </div>

            <div>
                <img src={icebergExample} alt='iceberg' />
            </div>

            <div className='pt-10'>
                <LandingPageFooter />
            </div>

        </>
    )
}

export default KnowMore
