import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiTwotoneBuild, AiOutlineCodeSandbox } from 'react-icons/ai'
import { BiNews } from 'react-icons/bi'
import { FaBlogger, FaBalanceScaleRight } from 'react-icons/fa'
import { RiContactsFill, RiExchangeDollarLine } from 'react-icons/ri'
import { FcProcess } from 'react-icons/fc'

const Navbar = () => {
    const [nav, setNav] = useState(false)

  return (
    <div className='w-full min-h-16 p-4'>
        <div className='max-w-[1500px] h-full m-auto flex justify-between items-center'>
            {/* Left Side */}
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu  size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                    Flex <span className='font-bold'>Consultancy</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Property</p>
                    <p className='p-2'>Listings</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className=' hidden md:flex backdrop-blur-md bg-[#FAF8F8]/30 border-b rounded-full border-white/10 px-6 py-3  justify-center md:w-105 lg:w-120'>
                <ul className='flex gap-14 justify-center text-[#FAF8F8] cursor-pointer'>
                    <li className='text-lg hover:text-[#AF9D90]'><a>Home</a></li>
                    <li className='text-lg hover:text-[#AF9D90]'><a>Services</a></li>
                    <li className='text-lg hover:text-[#AF9D90]'><a>Blog</a></li>
                    <li className='text-lg hover:text-[#AF9D90]'><a>Contact</a></li>
                </ul>
            </nav>

            {/* Newsletters */}
            <button className='bg-black cursor-pointer text-white hidden lg:flex items-center py-2 rounded-full'>
                <BiNews className='mr-2' size={20}  />
                Newsletter
            </button>

            {/* Mobile Menu */}
            {/* Overlay */}

            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
            : " "}

            {/* Side Drawer Menu */}
            <div className={nav ? 'fixed top-0 left-0 w-75 h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose
                    onClick={() => setNav(!nav)} 
                    size={30}
                    className='absolute right-4 top-4 cursor-pointer'
                />
                <h2 className='text-2xl p-4'>
                    Flex <span className='font-bold'>Consultancy</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex'>
                            <AiOutlineHome
                                size={25}
                                className='mr-4'
                            />
                            Home
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaBlogger 
                                size={25}
                                className='mr-4'
                            />
                            Blog
                        </li>
                        <li className='text-xl py-4 flex'>
                            <RiContactsFill 
                                size={25}
                                className='mr-4'
                            />
                            Contact
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaBalanceScaleRight
                                size={25}
                                className='mr-4'
                            />
                            Property Valuation
                        </li>
                        <li className='text-xl py-4 flex'>
                            <AiTwotoneBuild 
                                size={25}
                                className='mr-4'
                            />
                            Property Development
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FcProcess
                                size={25}
                                className='mr-4'
                            />
                            Deed Processing
                        </li>
                        <li className='text-xl py-4 flex'>
                            <AiOutlineCodeSandbox 
                                size={25}
                                className='mr-4'
                            />
                            Building Design
                        </li>
                        <li className='text-xl py-4 flex'>
                            <RiExchangeDollarLine
                                size={25}
                                className='mr-4'
                            />
                            Auctioning
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar