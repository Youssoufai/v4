import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';
import Carousel from './Carousel';
import img from "../assets/slide01.jpg"
import img2 from "../assets/water1.webp"
import img3 from "../assets/ovation.webp"
import img4 from "../assets/water3.webp"
'../assets/3.png'
'../assets/4.png'
const slides = [

]
const Services = () => {
    return (
        <>
            <section
                className='bg-[#f8eed3] text-black p-9 space-y-8 h-full'
            >
                <h1 className='text-4xl text-center m-4'
                    style={{
                        lineHeight: '40px'
                    }}
                >Stay updated with stories from our team</h1>
                <section
                    className='flex flex-col md:flex-row items-center justify-center gap-8'
                >
                    <div
                        className='p-4 space-y-8 text-center flex justify-center flex-col items-center'
                    >
                        <div
                            className='w-[333.32px] h-[234.66]'
                        >
                            <img src={img2}
                                className='w-full'
                                alt="" />
                        </div>
                        <h3 className='text-blue'>Stories from the field</h3>
                        <h1 className='font-bold text-2xl'>The Journey of Your Donation</h1>
                        <p>Watch this video to see how your donation turns into water, sanitation, and hygiene resources that transform entire communities and impact more people than you know.</p>
                        <a href="#">Learn More</a>
                    </div>
                    <div
                        className='p-4 space-y-8 text-center flex justify-center flex-col items-center'
                    >
                        <div
                            className='w-[333.32px] h-[234.66]'
                        >
                            <img src={img3}
                                className='w-full'
                                alt="" />
                        </div>
                        <h3 className='text-blue'>Stories from the field</h3>
                        <h1 className='font-bold text-2xl'>The Journey of Your Donation</h1>
                        <p>Watch this video to see how your donation turns into water, sanitation, and hygiene resources that transform entire communities and impact more people than you know.</p>
                        <a href="#"
                            className='relative after:absolute after:bg-gold after:h-3 after:w-[100%]'
                        >Learn More</a>
                    </div>
                    <div
                        className='p-4 space-y-8 text-center flex justify-center flex-col items-center'
                    >
                        <div
                            className='w-[333.32px] h-[234.66]'
                        >
                            <img src={img4}
                                className='w-full'
                                alt="" />
                        </div>
                        <h3 className='text-blue'>Stories from the field</h3>
                        <h1 className='font-bold text-2xl'>The Journey of Your Donation</h1>
                        <p>Watch this video to see how your donation turns into water, sanitation, and hygiene resources that transform entire communities and impact more people than you know.</p>
                        <a href="#"
                            className='relative after:absolute after:bg-gold after:h-3 after:w-[100%]'
                        >Learn More</a>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Services