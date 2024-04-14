import { useEffect, useState, lazy } from "react";
import { useParams } from "react-router-dom";

const CastCard = lazy(() => import("../CastCard/CastCard"));
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { requestForMovieCast } from "../../services/requestData";

import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setError(false);
        setLoading(true);

        const data = await requestForMovieCast(movieId);

        setMovieCast(data.cast);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {!loading &&
        !error &&
        (movieCast.length ? (
          <ul className={css.castList}>
            {movieCast.map((actor) => {
              return (
                <li className={css.castItem} key={actor.id}>
                  <CastCard actor={actor} />
                </li>
              );
            })}
          </ul>
        ) : (
          <p className={css.message}>There is no data</p>
        ))}
    </div>
  );
};

export default MovieCast;
