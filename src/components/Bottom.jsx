import React from 'react'
import { BsInstagram, BsTwitter, BsTwitterX, BsWhatsapp, BsX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
const Bottom = () => {
    return (
        <>
            <section
                className='flex gap-4 bg-[black] text-white p-12'
            >
                <div
                    className='p-4 space-y-4 w-[45%] justify-center items-center'
                >
                    <h1 className='text-4xl text-gold'>Versalink</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates molestiae, natus tenetur qui fugiat dicta praesentium consectetur non voluptatem.</p>
                </div>
                <div className='p-4 space-y-3'>
                    <h1 className='text-xl'> Versalink Co.</h1>
                    <ul
                        className='space-y-3 text-blue'
                    >
                        <li>About Versalink</li>
                        <li>Versalink Post</li>
                        <li>Versalink Development Initiative</li>
                        <li>Versalink Clothing Brand</li>
                    </ul>
                </div>
                <div
                    className='p-4'
                >
                    <h1>Follow Us</h1>
                    <ul
                        className='flex gap-4 m-5'
                    >
                        <li>
                            <FaFacebook />
                        </li>
                        <li>
                            <BsTwitterX />
                        </li>
                        <li>
                            <BsInstagram />
                        </li>
                        <li>
                            <BsWhatsapp />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Bottom