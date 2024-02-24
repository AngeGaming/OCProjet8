import './bannerAbout.scss';
import img from '../../assets/imgAbout.jpg';


const BannerAbout = () => {
  return (
    <div className="banner">
      <img src={img} alt="montagnes" className="bannerImg" />
      <div className="mask"></div>
    </div>
  );
};

export default BannerAbout;