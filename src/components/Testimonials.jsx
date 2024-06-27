import React, { useEffect } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { AOS } from 'aos';
import 'aos/dist/aos.css';
const Testimonials = () => {
    return (
        <>
            <section
                className='p-12 space-y-8 bg-brown py-28'
                data-aos-duration="3000">
                <h1
                    className='text-xl text-center text-[#5493d3]'
                >Our Core</h1>
                <h1
                    className='text-4xl text-center text-white'
                >Versalink's mission is twofold.</h1>
                <p
                    className='text-center text-white mx-14'
                >
                    We equip individuals with the skills and resources they need to thrive, fostering self-sufficiency and economic mobility. We also provide opportunities and support to disadvantaged communities, tackling local challenges and creating a more equitable future.
                </p>
            </section>
        </>
    )
}

export default Testimonials