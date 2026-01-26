import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="max-w-[1500px] mx-auto p-4 mt-20 lg:mt-28">
        <div className="relative overflow-hidden rounded-xl">

            {/* Background Image */}
            <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/33559343/pexels-photo-33559343.jpeg"
            alt="Property Background"
            />

            {/* Overlay */}
            <div className="
            relative
            bg-slate-950/40
            flex flex-col md:flex-row
            gap-10
            justify-between
            items-center
            px-6 py-10
            md:py-16
            lg:px-16
            min-h-[600px]
            md:min-h-[500px]
            ">

            {/* Left Side */}
            <div>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-blue-950">
                Property <span className="text-white">Advisory,</span>
                </h1>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-blue-950 mt-2">
                <span className="text-white">Done</span> Right
                </h1>

                <p className="mt-6 text-[#FAF8F8] max-w-[550px] md:text-xl">
                Valuation, development, management, and investment insight—delivered with clarity and technical precision.
                </p>
            </div>

            {/* Right Side Card */}
            <div className="w-full md:w-auto lg:max-w-[500px] border border-white/10 rounded-lg bg-[#FAF8F8]/30 backdrop-blur-md shadow-lg">
                <img
                className="w-full h-[200px] object-cover rounded-t-lg"
                src="https://images.pexels.com/photos/7937717/pexels-photo-7937717.jpeg"
                alt="Property Transaction"
                />

                <div className="p-4 text-[#FAF8F8]">
                <h2 className="text-lg font-semibold">
                    End-to-End Property Services
                </h2>
                <p className="mt-1">
                    From valuation and design to development and asset management.
                </p>

                <button className="mt-4 flex items-center gap-2 rounded-full bg-blue-950 px-4 py-2 text-white">
                    Get Started
                    <BsArrowRight />
                </button>
                </div>
            </div>

            </div>
        </div>
    </div>

)
}

export default Hero