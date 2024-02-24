import "./Rating.scss";
import PropTypes from "prop-types";
import FullStar from "../../assets/FullStar.svg";
import EmptyStar from "../../assets/EmptyStar.svg";

const Rating = ({ rating }) => {
    const totalStars = 5;

    let starsFull = [];
    let starsEmpty = [];

    for (let index = 0; index < rating; index++) {
        starsFull.push(
            <img className="stars" key={index} src={FullStar} alt="Full Star" />
        );
    }

    for (let index = 0; index < totalStars - rating; index++) {
        starsEmpty.push(
            <img
                className="starsGrey"
                key={index}
                src={EmptyStar}
                alt="Empty Star"
            />
        );
    }

    return (
        <>
            {starsFull}
            {starsEmpty}
        </>
    );
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Rating;
