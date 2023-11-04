import { getTrendingAll } from "api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { HomeHeader, ContainerHome } from "./Home.styled";

export default function HomePage() {
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
        } finally {
            setLoading(false);
        }
    }
    trendMovies();
}, []);
console.log(movies);
return ( 
    <ContainerHome>
        <HomeHeader>Trending today</HomeHeader>
        <MoviesList movies={movies}/>
        {loading && (
            <InfinitySpin 
            width='400'
            color="#4fa94d"
          />
        )}
        {error && <p>Whoops! Please reload this page!</p>}
    </ContainerHome>
)

}
