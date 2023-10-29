import { getRewiewsId } from "api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const Reviews = () => {
    const [reviewList, setReviewList] = useState([]);
    const [error, setError] = useState(false);
    const params = useParams();

    useEffect(() => {
        async function getMoviesDetails() {
            try {
                setError(false);
                const fetchReviews = await getRewiewsId(params.movieId);
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
                <ul>
                {reviewList.map(review => (
                    <li key={review.id}>
                <p>Author: <b>{review.author}</b> </p>
                <p>{review.content}</p>
                </li>
                ))}
                
                </ul>
            ) : (
                <p>We don't have any reviews for this movie yet.</p>
            )}
          
            {error && <p>Whoops! Please reload this page!</p>}
        </div>
    )
}
