import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

const Filter = () => {
  const [search, setSearch] = useState("")

  return (
    <section className='max-w-[1500px] m-auto p-7 mt-12  lg:mt-25'>
        <div className='w-full bg-gray-300 p-8 rounded-2xl flex flex-col gap-4 shadow-2xl'>
          <div className='w-full rounded-xl p-2 bg-white flex flex-row items-center'>
            {
              search === "" ? <AiOutlineSearch size={25} /> : <AiOutlineClose size={20}  className='cursor-pointer' onClick={handleClose} />
            }
                          
              <input
                  className='bg-transparent p-1 w-full focus:outline-none' 
                  type='text' 
                  placeholder='Search by city, location, or neighborhood'
                  // value={search}
                  // onChange={handleChange}
                  // onKeyDown={handleKeyDown}
              />
          </div>
          <select 
            name="types" 
            id="types"
            className='w-full p-2 bg-white rounded-xl'
          >
            <option value="">All Types</option>
            <option value="">Residential</option>
            <option value="">Commercial</option>
            <option value="">Industrial</option>
          </select>

          <select 
            name="types" 
            id="types"
            className='w-full p-2 bg-white rounded-xl'
          >
            <option value="">For Sale & Rent</option>
            <option value="">For Sale</option>
            <option value="">For Rent</option>
          </select>

          <button className='w-full p-2 rounded-xl bg-black text-white flex flex-row items-center justify-center'>
            <AiOutlineSearch />
            Search
          </button>
        </div>
    </section>
  )
}

export default Filter