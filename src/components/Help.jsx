import React from 'react';
import water from '../assets/water.webp';
import cloth from '../assets/cloth.jpg';
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
                <div
                    className='flex gap-8'
                >
                    <div
                        className='flex gap-8 bg-[#fff] rounded-r-lg w-[40rem]'
                    >
                        <img src={water}
                            className='h-[220px] w-[250px] rounded-l-lg'
                            alt="" />
                        <div className='text-black flex flex-col justify-evenly'>
                            <h1 className='text-2xl'>Fundraiser for clean water</h1>
                            <p>Creating a campaign helps raise money for clean water projects.</p>
                            <a href="#"
                                className='relative after:absolute after:bg-gold after:h-1 after:left-0 after:rounded after:w-[40%] after:bottom-0'
                            >Learn More</a>
                        </div>
                    </div>
                    <div
                        className='flex gap-8 bg-[#fff] rounded-r-lg w-[40rem]'
                    >
                        <img src={cloth}
                            className='h-[220px] w-[250px] rounded-l-lg'
                            alt="" />
                        <div className='text-black flex flex-col justify-evenly'>
                            <h1 className='text-2xl'>Patronise our store</h1>
                            <p>Creating a campaign helps raise money for clean water projects.</p>
                            <a href="#"
                                className='relative after:absolute after:bg-gold after:h-1 after:left-0 after:rounded after:w-[40%] after:bottom-0'
                            >Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Help