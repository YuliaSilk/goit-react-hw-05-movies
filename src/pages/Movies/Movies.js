import React from "react";
import { getMovieByQuery } from "api";
import { SearchBar } from "components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { InfinitySpin } from 'react-loader-spinner';
import { MoviesList } from "components/MoviesList/MoviesList";


export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

   
useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
        return
    }

    const moviesQuery = async () => {
        try {
            setLoading(true);
            const fetchMovies = await getMovieByQuery(query);
            setMovies(fetchMovies.results);
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    };
    moviesQuery();
}, [searchParams]);

const handleSubmit= value => {
    setSearchParams({ query: value });
    };

return ( 
    <div>
        <SearchBar onSubmit={handleSubmit}/>
        {movies.length > 0 && <MoviesList movies={movies}/>}
        {movies.map(movie => (
            <div key={movie.id}>
                 <Link to={`/movies/${movie.id}`}> 
                    {movie.title ?? movie.original_title ?? movie.name}
                </Link>
            </div>
        ))}
       
        {loading && (
            <InfinitySpin 
            width='200'
            color="#4fa94d"
          />
        )}
        {movies.length === 0 && <p>Please, enter a name</p>}
        {error && <p>Whoops!</p>}
    </div>
);
}


// 




