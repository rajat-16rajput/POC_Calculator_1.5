import React, { useState } from "react";
import { useNavigate, Route } from "react-router-dom";

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
        <h1>History!</h1>
      </div>

      <ul>
        {/* USE OF LISTS AND KEYS TO DISPLAY THE ARRAY ELEMENTS */}
        {/* PASSING THE DATA USING QUERY PARAMETER */}
        {records.map((record, index) => (
          <li key={index}>
            <a href={`http://localhost:3000/?last_calculation=` + record}>
              {record}
            </a>
          </li>
        ))}

        {/* <li>
          <a href="/?last_calculation= 77/77">77/7</a>
        </li>
        <li>
          <a href="/?last_calculation=55*89">55x89</a>
        </li> */}
      </ul>

      <div>
        {/* ROUTING TO THE PREVIOUS PAGE  */}
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}

export default Results;

