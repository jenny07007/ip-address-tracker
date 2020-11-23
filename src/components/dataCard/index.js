import { useIpContext } from "../../contexts/IpContextProvider";
import "./_dataCard.scss";

const DataCard = () => {
  const { position } = useIpContext();
  const positionReady = Object.entries(position).length > 0;
  return (
    <div className="data-card-container">
      <div className="data-card">
        <div className="ip">
          <p>ip address</p>
          <p>{positionReady ? position.ip : "Loading..."}</p>
        </div>
      </div>
      <div className="data-card">
        <div className="location">
          <p>location</p>
          {positionReady ? (
            <p>
              {position.location.region} , {position.location.country}, {"\n"}
              {position.location.postalCode}{" "}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="data-card">
        <div className="timezone">
          <p>timezone</p>
          <p>UTC {positionReady ? position.location.timezone : "Loading..."}</p>
        </div>
      </div>
      <div className="data-card">
        <div className="isp">
          <p>isp</p>
          <p>{positionReady ? position.isp : "Loading..."}</p>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
