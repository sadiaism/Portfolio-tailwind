import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'>Get in touch</h2>
                <p className='text-gray-600 text-[18px] pt-2'>

                </p>
                <div className='flex gap-3 items-center'>
                    <IoMailOutline size={30} /> abc80@gmail.com
                </div>
                <div className='flex gap-3 items-center'>
                <BsFillTelephoneFill size={30} /> (021) 000-0000
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-black'
                    id="name" />
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-black'
                    id="email" />
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="msg">Message</label>
                    <textarea className="bg-transparent border border-black"
                    id="msg" rows={8} />
                    
                </div>
                <button className='bg-red-300 p-2 px-6'>send</button>
                
            </div>
        </div>
      
    </div>
  )
}

export default Contact
