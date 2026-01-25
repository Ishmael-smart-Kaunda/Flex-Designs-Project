import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='max-w-[1300px] m-auto p-7 mt-16 lg:mt-25'>
        <div className='flex flex-col md:flex-row gap-8 justify-between items-center'>
            {/* Left Side */}
            <div>
                <h1 className='text-3xl text-[#FAF8F8]  md:text-5xl lg:text-7xl my-1 font-bold'>Property <span className='text-[#010102]'>Advisory,</span> </h1>
                <h1 className='text-3xl text-[#FAF8F8]  md:text-5xl lg:text-7xl my-3 font-bold'> <span className='text-[#010102]'>Done</span> Right</h1>

                <p className='text-[#FAF8F8] w-[350px] md:w-[440px] lg:w-[550px] md:text-xl'>Valuation, development, management, and investment insight—delivered with clarity and technical precision.</p>
            </div>

            {/* Right Side */}
            <div className='flex-1 border rounded-lg shadow-lg bg-[#FAF8F8]/30 border-white/10 lg:max-w-[500px]'>
                <img
                    className='w-full h-[200px] object-cover rounded-t-lg' 
                    src="https://images.pexels.com/photos/7937717/pexels-photo-7937717.jpeg" 
                    alt="Property Transanction Image" 
                />
                <div className='p-4 text-[#FAF8F8]'>
                    <h2 className='text-[20px]'>End-to-End Property Services</h2>
                    <p>From valuation and asset management to designing development.</p>
                    <button className='flex gap-2 items-center my-2 rounded-full bg-red-950 cursor-pointer text-white py-2'>
                        Get Started
                        <BsArrowRight />
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero