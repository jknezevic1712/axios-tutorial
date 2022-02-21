import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.scss";

const App = () => {
  const [data, setData] = useState({
    categories: [],
    created_at: "",
    icon_url: "",
    id: "",
    updated_at: "",
    url: "",
    value: "",
  });

  useEffect(() => {
    axios.get(`https://api.chucknorris.io/jokes/random`).then((res) => {
      const data = res.data;
      // console.log("QUERY: ", data);
      setData(data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Axios Tutorial</h1>
      <div className="App-list">
        <ul>
          <a href={data.url}>
            <li key={data.id}>{data.value}</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default App;
