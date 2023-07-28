import requests from "../Request";
import MainContext from "../useContext/MainContext";
import { useContext, useState, useEffect } from 'react';
import { Rate } from 'antd';
import { Link } from "react-router-dom";


const SearchedMovies = () => {
    const { searchVal } = useContext(MainContext);
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        fetch(requests.requestSearch(searchVal))
            .then((res) => res.json())
            .then((data) => {
                setSearchData(data.results);
            });
    }, [searchVal]);

    return (
        <div className="pt-20 px-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-20">
            {
                searchData.map(item => (
                    <div>
                        <Link to={`movie/${item.id}`}>
                            {/* card top */}
                            <div className="w-full h-[250px]">
                                <img
                                    className="w-full h-full object-cover rounded-md"
                                    src={
                                        `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}` ||
                                        "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                                    }
                                />
                            </div>
                            {/* card bottom */}
                            <div className="text-white pt-1 font-poppins">
                                <h2>{item.title}</h2>
                                <p>{item.releaseDate}</p>
                                <div>{((item.vote_average).toFixed(1) || 'N/A')} <Rate className="hover:pointer-events-none" allowHalf defaultValue={Math.round(item.vote_average / 2)} /></div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default SearchedMovies