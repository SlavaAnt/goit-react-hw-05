import { useState, useEffect, lazy } from "react";
import { useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Audio } from "react-loader-spinner";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const SearchBar = lazy(() => import("../../components/Search/SearchBar"));
const MovieList = lazy(() => import("../../components/MovieList/MovieList"));

import { requestForMovieSearch } from "../../services/requestData";

// import css from "./MoviesPage.module.css";

<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>;

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = (searchQuery) => {
    setSearchMovie([]);

    setSearchParams({ query: searchQuery });
  };

  useEffect(() => {
    if (!searchQuery) return;

    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await requestForMovieSearch(searchQuery);

        if (!data.results.length) {
          toast(
            "Unfortunately, there are no movies that match your request! Please try again!"
          );
        } else {
          setSearchMovie(data.results);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />

      <Toaster position="top-center" />

      {loading && <Loader />}
      {error && <ErrorMessage />}

      {searchMovie.length > 0 && <MovieList movies={searchMovie} />}
    </>
  );
};

export default MoviesPage;
