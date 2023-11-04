import { getMovieCredits } from "api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { CastImg, CastItem, CastList, CastName, CastText, ContainerCasts, Tittle } from "./Cast.styled";

export const Cast = () => {
    const [castList, setCastList] = useState([]);
    const [error, setError] = useState(false);
    const params = useParams();
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    useEffect(() => {
        async function getMovieCasts() {
            try {
                setError(false);
                const fetchCast = await getMovieCredits(params.movieId);
                setCastList(fetchCast.cast);
            } catch (error) {
                setError(true);
            }
        }
        getMovieCasts();
    }, [params.movieId]);

    return (
        <ContainerCasts>
                    <Tittle>Casts</Tittle>
        <CastList>
    
          {castList.map(actor => (
            <CastItem key={actor.id}>
            <CastImg src={actor.profile_path ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}` : defaultImg}
            alt='poster' width={200}/>
            <CastName>{actor.name}</CastName>
            <CastText>Character: {actor.character}</CastText>
            </CastItem>
          ))} 
        </CastList>
        {error && <p>"Whooops! Please reload this page!"</p>}
        {/* <Toaster/> */}
        </ContainerCasts>
    );

}







