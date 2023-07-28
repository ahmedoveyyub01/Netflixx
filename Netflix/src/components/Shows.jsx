import { useState, useEffect } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

function SavedShows() {
    const [movies, setMovies] = useState([])
    const { user } = UserAuth()

    useEffect(() => {
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        });
    }, [user?.email]);

    const movieRef = doc(db, "users", `${user?.email}`)

    const deleteShow = async (passedID) => {
        try {
            const updatedMovies = movies.filter((item) => item.id !== passedID);
            setMovies(updatedMovies); // Update the state immediately to reflect the change
            await updateDoc(movieRef, {
                savedShows: updatedMovies,
            });
        } catch (error) {
            console.log(error);
        }
    };


    const slideLeft = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };


    console.log(movies)
    return (
        <>
            <h2 className='text-white font-bold p-4 md:text-xl'>My Shows</h2>
            <div className='relative flex items-center group  '>
                <HiOutlineChevronLeft onClick={slideLeft} className='cursor-pointer text-white  absolute left-0 z-10 opacity-50 hover:opacity-100 hidden group-hover:block ' size={60} />
                <div id={'slider'} className=" relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    {movies.map((item, id) => (
                        
                        <div key={id} className='cursor-pointer inline-block  relative p-1 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]'>

                            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item.img}`} alt={item.title}
                            />

                            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100  text-white'>
                                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center  '>{item?.title}
                                </p>
                                <p onClick={() => deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                            </div>

                        </div>
                    ))}
                    
                </div>
            
                <HiOutlineChevronRight onClick={slideRight} className='cursor-pointer text-white     opacity-50 hover:opacity-100 absolute right-0 z-10 hidden group-hover:block ' size={60} />
            </div>
        </>
    )
}

export default SavedShows