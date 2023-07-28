import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";

import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';


function Movie({ item }) {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)

    const { user } = UserAuth()

    const movieID = doc(db, "users", `${user?.email}`)

    const saveShow = async () => {
        if (user?.email) {
            setLike(!like)
            setSaved(true)
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path,
                    overview: item.overview
                })
            })
        } else {
            alert("Please log in to save a movie")
        }
    }

    return (

        <div className='z-[1] cursor-pointer inline-block  relative p-1 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100  text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center  '>{item?.title}
                </p>

                <p className='absolute  top-0 left-0'
                    onClick={saveShow}>
                    {like ? (
                        <FaHeart className='absolute top-4 left-4' />
                    ) : (
                        <FaRegHeart className='absolute top-4 left-4' />
                    )}
                </p>

                <Link to={`/movie/${item.id}`}>
                    <p className='absolute top-4 left-10 w-5 h-5' >
                        <AiFillPlayCircle />
                    </p>
                </Link>


            </div>
        </div>
    )
}
export default Movie