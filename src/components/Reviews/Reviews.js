import { getMovieReviews } from "api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ReviewList, ReviewsText } from "./Rewievs.styled";
import { Tittle } from "components/Cast/Cast.styled";

export const Reviews = () => {
    const [reviewList, setReviewList] = useState([]);
    const [error, setError] = useState(false);
    const params = useParams();

    useEffect(() => {
        async function getMoviesDetails() {
            try {
                setError(false);
                const fetchReviews = await getMovieReviews(params.movieId);
                setReviewList(fetchReviews.results);
            } catch (error) {
                setError(true);
            }
        }
        getMoviesDetails();
    }, [params.movieId]);

    return (
        <div>
            {reviewList.length > 0 ? (
                <ReviewList>
                    <Tittle>Rewievs</Tittle>
                {reviewList.map(review => (
                    <li key={review.id}>
                <p>Author: <b>{review.author}</b> </p>
                <ReviewsText>{review.content}</ReviewsText>
                </li>
                ))}
                
                </ReviewList>
            ) : (
                <p>We don't have any reviews for this movie yet.</p>
            )}
          
            {error && <p>Whoops! Please reload this page!</p>}
        </div>
    )
}
