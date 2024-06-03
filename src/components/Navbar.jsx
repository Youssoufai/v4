import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // duration of animation in milliseconds
        });
    }, []);
    return (
        <>

        </>
    )
}

export default Navbar