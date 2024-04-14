import { useState, useEffect, useRef, lazy } from "react";
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  NavLink,
} from "react-router-dom";
import { Audio } from "react-loader-spinner";
import clsx from "clsx";

const MovieDetailsCard = lazy(() =>
  import("../../components/MovieDetailsCard/MovieDetailsCard")
);
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import { requestForMovieDetails } from "../../services/requestData";

import css from "./MovieDetailsPage.module.css";

<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>;

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function fetchMovieDetails(movieId) {
      try {
        setError(false);
        setLoading(true);
        const data = await requestForMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <div className={css.detailsContainer}>
      {loading && <Loader />}
      {error && <ErrorMessage />}

      <h1 className={css.title}>Movie details</h1>
      <Link to={backLinkRef.current}>
        <p className={css.btn}>GO BACK</p>
      </Link>
      {movieDetails !== null && (
        <MovieDetailsCard movieDetails={movieDetails} />
      )}

      <div>
        <h2 className={css.title}>Additional information</h2>
        <div className={css.btnBox}>
          <NavLink className={buildLinkClass} to="cast">
            <p className={css.btn}>Cast</p>
          </NavLink>
          <NavLink className={buildLinkClass} to="reviews">
            <p className={css.btn}>Reviews</p>
          </NavLink>
        </div>

        {/* <Routes>
        <Route path="reviews" element={<MovieReviews />} />
        <Route path="cast" element={<MovieCast />} />
      </Routes> */}
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
