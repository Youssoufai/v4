import React, { useEffect } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { AOS } from 'aos';
import 'aos/dist/aos.css';
const Testimonials = () => {
    return (
        <>
            <section
                className='p-12 space-y-12 bg-brown'
                data-aos-duration="3000">
                <h1
                    className='text-4xl text-center text-gold'
                >Our Core</h1>
                <section
                    className='flex flex-col md:flex-row text-center gap-8 p-8'
                >
                    <div
                        className=' space-y-3'
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0"
                    >
                        <h1
                            className='text-2xl text-gold'
                        >Our Vision</h1>
                        <p
                            className='font-san text-white'
                        >A Nigeria where audacious servant leaders are committed to promoting individual wholeness and taking responsibility for their communities</p>
                    </div>

                    <div
                        className=' space-y-3'
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0"
                    >
                        <h1
                            className='text-2xl text-gold'
                        >Our Mission</h1>
                        <p
                            className='font-san text-white'
                        >A Nigeria where audacious servant leaders are committed to promoting individual wholeness and taking responsibility for their communities</p>
                    </div>
                    <div
                        className=' space-y-3'
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0"
                    >
                        <h1
                            className='text-2xl text-gold'
                        >Our Values</h1>
                        <p
                            className='font-san text-white'
                        >A Nigeria where audacious servant leaders are committed to promoting individual wholeness and taking responsibility for their communities</p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Testimonials