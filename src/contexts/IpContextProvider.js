import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

export const IpContext = createContext();

export const useIpContext = () => useContext(IpContext);

export const IpContextProvider = ({ children }) => {
  const [position, setPosition] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        setPosition(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <IpContext.Provider value={{ position, setPosition }}>
      {children}
    </IpContext.Provider>
  );
};
