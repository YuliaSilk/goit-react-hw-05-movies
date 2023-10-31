import { getCastId } from "api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export const Cast = () => {
    const [castList, setCastList] = useState([]);
    const [error, setError] = useState(false);
    const params = useParams();
    const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

    useEffect(() => {
        async function getMovieDetails() {
            try {
                setError(false);
                const fetchCast = await getCastId(params.moviedId);
                setCastList(fetchCast.cast);
            } catch (error) {
                setError(true);
            }
        }
        getMovieDetails();
    }, [params.moviedId]);

    return (
        <div>
        <ul>
          {castList.map(actor => (
            <li key={actor.id}>
            <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}` : defaultImg}
            alt='poster' width={200}/>
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
            </li>
          ))} 
        </ul>
        {error && <p>"Whooops! Please reload this page!"</p>}
        </div>
    );

}






