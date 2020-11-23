import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

export const IpContext = createContext();
export const latLngContext = createContext();
//
export const useIpContext = () => useContext(IpContext);

export const IpContextProvider = ({ children }) => {
  const [position, setPosition] = useState({});
  const [ip, setIp] = useState("3.9.49.9");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip}`
        );
        setPosition(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => setIp("");
  }, [ip]);

  return (
    <IpContext.Provider value={{ position, setPosition, ip, setIp }}>
      {children}
    </IpContext.Provider>
  );
};
