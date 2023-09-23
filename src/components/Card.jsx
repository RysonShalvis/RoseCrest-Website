import "../scss/_card.scss";
import PropTypes from "prop-types";

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-container">
        <h2>{title}</h2>
      </div>
      <p>{children}</p>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
