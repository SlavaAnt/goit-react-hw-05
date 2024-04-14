import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { requestImageSmall } from "../../services/requestImage";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" && (
        <h1 className={css.title}>Trending today</h1>
      )}
      {location.pathname === "/movies" && <h1 className={css.title}>Movies</h1>}

      <ul className={css.moviesContainer}>
        {movies.map((movie) => {
          return (
            <li key={movie.id} className={css.movieItem}>
              <Link to={`/movies/${movie.id}`} state={location}>
                <div className={css.movieBox}>
                  <p className={css.movieRating}>
                    {Number(movie.vote_average).toFixed(1)}
                  </p>
                  <img
                    className={css.movieImg}
                    src={requestImageSmall(movie.backdrop_path)}
                    alt={movie.title}
                  />
                  <h3>{movie.title}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
};
