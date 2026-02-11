import React, {useState} from "react";
import axios from "../node_modules/axios";
import ExportCards from "./components/ExportData";
const App = () => {
  async function getRequest(url) {
    const getRequestData = await axios.get(url);
    return getRequestData;
  }

  try {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState("");
    const [name, setName] = useState("");
    const handleName = (e) => {
      setName(e.target.value.trim());
    };
    const handleSearch = (e) => {
      e.preventDefault();
      const inputApi = `https://www.omdbapi.com/?s=${name}&apikey=c65fcde9`;
      getResponse(inputApi);
    };

    function getResponse(url) {
      setLoading("Loading...");
      const response = getRequest(url)
        .then((response) => {
          setLoading("");
          if (response?.data?.Response != "False") {
            setData(response?.data?.Search);
          } else {
            setLoading("Error!");
          }
        })
        .catch((error) => {
          setLoading("");
          throw new Error(error);
        });
    }

    return (
      <div className="dashboard">
        <form onSubmit={(e) => handleSearch(e)} className="dashboard__form">
          <input
            value={name}
            onChange={(e) => handleName(e)}
            className="dashboard__input"
            placeholder="Write movie name"
            type="search"
          />
          <button type="submit" className="dashboard__search">
            Search
          </button>
        </form>
        <h4 style={{color: "gray", fontFamily: "sans-serif", fontSize: "13px"}}>
          {loading}
        </h4>
        <div className="cards">
          <ExportCards data={data} />
        </div>
      </div>
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default App;
