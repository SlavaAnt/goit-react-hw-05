import PropTypes from "prop-types";
import { requestImageSmall } from "../../services/requestImage";
import { formatDate } from "../../services/formatData";

import css from "./ReviewCard.module.css";

const ReviewCard = ({ review }) => {
  return (
    <>
      <div className={css.reviewContent}>
        <img
          className={css.reviewImg}
          src={requestImageSmall(review.author_details.avatar_path)}
          width="120"
          alt={review.author}
        />
        <h3 className={css.reviewAuthor}>{review.author}</h3>
        <p>{formatDate(review.created_at)}</p>
      </div>
      <p>{review.content}</p>
    </>
  );
};

export default ReviewCard;

ReviewCard.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    author_details: PropTypes.shape({
      avatar_path: PropTypes.string,
    }),
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};
