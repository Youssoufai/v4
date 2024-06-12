import React, { useEffect } from 'react';

const Footer = () => {
    return (
        <>
            <section className=' p-9 h-screen space-y-4 bg-[#2C3E50]'>
                <h1 className='text-center text-navyBlue  text-4xl'>Get in touch</h1>
                <p
                    className='text-center mx-72 text-white'
                >We’re here to help! Whether you have inquiries about our products and services, need support, or are interested in collaborating with Versalink, our team is ready to assist you. Contact us today to discuss your needs and discover how we can work together to achieve your goals.</p>
                <section

                >
                    <div
                        className='max-w-screen flex justify-center'
                    >
                        <form action=""
                            className='flex flex-col gap-4 w-3/6'
                        >
                            <div className="flex justify-between gap-4">
                                <input type="text" placeholder='Name' className='w-3/6 p-4' />
                                <input type="text" placeholder='Email' className='w-3/6 p-4' />
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