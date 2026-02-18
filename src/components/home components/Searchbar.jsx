import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { properties } from '../../data/propertyListingData'

const Searchbar = () => {

    const [search,  setSearch] = useState("")
    const [searchData,  setSearchData] = useState([])
    const [selectedItem,  setSelectedItem] = useState(-1)

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const handleClose = () => {
        setSearch("")
        setSearchData([])
        setSelectedItem(-1)
    }

    const handleKeyDown = e => {
        if (!searchData.length) return

        if (e.key === "ArrowUp" && selectedItem > 0) {
            setSelectedItem(prev => prev - 1)
        }

        if (e.key === "ArrowDown" && selectedItem < searchData.length - 1) {
            setSelectedItem(prev => prev + 1)
        }

        if (e.key === "Enter" && selectedItem >= 0) {
            window.open(searchData[selectedItem].url)
        }
    }


    useEffect(() => {
        if (!search.trim()) {
            setSearchData([])
            setSelectedItem(-1)
            return
        }

        const newFilterData = properties.filter(property =>
            property.propertyType
            .toLowerCase()
            .includes(search.toLowerCase())
        )

        setSearchData(newFilterData)
    }, [search])




  return (
    <div className='hidden sm:flex flex-col gap-8'>
        <div className="group relative">
            <div className='sm:flex items-center bg-gray-200 rounded-full px-2 w-[300px] lg:w-[400px]'>
                {
                    search === "" ? <AiOutlineSearch size={25} /> : <AiOutlineClose size={20}  className='cursor-pointer' onClick={handleClose} />
                }
                
                <input
                    className='bg-transparent p-2 w-full focus:outline-none' 
                    type='text' 
                    placeholder='Listings'
                    value={search}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className={
                searchData.length > 0
                ? "absolute left-0 top-full mt-3 w-full rounded-lg py-4 px-2 bg-white shadow-2xl text-gray-600 flex flex-col"
                : "hidden"
            }>
                {
                    searchData.slice(0, 10).map((data, index) => {
                        return (
                            <a 
                                // href={data.show.url} 
                                key={index} 
                                target='_blank'
                                className={
                                    selectedItem === index 
                                    ? "p-0.5 bg-gray-400 w-full"
                                    : "p-0.5 bg-transparent w-full"
                                }
                            >
                                {data.title}
                            </a>
                        )
                    })
                }
            </div>
        </div>
        
    </div>
  )
}

export default Searchbar