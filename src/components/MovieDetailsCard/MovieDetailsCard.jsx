import PropTypes from "prop-types";
import { requestImage } from "../../services/requestImage";
import css from "./MovieDetailsCard.module.css";

const MovieDetailsCard = ({ movieDetails }) => {
  const {
    title,
    poster_path,
    release_date,
    runtime,
    budget,
    popularity,
    genres,
    overview,
    vote_average,
    vote_count,
  } = movieDetails;
  return (
    <div className={css.movieContainer}>
      <img
        className={css.movieImg}
        src={requestImage(poster_path)}
        alt={title}
      />
      <div>
        <h2 className={css.movieTitle}>{title}</h2>
        <p className={css.text}>Release date: {release_date}</p>
        <p className={css.text}>Film duration: {runtime} minutes</p>
        <p className={css.text}>Budget: {budget} $</p>
        <p className={css.text}>Popularity: {popularity}</p>
        <h3 className={css.subTitle}>Genres:</h3>
        <ul className={css.genreBox}>
          {genres.map((genre) => {
            return (
              <li key={genre.id}>
                <p className={css.text}>{genre.name}</p>
              </li>
            );
          })}
        </ul>
        <h3 className={css.subTitle}>
          IMDB {vote_average} / {vote_count}
        </h3>
        <h3 className={css.subTitle}>Overview:</h3>
        <p className={css.text}>{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetailsCard;

MovieDetailsCard.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    budget: PropTypes.number,
    popularity: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.shape),
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }).isRequired,
};
