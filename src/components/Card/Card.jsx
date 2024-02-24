import "./Card.scss";
import React from "react";

const Card = ({ logement }) => {
    return (
        <div className="card">
            <img src={logement.cover} alt={logement.title} />
            <div className="title-overlay">
                <h4 className="title-logement">{logement.title}</h4>
            </div>
        </div>
    );
};

export default Card;
