import "./about.scss";
import BannerAbout from "../../components/BannerAbout/BannerAbout";
import Collapsis from "../../components/Collapsis/Collapsis";
import proposJson from "../../datas/propos.json";

function About() {
    return (
        <div className="about">
            <BannerAbout />
            {proposJson.map((propos, index) => (
                <Collapsis
                    key={index}
                    title={propos.title}
                    description={propos.description}
                />
            ))}
        </div>
    );
}

export default About;
