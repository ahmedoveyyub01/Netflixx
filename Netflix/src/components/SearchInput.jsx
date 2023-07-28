import React from 'react'
import { BsSearch } from "react-icons/bs";
import { useState, useContext } from 'react';
import MainContext from '../useContext/MainContext';

function SearchInput() {
    const [clicked, setClicked] = useState(true)
    const {searchVal, setSearchVal} = useContext(MainContext)

    const handleClicked = () => {
        setClicked(!clicked)
    }

    const handleSearchVal = (e) => {
        setSearchVal(e.target.value);
      };

    return (
        <div className='flex  max-md:hidden' >
            {
                clicked ? (<BsSearch onClick={handleClicked} className='my-0 mx-4  cursor-pointer' size={20} />) :
                    (<div className='flex h-[30px] cursor-pointer py-[10px] px-[0px] mr-[20px]  items-center '>
                        <input 
                            onChange={handleSearchVal}
                            value={searchVal}
                            type="text" 
                            placeholder='Titles,people,genres' 
                            className=' w-[200px] h-[30px]  border-2 font-[500] bg-transparent px-9 ' />
                        <BsSearch onClick={handleClicked} className='absolute  my-0 mx-2  cursor-pointer ease-in' size={20}  />
                    </div>)

            }
        </div>

    )
}

export default SearchInput


















