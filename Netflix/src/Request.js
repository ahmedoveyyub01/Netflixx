const key = "1dbc2da14967ce943ec70d873aeb0d54"

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=10`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=6`,
    requestSearch: (query) => `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`,
    requestHorror: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=9`,
    requestSingleMovie: (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=videos`

}

export default requests