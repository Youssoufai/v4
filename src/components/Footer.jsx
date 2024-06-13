import React, { useEffect } from 'react';
import { BsInstagram, BsTwitter, BsTwitterX, BsWhatsapp, BsX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <section className=' p-9 h-full space-y-8 bg-[#333] text-white'>
                <div className='space-y-4'>
                    <h1 className='text-center text-gold  text-4xl'>Get in touch</h1>
                    <p
                        className='text-center md:mx-72'
                    >We’re here to help! Whether you have inquiries about our products and services, need support, or are interested in collaborating with Versalink, our team is ready to assist you. Contact us today to discuss your needs and discover how we can work together to achieve your goals.</p>

                </div>     <section

                >
                    <div
                        className='max-w-screen flex justify-center'
                    >
                        <form action=""
                            className='flex flex-col gap-4 w-3/6'
                        >
                            <div className="flex md:flex-row justify-between gap-4">
                                <input type="text" placeholder='Name' className='md:w-3/6 w-full p-4' />
                                <input type="text" placeholder='Email' className='md:w-3/6 w-full  p-4' />
                            </div>
                            <textarea name="" placeholder='Leave your message here...' className='p-4'></textarea>
                            <input type="submit" value="Send it now" className='px-8 py-3 bg-orange-300 cursor-pointer text-white' />
                        </form>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Footer