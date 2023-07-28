import React, { useEffect, useState } from 'react'
import axios from "axios";
import Movie from './Movie';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function RowCarousel({ title, fetchUrl, scrollId }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchUrl])


    const slideLeft = () => {
        const slider = document.getElementById('slider' + scrollId);
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        const slider = document.getElementById('slider' + scrollId);
        slider.scrollLeft = slider.scrollLeft + 500;
    };



    return (
        <>
            <h2 className='text-white font-bold p-4 md:text-xl'>{title}</h2>
            <div className='relative flex items-center group  '>
                <HiOutlineChevronLeft onClick={slideLeft} className='cursor-pointer text-white  absolute left-0 z-10 opacity-50 hover:opacity-100 hidden group-hover:block ' size={60} />
                <div id={'slider' + scrollId} className="  w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
                <HiOutlineChevronRight onClick={slideRight} className='cursor-pointer text-white     opacity-50 hover:opacity-100 absolute right-0 z-10 hidden group-hover:block ' size={60} />
            </div>
        </> 
    )
}

export default RowCarousel