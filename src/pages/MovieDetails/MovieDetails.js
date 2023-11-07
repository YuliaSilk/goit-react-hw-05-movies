import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { InfinitySpin } from 'react-loader-spinner';
import { getDetails } from "api";
import { About, GoBackBtn, Gernes, LinksInfo, List, MovieContainer, MovieMainContainer, MovieTittle, Poster, SubTittles, TextAbout, LinkGoBack } from "./Moviedetails.styled";
import { IoArrowBack } from "react-icons/io5";


export default function MovieDetails()  {
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? 'movies')
    const params = useParams();
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
        <MovieMainContainer>
            <GoBackBtn>
           <LinkGoBack to={backLink.current} >
           <IoArrowBack  />
           </LinkGoBack>
           </GoBackBtn>
           {loading && (
            <InfinitySpin 
            width={200}
            color="#4fa94d"
          />
           )}
           {error && <p>Whoops!</p>}
           {movie.id && (
            <MovieContainer>
                <Poster src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg}
                    alt='poster' width={400}/>
            <About>
                <MovieTittle>{movie.title}</MovieTittle>
                <TextAbout>User score: {Math.round(movie.vote_average * 10)}%</TextAbout>
                <SubTittles>Overview</SubTittles>
                <TextAbout>{movie.overview}</TextAbout>
                <SubTittles>Genres</SubTittles>
                <Gernes>
                    {movie.genres.map(genre => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </Gernes>
             
            <div>
                <SubTittles>Additional information</SubTittles>
                <List>
                    <li>
                        <LinksInfo to="cast">Cast</LinksInfo>
                    </li>
                    <li>
                        <LinksInfo to="reviews">Reviews</LinksInfo>
                    </li>
                </List>
            </div>
            </About>
            </MovieContainer>
           )}
           <Outlet/>
        </MovieMainContainer>
    );
};
 
