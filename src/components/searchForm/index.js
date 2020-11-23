import { useState } from "react";
import axios from "axios";
import { useIpContext } from "../../contexts/IpContextProvider";
import "./_searchForm.scss";

const SearchForm = () => {
  const { setPosition } = useIpContext();
  const [ipAddress, setIpAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ipAddress}`
      );
      setPosition(res.data);
    } catch (error) {
      console.log(error.messages);
    }
    setIpAddress("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for any IP address or domain"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
      />
      <button type="submit" className="search-icon"></button>
    </form>
  );
};

export default SearchForm;
