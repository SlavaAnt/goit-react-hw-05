// https://developer.themoviedb.org/docs/image-basics
// base_url, a file_size and a file_path.

export const requestImage = (image) => {
  if (!image || image === null || image === "") {
    return "https://a-game.kiev.ua/wp-content/uploads/2022/05/nophoto.png";
  }
  return `https://image.tmdb.org/t/p/w500${image}`;
};

export const requestImageSmall = (image) => {
  if (!image || image === null || image === "") {
    return "https://a-game.kiev.ua/wp-content/uploads/2022/05/nophoto.png";
  }
  return `https://image.tmdb.org/t/p/w92${image}`;
};

// https://isgkr.com.ua/images/sampledata/foto/nophoto.png
// https://a-game.kiev.ua/wp-content/uploads/2022/05/nophoto.png
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bdnDYhZv7uscwF1wasvcV7VvSppGI2asHSqZDwADcLV9kuS0j1c1Z412faEmTBRu2fs&usqp=CAU

// {
//   "images": {
//     "base_url": "http://image.tmdb.org/t/p/",
//     "secure_base_url": "https://image.tmdb.org/t/p/",
//     "backdrop_sizes": [
//       "w300",
//       "w780",
//       "w1280",
//       "original"
//     ],
//     "logo_sizes": [
//       "w45",
//       "w92",
//       "w154",
//       "w185",
//       "w300",
//       "w500",
//       "original"
//     ],
//     "poster_sizes": [
//       "w92",
//       "w154",
//       "w185",
//       "w342",
//       "w500",
//       "w780",
//       "original"
//     ],
//     "profile_sizes": [
//       "w45",
//       "w185",
//       "h632",
//       "original"
//     ],
//     "still_sizes": [
//       "w92",
//       "w185",
//       "w300",
//       "original"
//     ]
//   },
//   "change_keys": [
//     "adult",
//     "air_date",
//     "also_known_as",
//     "alternative_titles",
//     "biography",
//     "birthday",
//     "budget",
//     "cast",
//     "certifications",
//     "character_names",
//     "created_by",
//     "crew",
//     "deathday",
//     "episode",
//     "episode_number",
//     "episode_run_time",
//     "freebase_id",
//     "freebase_mid",
//     "general",
//     "genres",
//     "guest_stars",
//     "homepage",
//     "images",
//     "imdb_id",
//     "languages",
//     "name",
//     "network",
//     "origin_country",
//     "original_name",
//     "original_title",
//     "overview",
//     "parts",
//     "place_of_birth",
//     "plot_keywords",
//     "production_code",
//     "production_companies",
//     "production_countries",
//     "releases",
//     "revenue",
//     "runtime",
//     "season",
//     "season_number",
//     "season_regular",
//     "spoken_languages",
//     "status",
//     "tagline",
//     "title",
//     "translations",
//     "tvdb_id",
//     "tvrage_id",
//     "type",
//     "video",
//     "videos"
//   ]
// }
