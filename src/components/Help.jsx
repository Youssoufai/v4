import React from 'react';
import water from '../assets/water.webp';
import water2 from '../assets/water2.webp';
const Help = () => {
    return (
        <>
            <section
                className='p-9 bg-lightGray space-y-8'
            >
                <h1
                    className='text-center text-4xl text-lightGold'
                >Ways to help</h1>
                <p
                    className='md:mx-[12rem] text-center text-black'
                >At Versalink, we believe in the power of community and collaboration. Whether you're a tech enthusiast, a business professional, or someone passionate about making a difference, there are numerous ways for you to get involved with our mission. Join us in shaping the future of technology and services.</p>
                <div>
                    <div>
                        <img src={water}
                            className='h-[220px] w-[250px] rounded-l-lg'
                            alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Help