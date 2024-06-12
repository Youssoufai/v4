import React, { useEffect } from 'react';
import AOS from 'aos';
import fine from '../assets/team2.avif'
import 'aos/dist/aos.css';
import '../index.css';
const About = () => {
    return (
        <>
            <section className='h-full p-16 bg-lightGray flex flex-col md:flex-row items-center gap-5'>
                <div>
                    <img src={fine} className='h-[400px]' alt="" />
                </div>
                <div className='p-4 w-full md:w-[50%] h-[450px] flex justify-between flex-col gap-4'>
                    <div>
                        <h1 className='text-base font-semibold text-gold' id='after'>ABOUT US</h1>

                        <h1 className='text-4xl'>
                            Welcome to <span className='text-gold'>Versalink</span>
                        </h1>
                    </div>
                    <div className>
                        <p>
                            Versalink isn't your average company. Founded in 2023 by Alamin Abbas, we're a social enterprise driven by a powerful idea: to create a ripple effect of positive change in Nigeria. We achieve this by blending business success with social impact.
                        </p>
                        <p>
                            We operate commercially, generating revenue and creating jobs. But unlike traditional businesses, some of our profits fuel impactful programs that directly address the needs of Nigerian communities. This commitment to social good sets us apart.
                        </p>
                    </div>
                    <div>
                        <button
                            className='px-6 py-3 bg-gold'
                        >Read More</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About