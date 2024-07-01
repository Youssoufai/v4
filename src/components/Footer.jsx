import React, { useEffect } from 'react';
import survey from '../assets/survey.jpg';
import g from '../assets/g.jpg';
import { BsInstagram, BsTwitter, BsTwitterX, BsWhatsapp, BsX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <section className='p-12 h-full space-y-8 bg-[#f7f7f7] text-white flex flex-col md:flex-row'>
                <div
                    className='text-black text-start space-y-8 md:w-[50%] flex justify-center flex-col'
                >
                    <h1 className='text-4xl font-bold text-start'>Help us improve</h1>
                    <p>We want to hear from you! In this 5-minute survey, we'll ask you to weigh in on our 100% model and how you feel about the different ways you can support a charity.</p>
                    <button className='text-start'>
                        <a href="#" className='bg-[#ffca0a] px-6 py-3'>TAKE OUR SURVEY</a>
                    </button>
                </div>
                <div className='md:w-3/6 '>
                    <img src={g} className='h-[30rem] wrounded' alt="" />
                </div>
            </section>
        </>
    )
}

export default Footer