import PropTypes from "prop-types";
import { requestImage } from "../../services/requestImage";
import css from "./CastCard.module.css";

const CastCard = ({ actor }) => {
  return (
    <div className={css.actorCard}>
      <div>
        <p>{actor.name}</p>
        <p>
          Character:{" "}
          <span>
            <i>
              <b>{actor.character || "Character"}</b>
            </i>
          </span>
        </p>
      </div>
      <div className={css.actorCardContainer}>
        <img
          className={css.actorImg}
          src={requestImage(actor.profile_path)}
          width="120"
          alt={actor.name}
        />
      </div>
    </div>
  );
};

export default CastCard;

CastCard.propTypes = {
  actor: PropTypes.shape({
    name: PropTypes.string,
    character: PropTypes.string,
    profile_path: PropTypes.string,
  }).isRequired,
};
