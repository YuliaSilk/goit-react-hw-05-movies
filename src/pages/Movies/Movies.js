import { getMovieById } from "api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchBar } from "components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { InfinitySpin } from 'react-loader-spinner';


export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

   
useEffect(() => {
    const moviesQuery = async () => {
        try {
            setLoading(true);
            const fetchMovies = await getMovieById(query);
            setMovies(fetchMovies.results);
        } catch (error) {
            setError(true)
        }
    };
    moviesQuery();
}, [query]);

const handleSubmit= value => {
    setSearchParams({ query: value });
    };

return ( 
    <header>
        <SearchBar onSubmit={handleSubmit}/>
        {query && <MoviesList movies={movies}/>}
        {loading && (
            <InfinitySpin 
            width='200'
            color="#4fa94d"
          />
        )}
        {movies.lenght === 0 && <p>Sory! Not found.</p>}
        {error && <p>Whoops!</p>}
    </header>
);
}
