import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Results() {
  const navigate = useNavigate();
  const [records, setRecords] = useState();
  axios
    .get("http://localhost:5000/calculations")
    .then((res) => {
      // console.log(res.data);
      setRecords(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  // useEffect(() => {
  //   fetch("http://localhost:5000/calculations")
  //     .then((response) => response.json)
  //     .then((data) => setRecords(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <div>
        <h1>Results!</h1>
      </div>

      <div>
        <h3>{records}</h3>
      </div>

      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}

export default Results;
