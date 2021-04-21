import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

// this url makes the movie images display properly. It's gotten from the registered tmdb.org
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState("");


    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        // if [], run once when the row loads, and dont run it again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // console.table(movies);


    // For the youtube movie params. it contains the styling of the video
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    };

    // for fetching movie trailer from youtube i.e when you click on a movie, it displays the trailer below it
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    // https://www.youtube.com/watch?v=XtMTHy8QKqU   
                    // the video url is gotten from the link after the letter v, i.e.  from 'v=' , the remaining letters after that is the url passed into the code
                    // so instead of passing each url, it gets the url for each video by passing v in the code
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get("v"));
                }).catch((error) => console.log(error));
        }
    };


    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row_posters'>
                {movies.map((movie) => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={movie.id}
                        className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>

            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

        </div>
    )
}

export default Row;
