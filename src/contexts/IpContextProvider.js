import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

export const IpContext = createContext();
export const latLngContext = createContext();

export const useIpContext = () => useContext(IpContext);
export const useLatLngcontext = () => useContext(latLngContext);

export const IpContextProvider = ({ children }) => {
  const [position, setPosition] = useState({});
  const [ip, setIp] = useState("3.9.49.9");
  const [latlng, setLatLng] = useState([51.5074, -0.127758]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip}`
        );
        setPosition(res.data);
        setLatLng([res.data.location.lat, res.data.location.lng]);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => setLatLng([]);
  }, [ip]);

  return (
    <IpContext.Provider value={{ position, setPosition, ip, setIp }}>
      <latLngContext.Provider value={{ latlng }}>
        {children}
      </latLngContext.Provider>
    </IpContext.Provider>
  );
};
