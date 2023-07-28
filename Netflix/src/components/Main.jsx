import React, { useEffect, useState } from 'react'
import requests from './../Request';
import axios from "axios";
import { BsFillPlayFill } from "react-icons/bs";
import { FiInfo } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io";
import ReactPlayer from 'react-player/lazy';

function Main() {
    const [videoClick, setVideoClick] = useState("")

    const videoPlay = () => {
        setVideoClick(!videoClick)
    }



    const [movies, setMovies] = useState([])
    const [trailer, setTrailer] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
            setSelectedMovie(
                response.data.results[Math.floor(Math.random() * response.data.results.length)]
            )
        })
    }, [])

    useEffect(() => {
        if (selectedMovie) {
            fetch(requests.requestSingleMovie(selectedMovie.id)).then(response => response.json())
                .then(data => {
                    const trailer = data.videos.results.find(
                        (video) =>
                            video.name === ("Official Trailer" ?? "Final Trailer") || video.name
                    );

                    if (trailer) {
                        setTrailer(trailer.key);
                    }
                })
        }
    }, [selectedMovie]);

    console.log(trailer);




    return (
        <>
            {
                videoClick ?
                    (<div className=' flex flex-col space-y-2 py-16 md:space-y-4 h-[100vh] lg:justify-end lg:pb-12   text-white  '>

                        <div className=''>
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${trailer}`}
                                width='100%'
                                height='100%'
                                className="absolute top-12 left-0"
                            />
                        </div>

                    </div>)

                    :

                    (<div className='flex flex-col space-y-2 py-16  md:space-y-4 lg:h-[100vh] lg:justify-end lg:pb-12   text-white  '>
                        <div className='absolute top-0 left-0 -z-10 h-[95vh] '>
                            <img className='object-cover max-sm:h-[80%]' src={`https://image.tmdb.org/t/p/original/${selectedMovie?.backdrop_path}`} alt={selectedMovie?.title} />
                        </div>

                        <div className='px-14'>
                            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>{selectedMovie?.title}</h1>
                            <p className=' max-w-xs text-xs md:max-w-lg  md:text-lg lg:max-w-2xl lg:text-2xl'>Release: {selectedMovie?.release_date}</p>
                            <p className='max-w-xs text-xs md:max-w-lg  md:text-lg lg:max-w-2xl lg:text-xl'>{selectedMovie?.overview}</p>

                            <div className='flex space-x-3'>
                                <button onClick={videoPlay} className='bannerButton bg-white text-black ' ><BsFillPlayFill className=' w-4 h-4 text-black md:h7 md:w-7' />  Play</button>
                                <button className='bannerButton bg-[gray]/70'><FiInfo className=' w-5 h-5 md:h-8 md:w-8 items-center' />More Info</button>
                            </div>
                        </div>
                    </div>)
            }

        </>

    )
}

export default Main