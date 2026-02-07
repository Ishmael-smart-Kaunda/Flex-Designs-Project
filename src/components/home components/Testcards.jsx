import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaQuoteRight } from 'react-icons/fa'


const Testcards = ({client_name, client_desc, test_desc, client_img}) => {
  return (
    <div>
        <div className="border bg-transparent border-gray-500 p-6  rounded-3xl hover:shadow-2xl">
                <FaQuoteRight 
                    size={35}
                    color='gray' 
                />
                <div className="my-3 flex flex-row gap-1">
                    <AiFillStar size={20} color='gold' />
                    <AiFillStar size={20} color='gold' />
                    <AiFillStar size={20} color='gold' />
                    <AiFillStar size={20} color='gold' />
                    <AiFillStar size={20} color='gold' />
                </div>
                <p className='text-gray-500'>
                    {test_desc}
                </p>

                <br />

                <hr 
                    className='w-full border-px border-gray-500 my-2'
                />

                <div className="flex flex-row items-center gap-4 mt-7">
                    <div className="w-15 h-15 rounded-full overflow-hidden">
                        <img 
                            src={client_img}
                            alt="Family photo, earned their first propety through the platform"
                            className='w-full h-full object-cover' 
                        />
                    </div>
                    <div className="">
                        <h3 className='font-bold'> {client_name} </h3>
                        <p className='font-light'> {client_desc} </p>
                    </div>
                </div>

                <br />
            </div>
    </div>
  )
}

export default Testcards