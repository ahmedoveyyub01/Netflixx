import React from 'react'
import Main from './../components/Main';
import requests from './../Request';
import RowCarousel from './../components/RowCarousel';
import Navbar from './../components/Navbar';
import { useContext, useState, useEffect } from 'react';
import MainContext from '../useContext/MainContext';
import SearchedMovies from './../components/SearchedMovies';

function Home() {
    const { searchVal } = useContext(MainContext);

    return (
        <div>
            
            <Navbar />
            {searchVal.length === 0 ? (
                <>
                    <Main />
                    <RowCarousel scrollId="1" title="Up Coming" fetchUrl={requests.requestUpcoming} />
                    <RowCarousel scrollId="2" title="Popular" fetchUrl={requests.requestPopular} />
                    <RowCarousel scrollId="3" title="Trending" fetchUrl={requests.requestTrending} />
                    <RowCarousel scrollId="4" title="Top Rated" fetchUrl={requests.requestTopRated} />
                    <RowCarousel scrollId="5" title="Horror" fetchUrl={requests.requestHorror} />
                </>
            ) : <SearchedMovies />}
        </div>
    )
}

export default Home