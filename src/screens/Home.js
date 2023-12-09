import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PetList from "../components/PetList";
import axios from "axios";

const Home = () => {
  const host = process.env.REACT_APP_API_URL;
  console.log(host);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortedPetList, setSortedPetList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${host}/api/pet`);
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar pets={pets} setSortedPetList={setSortedPetList} />

      <PetList
        pets={pets}
        loading={loading}
        error={error}
        sortedPetList={sortedPetList}
      />
      <Footer />
    </div>
  );
};

export default Home;
