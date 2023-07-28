import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import requests from "../Request.js";
import ReactPlayer from "react-player";

const SingleMovie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [trailer, setTrailer] = useState(null);
    const location = useLocation();


    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch(requests.requestSingleMovie(id))
                .then((res) => res.json())
                .then((data) => {
                    setMovie(data);
                    const trailerVideo = data.videos?.results.find(
                        (video) =>
                            video.name === ("Official Trailer" ?? "Final Trailer") ||
                            video.name
                    );

                    if (trailerVideo) {
                        setTrailer(trailerVideo.key);
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    console.log(error);
                });
        }, 1500);
    }, []);

    return (
        <>
            {loading && (
                <div className="w-full h-screen bg-black flex justify-center items-center">
                    <MoonLoader color="red" speedMultiplier={0.5} size={40} />
                </div>
            )}
            {!loading && (
                <>
                    <div className="min-h-screen overflow-hidden relative flex w-full">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${trailer}`}
                            width='100%'
                            height='100%'
                            className="absolute top-12 left-0"
                        />
                    </div>
                </>
            )}
        </>
    );
};

export default SingleMovie;
