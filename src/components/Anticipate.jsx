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
            <section className='h-screen text-center p-9 space-y-8 text-white'>
                <div className="m-12 space-y-8">
                    <h1 className='text-4xl'>Give with Confidence</h1>
                    <p>All of our operational expenses are funded by a private community of donors called The Well so you can trust that 100% of your donation goes directly to water solutions. But we don’t stop there.</p>
                    <p>From our commitment to equipping local partners, to our tech, to the environmental sustainability of our water projects, “good enough” is never good enough for us. We’re setting new standards for transparency and innovation, and these companies and organizations agree.
                    </p>
                </div>
            </section>
        </>
    )
}
