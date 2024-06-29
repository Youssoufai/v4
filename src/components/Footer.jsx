import React, { useEffect } from 'react';
import { BsInstagram, BsTwitter, BsTwitterX, BsWhatsapp, BsX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <section className='p-12 h-full space-y-8 bg-[#f7f7f7] text-white'>
                <div
                    className='text-black text-center space-y-8'
                >
                    <h1 className='text-4xl font-bold text-center'>Help us improve</h1>
                    <p>We want to hear from you! In this 5-minute survey, we'll ask you to weigh in on our 100% model and how you feel about the different ways you can support a charity.</p>
                    <button>
                        <a href="#" className='bg-[#ffca0a] px-6 py-3'>TAKE OUR SURVEY</a>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Footer