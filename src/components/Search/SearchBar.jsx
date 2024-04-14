import { FcSearch } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";

import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const inputQuery = evt.target.elements.inputValue.value;

    if (!inputQuery.trim()) {
      toast("You need to enter the movie title to search it!"),
        { position: "top-center" };
      return;
    }

    onSubmit(inputQuery);

    evt.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          className={css.searchInput}
          type="text"
          name="inputValue"
          placeholder="Search movie"
        />
        <button className={css.btnSearch} type="submit">
          <FcSearch />
          Search
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
