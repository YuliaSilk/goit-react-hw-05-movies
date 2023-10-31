import { getTrendingAll } from "api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

useEffect(() => {
    const trendMovies = async () => {
        try {
            setLoading(true);
            const trendMovie = await getTrendingAll();
            setMovies(trendMovie.results);
        } catch (error) {
            setError(true);
        }
    }
    trendMovies();
}, []);

return ( 
    <div>
        <h2>Trending today</h2>
        <MoviesList movies={movies}/>
        {loading && (
            <InfinitySpin 
            width='400'
            color="#4fa94d"
          />
        )}
        {error && <p>Whoops! Please reload this page!</p>}
    </div>
)

}
