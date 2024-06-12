import React, { useEffect } from 'react';
import AOS from 'aos';
import fine from '../assets/tourne.jpg'
import bg from '../assets/team.avif'
import '../index.css'
import logo from '../assets/2.png'
import logo2 from '../assets/3.png'
import logo3 from '../assets/4.png'
const Navbar = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // duration of animation in milliseconds
        });
    }, []);
    return (
        <>
            <header
                className='p-10 flex justify-between items-center border-b border-gold bg-[#000000d0] text-gold'
            >
                <div>
                    <h1>Versalink</h1>
                </div>
                <ul
                    className='hidden cursor-pointer md:flex gap-12 font-semibold tracking-wider justify-end text-sm'
                >
                    <li
                        className=' text-white hover:text-gold '
                    >Home</li>
                    <li
                        className=' text-white hover:text-gold '
                    >Initiative</li>
                    <li
                        className=' text-white hover:text-gold '
                    >Post</li>
                    <li
                        className=' text-white hover:text-gold '
                    >Clothing Brand</li>
                    <li
                        className=' text-white hover:text-gold '
                    >More</li>
                </ul>
            </header>
        </>
    )
}

export default Navbar