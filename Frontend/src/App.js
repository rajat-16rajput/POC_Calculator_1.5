import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Axios from "axios";
import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import Interface from "./Components/Interface";
import results from "./calculations/results";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <ToastContainer /> */}
        <Routes>
          <Route exact path="/" Component={Interface}></Route>
          <Route path="/calculations/results" Component={results}></Route>
          {/* <Interface /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
