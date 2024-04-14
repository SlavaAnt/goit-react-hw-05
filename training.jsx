// import { useState, useEffect, lazy } from "react";
// import { useSearchParams } from "react-router-dom";
// import PropTypes from "prop-types";
// import toast, { Toaster } from "react-hot-toast";
// import { Audio } from "react-loader-spinner";

// // import MovieList from "../../components/MovieList/MovieList";
// import Loader from "../../components/Loader/Loader";
// import SearchBar from "../../components/Search/SearchBar";
// // import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
// const MovieList = lazy(() => import("../../components/MovieList/MovieList"));

// import { requestForMovieSearch } from "../../services/requestData";

// import css from "./MoviesPage.module.css";

// <Audio
//   height="80"
//   width="80"
//   radius="9"
//   color="green"
//   ariaLabel="three-dots-loading"
//   wrapperStyle
//   wrapperClass
// />;

// const MoviesPage = () => {
//   // const [searchQuery, setSearchQuery] = useState("");
//   const [searchParams, setSearchParams] = useSearchParams();
//   const searchQuery = searchParams.get("query");

//   const [searchMovie, setSearchMovie] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   // const [btnLoadMore, setBtnLoadMore] = useState(false);
//   // const [page, setPage] = useState(1);
//   // const page = searchParams.get("page");

//   const onSubmit = (searchQuery) => {
//     setSearchMovie([]);
//     // setPage(1);
//     setSearchParams({ query: searchQuery });
//     // setSearchParams({page:1});
//     // setBtnLoadMore(false);
//   };

//   // const onLoadMore = () => {
//   //   setPage(page + 1);
//   // };

//   useEffect(() => {
//     // if (searchQuery === null) return;
//     if (!searchQuery) return;

//     async function fetchMovies() {
//       try {
//         setLoading(true);
//         const data = await requestForMovieSearch(searchQuery);
//         //  const data = await requestForMovieSearch(searchQuery, page);

//         // console.log(data);

//         if (!data.results.length) {
//           toast(
//             "Unfortunately, there are no movies that match your request! Please try again!"
//           );
//         } else {
//           // setSearchMovie((previousMovies) => [
//           //   ...previousMovies,
//           //   ...data.results,
//           setSearchMovie(data.results);

//           // if (data.total_pages > page) {
//           //   setBtnLoadMore(true);
//           // } else {
//           //   setBtnLoadMore(false);
//           //   toast("These are all pictures that are found at your request!");
//           // }
//         }
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchMovies();
//   }, [searchQuery]);
//   // }, [searchQuery, page]);

//   return (
//     <>
//       <SearchBar onSubmit={onSubmit} />

//       <Toaster position="top-center" />

//       {loading && <Loader />}
//       {error && <ErrorMessage />}

//       {searchMovie.length > 0 && <MovieList movies={searchMovie} />}

//       {/* {btnLoadMore && <LoadMoreBtn onLoadMore={onLoadMore} />} */}
//     </>
//   );
// };

// export default MoviesPage;
