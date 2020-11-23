import MapComponent from "../map";
import "./_background.scss";
import img from "../../images/pattern-bg.png";

const Background = () => {
  return (
    <>
      <div className="bk-header">
        <img src={img} alt="img-bk" />
        <div className="bk-img"></div>
      </div>
      <MapComponent />
    </>
  );
};

export default Background;
