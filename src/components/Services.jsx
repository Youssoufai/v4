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
                className='bg-[#f8eed3] text-black p-9 space-y-8'
            >
                <h1 className='text-4xl text-center mx-[27rem] m-4'
                    style={{
                        lineHeight: '40px'
                    }}
                >Stay updated with stories from our team</h1>
                <section
                    className='flex justify-center gap-8'
                >
                    <div
                        className='p-4'
                    >
                        <div
                            className='w-[333.32px] h-[234.66]'
                        >
                            <img src={img2}
                                className='w-full'
                                alt="" />
                        </div>
                    </div>
                    <div
                        className='p-4'
                    >
                        <div
                            className='w-[333.32px] h-[234.66]'
                        >
                            <img src={img3}
                                className='w-full'
                                alt="" />
                        </div>
                    </div>
                    <div
                        className='p-4'
                    >
                        <div
                            className='w-[333.32px] h-[234.66]'
                        >
                            <img src={img4}
                                className='w-full'
                                alt="" />
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Services