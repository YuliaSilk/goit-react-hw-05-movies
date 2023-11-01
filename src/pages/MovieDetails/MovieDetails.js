import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { InfinitySpin } from 'react-loader-spinner';
import { getDetails } from "api";


export default function MovieDetails()  {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const backLink = location.state?.from ?? '/';
    const params = useParams();
    const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

useEffect(() => {
    async function getMovieDetails() {
        try {
            setLoading(true);
            const fetchMovieDetails = await getDetails(params.movieId);
            setMovie(fetchMovieDetails);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    getMovieDetails();
}, [params.movieId])

    return (
        <div>
           <Link backLink={backLink}/>
           {loading && (
            <InfinitySpin 
            width='200'
            color="#4fa94d"
          />
           )}
           {error && <p>Whoops!</p>}
           {movie.id && (
            <div>
                <img src={movie.poster_rath ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg}
                    alt='poster' width={500}/>
                <h2>{movie.title}</h2>
                <p>User score: {Math.round(movie.vote_average * 10, 2)}%</p>
                <h3>Overview</h3>
                {movie.overview}
                <h3>Genres</h3>
                <ul>
                    {movie.genres.map(genre => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
                <p>Additional information</p>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </div>
           )}
           <Outlet/>
        </div>
    );
};
 
