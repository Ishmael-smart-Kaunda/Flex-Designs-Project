import React from 'react'
import { BiBath } from 'react-icons/bi'
import { FiSquare } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'
import { RiHotelBedLine } from 'react-icons/ri'

const Propertycards = () => {
  return (
    <div className='max-w-[1500px] m-auto p-7 mt-5  lg:mt-10'>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
            <article className="flex flex-col border border-gray-300 h-[480px] rounded-3xl">
                <div className="w-full h-[50%] overflow-hidden rounded-t-3xl">
                    <img 
                        src="https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg" 
                        alt="private condo, residential property" 
                        className='w-full object-cover'
                    />
                </div>
                <div className="flex flex-col p-4 pb-2 mt-6 gap-2">
                    <h3 className='font-bold text-lg lg:text-xl'>Modern 3-Bedroom House in Area 43</h3>
                    <div className="flex flex-row items-center text-gray-500 gap-1 lg:text-lg">
                        <IoLocationOutline />
                        <p>Area 43,</p>
                        <p>Lilongwe</p>
                    </div>
                    <div className="flex flex-row items-center text-gray-500 gap-2.5 lg:text-lg">
                        <span className='flex flex-row items-center gap-1'>
                            <RiHotelBedLine />
                            3
                        </span>
                        <span className='flex flex-row items-center gap-1'>
                            <BiBath />
                            2
                        </span>
                        <span className='flex flex-row items-center gap-1'>
                            <FiSquare />
                            180
                        </span>
                    </div>
                    
                    <hr className='w-full m-auto border border-gray-300 my-2' />

                    <div className="font-bold text-xl lg:text-2xl text-blue-950">
                        MWK45,000,000
                    </div>
                </div>
            </article>
        </div>
    </div>
  )
}

export default Propertycards