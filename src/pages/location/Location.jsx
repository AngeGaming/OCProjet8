import "./location.scss";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logementsData from "../../datas/logements.json";
import Tags from "../../components/Tags/Tags";
import Collapsis from "../../components/Collapsis/Collapsis";
import Rating from "../../components/Rating/Rating";
import Caroussel from "../../components/Caroussel/Caroussel";

const Location = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = logementsData.find((item) => item.id === id);

    useEffect(() => {
        if (!location) {
            navigate("/error");
        }
    }, [id, location, navigate]);
    if (!location) {
        return null;
    }

    return (
        <>
            <div className="loc">
                <Caroussel slides={location.pictures} />
                <div className="loc-container-up-down">
                    <div className="loc-content-up">
                        <div className="loc-content-up-left">
                            <h2>{location.title}</h2>
                            <h3>{location.location}</h3>
                            <div className="container-tags">
                                {location.tags.map((tag, index) => (
                                    <Tags key={index} text={tag} />
                                ))}
                            </div>
                        </div>
                        <div className="hostRating">
                            <div className="host">
                                <h3>{location.host.name}</h3>
                                <img
                                    src={location.host.picture}
                                    alt={location.title}
                                />
                            </div>
                            <div className="rating">
                                <Rating
                                    rating={parseInt(location.rating, 10)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="loc-content-down">
                        <Collapsis title="Description" description={location.description}/>
                        {/* <Collapsis title="Équipement" description={location.equipments}></Collapsis> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Location;
