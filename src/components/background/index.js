import { useState } from "react";
import { useIpContext } from "../../contexts/IpContextProvider";
import Map from "../map";
import "./_background.scss";
import img from "../../images/pattern-bg.png";

const Background = () => {
  const { position } = useIpContext();
  const positionReady = Object.entries(position).length > 0;
  const [location] = useState(
    positionReady
      ? [position.location.lat, position.location.lng]
      : [51.5074, -0.127758]
  );

  return (
    <>
      <div className="bk-header">
        <img src={img} alt="img-bk" />
        <div className="bk-img"></div>
      </div>
      <Map location={location} />
    </>
  );
};

export default Background;
