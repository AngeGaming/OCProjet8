import "./home.scss";
import imgTop from "../../assets/imgTopHomePage.png";
import logementsData from "../../datas/logements.json";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">
            <div className="banner">
                <img src={imgTop} alt="montagnes" className="bannerImg" />
                <div className="mask"></div>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="background">
                {logementsData.map((logement) => (
                    <Link to={`/location/${logement.id}`} key={logement.id}>
                        <Card key={logement.id} logement={logement} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
