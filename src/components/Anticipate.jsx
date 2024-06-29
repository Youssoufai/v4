import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../assets/folder.jpg';
import img2 from '../assets/idp2.avif';
import { GiFoodTruck, GiTrumpetFlag } from 'react-icons/gi';
import { FaTree } from 'react-icons/fa6';
import { CiSpeaker } from 'react-icons/ci';
import { BsMortarboard } from 'react-icons/bs';
export const Anticipate = () => {
    return (
        <>
            <section className='p-9 space-y-8 h-full flex items-center justify-around flex-col'>
                <h1 className='text-center text-4xl font-bold'>Our Services</h1>
                <div
                    className='flex flex-col md:flex-row justify-center gap-3 space-y-8'
                >
                    <div className='space-y-4 flex justify-center items-center flex-col text-center'>
                        <FaTree className="text-gold text-8xl scale-125 mr-2 hover:scale-125 transition-transform duration-200" />
                        <h1 className='text-4xl text-gold'>Advocacy</h1>
                        <p>We advocate at the local, state, and national levels for policy reform and program improvements to assist people at risk of hunger.</p>
                        <div>
                            <button
                                className='px-8 py-2 bg-gold rounded-full text-white'
                            >Learn More</button>
                        </div>
                    </div>
                    <div className='space-y-4 flex justify-center items-center flex-col text-center'>
                        <BsMortarboard className="text-gold text-8xl scale-125 mr-2 hover:scale-125 transition-transform duration-200" />
                        <h1 className='text-4xl text-gold'>Advocacy</h1>
                        <p>We advocate at the local, state, and national levels for policy reform and program improvements to assist people at risk of hunger.</p>
                        <div>
                            <button
                                className='px-8 py-2 bg-gold rounded-full text-white'
                            >Learn More</button>
                        </div>
                    </div>
                    <div className='space-y-4 flex justify-center items-center flex-col text-center'>
                        <GiFoodTruck className="text-gold text-8xl scale-125 mr-2 hover:scale-125 transition-transform duration-200" />
                        <h1 className='text-4xl text-gold'>Advocacy</h1>
                        <p>We advocate at the local, state, and national levels for policy reform and program improvements to assist people at risk of hunger.</p>
                        <div>
                            <button
                                className='px-8 py-2 bg-gold rounded-full text-white'
                            >Learn More</button>
                        </div>
                    </div>

                </div>

            </section >
        </>
    )
}
