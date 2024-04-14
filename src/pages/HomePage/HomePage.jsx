import { useState, useEffect, lazy } from "react";

const MovieList = lazy(() => import("../../components/MovieList/MovieList"));
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import { requestForTrendMovies } from "../../services/requestData";

import css from "./HomePage.module.css";

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const data = await requestForTrendMovies();
        setTrendMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={css.homePage}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {trendMovies.length > 0 && <MovieList movies={trendMovies} />}
    </div>
  );
};

export default HomePage;
