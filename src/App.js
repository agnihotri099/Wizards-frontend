import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import PetDetails from "./screens/PetDetails";
import { useEffect, useState } from "react";
import Favourite from "./screens/Favourite";

function App() {
  // const [userId, setUserId] = useState(null)
  // useEffect(() => {
  //   const accessToken = JSON.parse(localStorage.getItem("userData"));
  //   if (accessToken) {
  //     setUserId(accessToken.id)
  //   }
  // },[]);
  // console.log(userId);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pet/:id" element={<PetDetails />} />
       
      </Routes>
    </Router>
  );
}

export default App;
