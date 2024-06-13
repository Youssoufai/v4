import React, { useEffect } from 'react';
import AOS from 'aos';
import fine from '../assets/tourne.jpg'
import bg from '../assets/team.avif'
import '../index.css'
import logo from '../assets/2.png'
import logo2 from '../assets/3.png'
import logo3 from '../assets/4.png'
import { Link } from 'react-router-dom';
const Navbar = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // duration of animation in milliseconds
        });
    }, []);
    return (
        <>
            <header
                className='p-10 flex justify-between items-center border-b border-gold bg-[#000000d0] text-gold h-full'
            >
                <div>
                    <h1>Versalink</h1>
                </div>
                <ul
                    className='hidden cursor-pointer md:flex gap-12 font-semibold tracking-wider justify-end text-sm'
                >
                    <Link to='/'
                        className='text-white hover:text-gold '
                    >Home</Link>
                    <Link
                        to='/vdi'
                        className='text-white hover:text-gold '
                    >Initiative</Link>
                    <Link
                        to='/post'
                        className='text-white hover:text-gold '
                    >Post</Link>
                    <Link
                        to='/ecom '
                        className='text-white hover:text-gold '
                    >Clothing Brand</Link>
                    <Link to='/'
                        className='text-white hover:text-gold '
                    >More</Link>
                </ul>
                <details className="md:hidden dropdown  bg-gold">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </header>

        </>
    )
}

export default Navbar