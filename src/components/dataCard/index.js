import "./_dataCard.scss";

const DataCard = () => {
  return (
    <div className="data-card-container">
      <div className="data-card">
        <div className="ip">
          <p>ip address</p>
          <p>192.212.174.101</p>
        </div>
      </div>
      <div className="data-card">
        <div className="location">
          <p>location</p>
          <p>Brookly, NY 10001</p>
        </div>
      </div>
      <div className="data-card">
        <div className="timezone">
          <p>timezone</p>
          <p>UTC-05:00</p>
        </div>
      </div>
      <div className="data-card">
        <div className="isp">
          <p>isp</p>
          <p>SpaceX Starlink</p>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
