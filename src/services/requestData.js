import axios from "axios";

// const url =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const BASE_URL = "https://api.themoviedb.org";

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGZhOTAxNDVhZDlkNDY1Y2ZhNTk3NGViMzVkZGIzNSIsInN1YiI6IjY2MTE2OWVjMWYzMzE5MDE3ZGMyMWFlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4eSRL9AKvzOW7vTWBpkB9Yfd1HF44Cb2_K-4Y4tIs7E",
  },
};

// for trending movies;

export const requestForTrendMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/3/trending/movie/day?language=en-US`,
    options
  );
  return response.data;
};

// for searching movies;
export const requestForMovieSearch = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/3/search/movie?query=${query}`,
    options
  );
  return response.data;
};

// for searching movies;
// export const requestForMovieSearch = async (query, page) => {
//   const response = await axios.get(
//     `${BASE_URL}/3/search/movie?query=${query}&page=${page}`,
//     options
//   );
//   return response.data;
// };

// for movie details;
export const requestForMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/3/movie/${movieId}`, options);
  return response.data;
};

// for movie cast;
export const requestForMovieCast = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${movieId}/credits`,
    options
  );
  return response.data;
};

// https://api.themoviedb.org/3/movie/{movie_id}/credits

// for movie reviews;
export const requestForMovieReviews = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${movieId}/reviews`,
    options
  );
  return response.data;
};
