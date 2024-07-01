import React from 'react'
import { BsInstagram, BsTwitter, BsTwitterX, BsWhatsapp, BsX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
const Bottom = () => {
    return (
        <>
            <section
                className='flex gap-4 bg-[#fff] text-white p-12'
            >
                <form action=""
                    className='p-9 bg-[#F7F7F7] space-y-7 shadow-sm shadow-slate-400 rounded-sm flex items-center'
                >
                    <div>
                        <h1 className='text-black text-center text-2xl'>Add Impact To Your Inbox</h1>
                        <p className='text-black text-center'>Get our emails to stay in the know.</p>
                    </div>
                    <div
                        className='flex'
                    >
                        <input type="text" placeholder='First name' className='rounded' />
                        <input type="text" placeholder='Last name' />
                        <input type="text" placeholder='Email' />
                        <button type="submit" id='submit' className='w-full bg-gold h-full md:rounded-e-lg'>SUBSCRIBE</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Bottom