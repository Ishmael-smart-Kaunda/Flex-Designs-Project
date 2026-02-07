import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'


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
        if(selectedItem < searchData.length) {
            if (e.key === "ArrowUp" && selectedItem > 0) {
                setSelectedItem(prevState => prevState - 1)
            }
            else if (e.key === "ArrowDown" && selectedItem < searchData.length - 1) {
                setSelectedItem(prevState => prevState + 1)
            }
            else if (e.key === "Enter" && selectedItem >= 0) {
                window.open(searchData[selectedItem].show.url)
            }
        }else {
            setSelectedItem(-1)
        }
    }

    useEffect(() => {
        if (search !== ""){
            fetch(`http://api.tvmaze.com/search/shows?q=${search}`).
            then(res => res.json()).
            then(data => setSearchData(data))
        }
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
            <div className={search !== "" ? 
                "absolute left-0 top-full mt-3 w-full h-fit rounded-lg py-4 px-2 bg-white/95 shadow-2xl translate-y-2 text-gray-600 flex flex-col" : "opacity-0 invisible"
            }>
                {
                    searchData.map((data, index) => {
                        return (
                            <a 
                                href={data.show.url} 
                                key={index} 
                                target='_blank'
                                className={
                                    selectedItem === index 
                                    ? "p-0.5 bg-gray-400 w-full"
                                    : "p-0.5 bg-transparent w-full"
                                }
                            >
                                {data.show.name}
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