// this key is gotten from tmdb site when registered
const APIKEY = "718c0eaf8578d8ef6e4a3990f77c6734";

// these are just API keys from netflix to fetch series of movies
const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
}

export default requests;