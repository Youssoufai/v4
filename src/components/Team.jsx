import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import abba from '../assets/abba.jpg';
import isa from '../assets/isa.jpg';
import fk from '../assets/fk.jpg';
import ak from '../assets/AK.jpg';
import '../index.css'
const TeamCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="p-8 space-y-9 h-screen my-8">
            <h1 className="text-center text-4xl text-gold">Our Teams</h1>
            <p className='text-center mx-12'>Meet the Versalink team – a group of skilled professionals passionate about innovation and excellence</p>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                customLeftArrow={<FaChevronLeft className="left-arrow" />}
                customRightArrow={<FaChevronRight className="right-arrow" />}
            >
                {[abba, fk, isa, ak].map((image, index) => (
                    <div key={index} className="bg-black text-center space-y-8 shadow-lightGold rounded-lg text-white p-4 max-w-xs mx-auto">
                        <img src={image} className="h-[280px] w-[100%] rounded-t-md mx-auto" alt="" />
                        <div className="space-y-3">
                            <h1 className="text-center text-2xl text-white">Abba Ibrahim Jidda</h1>
                            <h3 className="text-xl text-gold">CEO</h3>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
}

export default TeamCarousel;
