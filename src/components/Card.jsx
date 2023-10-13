import "../scss/_card.scss";
import PropTypes from "prop-types";

const Card = ({ title, children, enclosedCard }) => {
  return (

    enclosedCard ? 
    <div className="card enclosed-card">
      <div className="card-container">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
    :
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
  enclosedCard: PropTypes.bool
};

export default Card;
