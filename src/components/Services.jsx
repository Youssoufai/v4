import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';
import Carousel from './Carousel';
import img from "../assets/slide01.jpg"
'../assets/3.png'
'../assets/4.png'
const slides = [

]
const Services = () => {
    return (
        <>
            <section
                className='p-12 h-full bg-neutral'
            >
                <div
                    className='space-y-8 flex flex-col items-center'
                >
                    <h1
                        className='text-gold text-2xl text-center w-[200px]'

                    >News & Events</h1>
                    <h1
                        className='text-center text-3xl'
                    >Stay updated with stories from our team</h1>
                </div>
                <div>

                    <div
                        className='flex flex-col md:flex-row justify-center items-center gap-8 md:justify-between p-9 '

                    >
                        <div
                            className='space-y-5 p-9 w-[350px] text-center flex flex-col items-center shadow-md  shadow-navyBlue rounded-lg md:shadow-none'
                            data-aos="fade-left"
                        >
                            <img src={img}
                                className='w-[300px] h-[230px]'
                                alt="" />
                            <h1 className="text-gold font-bold">Versalink at Youth Agenda Submit</h1>
                            <p>
                                Versalink made a strong showing at the Youth Agenda Summit 2.0 on October 20th, 2023. Our founder took center stage, granting a captivating interview where he emphasized the critical role young people play in shaping Nigeria's future. Overall the Summit was an insightful discussion.
                            </p>
                        </div>
                        <div
                            className='space-y-5 w-[350px] text-center flex flex-col items-center shadow-md p-9 shadow-navyBlue rounded-lg md:shadow-none '
                            data-aos="fade-up"
                        >
                            <img src={img}
                                className='w-[300px] h-[230px]'
                                alt="" />
                            <h1 className="text-black font-bold"><h1 className="text-gold font-bold">Versalink at Youth Agenda Submit</h1></h1>
                            <p>
                                Versalink's Legislative Conference welcomed esteemed guest Honourable Tanko Adamu. His insights highlighted the vital role of the legislature in progress, particularly regarding education funding. A key discussion point was the push to raise the education budget to 26%, echoing UNESCO's recommendation.
                            </p>
                        </div>
                        <div
                            className='space-y-5 w-[350px] text-center flex flex-col items-center shadow-md p-9 shadow-navyBlue rounded-lg md:shadow-none'
                            data-aos="fade-right"
                        >
                            <img src={img}
                                className='w-[300px] h-[230px]'
                                alt="" />
                            <h1 className="text-gold font-bold">Versalinks Ramadan Event</h1>
                            <p>

                                Versalinks hosted a successful Ramadan lecture series at Baze University under the theme "Holding Unto Our Deen in Today's World."

                                The series kicked off on March 15th with an enlightening lecture by renowned scholar Abu jabir Abdullah, known as Pen Abdul. The series concluded with a final lecture by Nasiruddin Shuraim Abdulmumin, known as Nshuraim.

                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services