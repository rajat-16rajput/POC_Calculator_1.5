import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./myStyles.css";
import axios from "axios";

function Results() {
  const navigate = useNavigate();

  const [records, setRecords] = useState([]);

  //USE OF AXIOS LIBRARY TO FETCH DATA FROM THE API
  axios
    .get("http://localhost:5000/calculations")

    .then((res) => {
      // console.log(res.data);
      setRecords(res.data);
      // console.log(records);
    })

    //CATCHING THE ERROR IF THE RESULTS ARE NOT FETCHED AND PROMPTING TO THE USER IN CONSOLE
    .catch((err) => {
      console.error(err);
    });

  return (
    <>
      <div>
        <h1>Results!</h1>
      </div>

      <ul>
        {/* USE OF LISTS AND KEYS IN TO DISPLAY THE ARRAY ELEMENTS */}
        {/* {records.map((record, index) => (
          <li key={index}>{record}</li>
        ))} */}

        <li>
          {/* PASSING THE DATA USING QUERY PARAMETER */}
          <a href="/?last_calculation= 77/77">77/7</a>
          <br></br>
          <a href="/?last_calculation=55*89">55x89</a>
        </li>
      </ul>

      <div>
        {/* ROUTING TO THE PREVIOUS PAGE  */}
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}

export default Results;
