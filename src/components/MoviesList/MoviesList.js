import { useLocation } from "react-router-dom"
import { MovieList, MovieItem, LinkStyled } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
    const location = useLocation();

    return (
        <div>
            <MovieList>
                {movies.map(({ id, title, original_title, name }) => (
                    <MovieItem key={id}>
                    <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
                      {title ?? original_title ?? name} 
                     </LinkStyled>
                    </MovieItem>
                ))}
               
            </MovieList>
        </div>
    )
}



