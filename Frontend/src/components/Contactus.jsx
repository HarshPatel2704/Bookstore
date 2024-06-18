import React from 'react';
import Navbar from './Navbar';

function Contactus() {
    return (
        <>
        <Navbar />
            <div className='mt-15'>
            <div class="flex h-screen items-center justify-center">
                <div class="w-[600px]">
                    <form method="div">
                    <h1 className="font-bold text-lg"> Contact Us</h1>
                    {/* Name */}
                    <div className='mt-4 space-y-2'>
                        <span>Name</span><br />
                        <input 
                            type="text" 
                            placeholder='Enter your name' 
                            className='w-80 px-3 py-1 border rounded-md outline-none'/>
                    </div>
                    {/* Email */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span><br />
                        <input 
                            type="email" 
                            placeholder='Enter your email' 
                            className='w-80 px-3 py-1 border rounded-md outline-none'/>
                    </div>
                    {/* Message */}
                    <div className='mt-6 space-y-2'>
                        <span>Message</span><br />
                        <textarea placeholder=' Type your message' rows={8} cols={50} className='border rounded-md'></textarea>
                    </div>
                    {/* Button */}
                    <button className='bg-blue-600 text-white p-2 rounded-md mt-2' > Submit </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contactus
