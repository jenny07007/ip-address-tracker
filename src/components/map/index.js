import { useIpContext } from "../../contexts/IpContextProvider";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import Icon from "../../images/icon-location.svg";
import "./_map.scss";

const MapComponent = () => {
  const { position } = useIpContext();
  const newIcon = L.icon({ iconUrl: Icon, iconAnchor: [23, 56] });

  const positionReady = Object.entries(position).length > 0;
  if (!positionReady) return [51.5074, -0.127758];
  const location = [position.location.lat, position.location.lng];

  function ModifyMap() {
    const map = useMap();
    map.setView(L.latLng(location));
    return null;
  }

  return (
    <MapContainer
      center={location}
      zoom={14}
      scrollWheelZoom={true}
      className="map-container"
    >
      <ModifyMap />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location} icon={newIcon}>
        <Popup>
          <p>
            [ {location[0]}, {location[1]} ]
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
