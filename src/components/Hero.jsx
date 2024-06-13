import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
    return (
        <>
            <div data-aos="zoom-in-up">

                <section
                    className='h-screen p-4 flex justify-center items-center font-montserrat'
                >
                    <div
                        className='px-9 text-center w-4/5 flex justify-center flex-col space-y-8'
                    >
                        <h1
                            className='text-9xl text-gold text-center'
                        >Let's Give back</h1>
                        <p className='text-white text-xl'>Lorem ipsum dolor sit amet consectetura sed atque incidunt sit amet?</p>
                        <div>
                            <button
                                className=' py-3 px-8 rounded-full bg-gold text-white'
                            >Read More</button>
                        </div>
                    </div>
                </section >
            </div>
        </>
    )
}

export default Hero