import React from 'react'
import NewNavigation from '../Components/NewNavigation'
import mountainExample from '../Photos/mountainExample.svg'
import WhyCanImage1 from '../Photos/WhyCanImage1.svg'
import WhyCanImage2 from '../Photos/WhyCanImage2.svg'
import WhyCanImage3 from '../Photos/WhyCanImage3.svg'
import WhyCanImage4 from '../Photos/WhyCanImage4.svg'
import LandingPageFooter from './LandingPageFooter'

const WhyCan = () => {
    return (
        <>
            {/* navbar */}
            <div className='flex items-center justify-center'>
                    <NewNavigation />
            </div>

            {/* animation images */}
            <div>
                <img className='object-cover' src={mountainExample} alt='mountain' />
            </div>

            {/* all content with images */}

            <div className='flex items-center justify-center pt-10'>
                <div className='w-[600px] flex flex-col items-center justify-center'>
                    <h1 className='text-[#084943] text-[36px] font-bold' >
                        Why CAN?
                    </h1>
                    <p className='text-center text-[#084943] text-[16px] pt-5'>On the day of my mother's diagnosis, I felt an overwhelming sense of loneliness and helplessness. I yearned for someone, perhaps a cancer survivor or someone knowledgeable about the disease, to reassure me that everything would be alright.</p>
                </div>

            </div>

            <div className='flex flex-row items-center justify-evenly py-20'>
                <div className='w-[560px]'>
                    <div>
                        <h1 className='text-[36px] text-[#084943] font-bold py-5'>Where it began..</h1>
                        <p className='text-[16px] text-[#084943]'>
                            <span className='font-bold'>
                                The need for CAN truly hit me on the day of the PET-CT scan.</span> There were six attendants accompanying my mother, and we were all gripped by fear. The mindset within my family was that cancer equated to death, pain, and immense suffering. We had allowed a difficult situation to become even more daunting in our minds, surrendering all hope. <span className='font-bold'> Each of us viewed my mother's condition as a ticking time bomb.</span>

                        </p>
                        <br>
                        </br>
                        <p className='text-[16px] text-[#084943]'>I was visibly scared and overcome with panic. The nurse recognized this and granted me permission to enter the PET-CT hall, which was normally off-limits due to radiation. Inside the waiting room, I encountered five or six fighters, some awaiting their turn for the scan while others were there for observation. Among them were both newcomers and seasoned veterans.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={WhyCanImage1} alt='WhyCanImage1' />
                </div>
            </div>

            <div className='flex flex-row items-center justify-evenly py-20'>
                <div>
                    <img src={WhyCanImage2} alt='WhyCanImage2' />
                </div>
                <div className='w-[415px]'>
                    <div>
                        <h1 className='text-[36px] text-[#084943] font-bold py-5'>A hope of light..</h1>
                        <p className='text-[16px] text-[#084943]'>These individuals attempted to engage in small talk, sensing the unease that permeated the room, striving to alleviate each other's discomfort. It was during this time that an elderly lady wearing a burqa noticed my mother's despair. Sensing the need for solace, she shared snippets of her own cancer journey with my mother.
                            <br></br>
                            <br></br> This remarkable woman proceeded to recount her experiences to everyone present, emphasizing that cancer was nothing to be afraid of. She mentioned that this was her seventh PET scan, having endured numerous rounds of chemotherapy, around 20 to 30 in total. Her narrative exuded an aura of ease and positivity, which infused everyone with hope and encouraged them to open up and share their own journeys.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-evenly py-20 '>
                <div className='w-[500px]'>
                    <div>
                        <h1 className='text-[36px] text-[#084943] font-bold py-5 '>The turning point</h1>
                        <p className='text-[16px] text-[#084943]'>
                            The PET-CT scan marked a turning point for my mother. After a prolonged period of silence, she spoke for the first time. Her words were filled with a newfound perspective, she said, <span className='font-bold'> "Agar aisa bhi chalta raha, to koi problem nahi hai, mein lad lungi."
                            </span>
                            <br>
                            </br>
                            <br />
                            Witnessing our mother's transformation ignited hope within our entire family and altered the course of our outlook. We were profoundly moved by this lady's intervention, and we yearn for her well-being wherever she may be. From the depths of our hearts, we express our gratitude to her.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={WhyCanImage3} alt='WhyCanImag3' />
                </div>
            </div>

            <div className='flex flex-row items-center justify-evenly'>
                <div>
                    <img src={WhyCanImage4} alt='WhyCanImage4' />
                </div>
                <div className='w-[400px]'>
                    <div>
                        <h1 className='text-[36px] font-bold text-[#084943]'>
                            Brave journey began
                        </h1>
                        <p className='text-[16px] text-[#084943]'>
                            Renewed with hope, we embarked on our journey to Bombay for treatment.
                        </p>
                    </div>
                </div>
            </div>

            {/* footer */}

            <div className='pt-10'>
                <LandingPageFooter />
            </div>
        </>
    )
}

export default WhyCan
