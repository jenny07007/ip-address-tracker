import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Icon from "../../images/icon-location.svg";
import "./_map.scss";

const Map = ({ location }) => {
  const newIcon = L.icon({ iconUrl: Icon });

  return (
    <MapContainer
      center={location}
      zoom={13}
      scrollWheelZoom={true}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location} icon={newIcon}>
        <Popup>
          <p>{/* [ {latlng[0]}, {latlng[1]} ] */}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
