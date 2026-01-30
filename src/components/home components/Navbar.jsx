import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiTwotoneBuild, AiOutlineCodeSandbox, AiOutlineSearch,} from 'react-icons/ai'
import { BiNews } from 'react-icons/bi'
import { FaBlogger, FaBalanceScaleRight } from 'react-icons/fa'
import { RiContactsFill, RiExchangeDollarLine, RiArrowDropDownLine, RiTeamFill, RiMoneyDollarCircleLine } from 'react-icons/ri'
import { FiTrendingUp, FiHome } from 'react-icons/fi'
import { FcProcess } from 'react-icons/fc'

const Navbar = () => {
    const [nav, setNav] = useState(false)

  return (
    <div className='w-full min-h-16 z-50 p-4 fixed top-0 left-0 bg-white border-b-[#333] shadow-2xl mb-13'>
        <div className='max-w-[1500px] h-full m-auto flex justify-between items-center'>
            {/* Left Side */}
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer lg:hidden'>
                    <AiOutlineMenu  size={30} />
                </div>
                <Link to="/">
                    <h1 className='text-2xl  sm:text-3xl lg:text-4xl px-2'>
                        Flex <span className='font-bold text-blue-950'>Consultancy</span>
                    </h1>
                </Link>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-blue-950 text-white rounded-full p-2'>Property</p>
                    <p className='p-2'>Listings</p>
                </div>
            </div>

            {/* Search Inputs */}
            <div className='hidden sm:flex items-center bg-gray-200 rounded-full px-2 w-[300px] lg:w-[400px]'>
                <AiOutlineSearch size={25} />
                <input
                    className='bg-transparent p-2 w-full focus:outline-none' 
                    type='text' 
                    placeholder='Search services' 
                />
            </div>

            {/* Newsletters */}
            <div className='hidden lg:flex items-center gap-8 cursor-pointer'>
                <div className='group relative'>
                    <p className='font-medium group-hover:bg-gray-200 px-4 py-2 rounded-full flex items-center gap-1.5 hover:text-red-900 transtion-all duration-300'>
                        Services
                        <RiArrowDropDownLine 
                            size={25}
                            className='transition-transform duration-300 group-hover:rotate-180'
                        />
                    </p>
                    <div className='
                        absolute left-0 top-full mt-3
                        w-[250px] h-[500px]
                        rounded-lg p-4
                        bg-white/95
                        shadow-2xl
                        opacity-0 
                        invisible
                        translate-y-2
                        transition-all duration-200 ease-out
                        group-hover:opacity-100
                        group-hover:visible
                        group-hover:translate-y-0
                        text-gray-600 
                    '>
                        <ul>
                            <li className='text-lg py-4 flex items-center hover:text-red-900 transtion-all duration-300'>
                                <FaBalanceScaleRight
                                    size={25}
                                    className='mr-4 '
                                />

                                <Link to="/services">Property Valuation</Link>
                            </li>
                            <li className='text-lg py-4 flex items-center hover:text-red-900 transtion-all duration-300'>
                                <AiOutlineHome
                                    size={25}
                                    className='mr-4'
                                />
                                <Link to="/services">Property Management</Link>
                            </li>
                            <li className='text-lg py-4 flex items-center hover:text-red-900 transtion-all duration-300'>
                                <AiTwotoneBuild 
                                    size={25}
                                    className='mr-4'
                                />
                                <Link to="/services">Property Development</Link>
                            </li>
                            <li className='text-lg py-4 flex items-center hover:text-red-900 transtion-all duration-300'>
                                <FcProcess
                                    size={25}
                                    className='mr-4'
                                />
                               <Link to="/services"> Deed Processing</Link>
                            </li>
                            <li className='text-lg py-4 flex items-center hover:text-red-900 transtion-all duration-300'>
                                <AiOutlineCodeSandbox 
                                    size={25}
                                    className='mr-4'
                                />
                                <Link to="/services">Building Design</Link>
                            </li>
                            <li className='text-lg py-4 flex items-center hover:text-red-900 transtion-all duration-300'>
                                <RiExchangeDollarLine
                                    size={25}
                                    className='mr-4'
                                />
                                <Link to="/services">Auctioning</Link>
                            </li>
                             <li className='text-lg py-4 flex items-center hover:text-red-900 transtion-all duration-300'>
                                <FiTrendingUp
                                    size={25}
                                    className='mr-4'
                                />
                                <Link to="/services">Investiment Appraisal</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <p className='font-medium hover:bg-gray-200 px-4 py-2 rounded-full hover:text-red-900 transtion-all duration-300'>
                     <Link to='/team' >Team</Link>
                </p>
                <button className='bg-blue-950 cursor-pointer text-white py-2 flex items-center rounded-full hover:opacity-90 transtion-all duration-300'>
                    <BiNews className='mr-2' size={20}  />
                    
                     <Link to='/contact' >Get Started</Link>
                </button>
            </div>


            {/* Dropdown */}

            

            {/* Mobile Menu */}
            {/* Overlay */}

            {nav ? <div className='bg-black/80 fixed w-full h-screen z-50 top-0 left-0'></div>
            : " "}

            {/* Side Drawer Menu */}
            <div className={nav ? 'fixed top-0 left-0 w-75 h-screen bg-white z-50 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose
                    onClick={() => setNav(!nav)} 
                    size={30}
                    className='absolute right-4 top-4 cursor-pointer'
                />
                <h2 className='text-2xl p-4'>
                    Flex <span className='font-bold'>Consultancy</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-600'>
                        <li className='text-xl py-4 flex hover:text-red-900 transtion-all duration-300'>
                            <AiOutlineHome
                                size={25}
                                className='mr-4'
                            />
                            Home
                        </li>
                        <li className='text-xl py-4 flex hover:text-red-900 transtion-all duration-300'>
                            <RiTeamFill 
                                size={25}
                                className='mr-4'
                            />
                          <Link to='/team' >Team</Link>
                        </li>
                        <li className='text-xl py-4 flex hover:text-red-900 transtion-all duration-300'>
                            <RiContactsFill 
                                size={25}
                                className='mr-4'
                            />
                           <Link to='/contact'>Contact</Link> 
                        </li>
                        <li className='text-xl py-4 flex hover:text-red-900 transtion-all duration-300'>
                            <FaBalanceScaleRight
                                size={25}
                                className='mr-4'
                            />
                            Property Valuation
                        </li>
                        <li className='text-lg py-4 flex items-center hover:text-red-900 transtion-all duration-300'>
                                <AiOutlineHome
                                    size={25}
                                    className='mr-4'
                                />
                                <Link to="/services">Property Management</Link>
                            </li>
                        <li className='text-xl py-4 flex hover:text-red-900 transtion-all duration-300'>
                            <AiTwotoneBuild 
                                size={25}
                                className='mr-4'
                            />
                            Property Development
                        </li>
                        <li className='text-xl py-4 flex hover:text-red-900 transtion-all duration-300'>
                            <FcProcess
                                size={25}
                                className='mr-4'
                            />
                            Deed Processing
                        </li>
                        <li className='text-xl py-4 flex hover:text-red-900 transtion-all duration-300'>
                            <AiOutlineCodeSandbox 
                                size={25}
                                className='mr-4'
                            />
                            Building Design
                        </li>
                        <li className='text-xl py-4 flex hover:text-red-900 transtion-all duration-300'>
                            <RiExchangeDollarLine
                                size={25}
                                className='mr-4'
                            />
                            Auctioning
                        </li>
                         <li className='text-lg py-4 flex items-center hover:text-red-900 transtion-all duration-300'>
                                <FiTrendingUp
                                    size={25}
                                    className='mr-4'
                                />
                         Investiment Appraisal
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar