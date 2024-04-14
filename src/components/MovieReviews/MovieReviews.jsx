import { useEffect, useState, lazy } from "react";
import { useParams } from "react-router-dom";

const ReviewCard = lazy(() => import("../ReviewCard/ReviewCard"));
// import ReviewCard from "../ReviewCard/ReviewCard";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { requestForMovieReviews } from "../../services/requestData";

import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        setError(false);
        setLoading(true);

        const data = await requestForMovieReviews(movieId);

        setMovieReviews(data.results);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}

      {!loading &&
        !error &&
        (movieReviews.length ? (
          <ul className={css.reviewsList}>
            {movieReviews.map((review) => (
              <li className={css.reviewItem} key={review.id}>
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        ) : (
          <p className={css.message}>There are no reviews for this movie!</p>
        ))}
    </>
  );
};

export default MovieReviews;
