import "./collapsis.scss";
import { useState } from "react";
import svgArrow from "../../assets/arrow.svg";

const Collapsis = ({ title, description }) => {
    const [isVisible, setIsVisible] = useState(false);
    const handleToggle = () => {
        setIsVisible(!isVisible);
    };
    
    return (
        <div className={`colapsis ${isVisible ? "visible" : ""}`}>
            <div className="headColapsis" onClick={handleToggle}>
                <h3>{title}</h3>
                <img
                    src={svgArrow}
                    alt="flèche"
                    className={`arrow ${isVisible ? "down" : ""}`}
                />
            </div>
            <div className={`paragraph ${isVisible ? "animate" : ""}`}>
                {typeof description === 'string' && <p>{description}</p>}
                {Array.isArray(description) && <ul>
                    {description.map((equip, index) => (
                        <li key={index}>{equip}</li>
                    ))}
                </ul>}
            </div>
        </div>
    );
};

export default Collapsis;
