import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';


const Favourite = () => {
//   const [petFavlist, setPetFavList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log(userId);
//         const response = await axios.get(
//           `http://localhost:8000/api/fav/${userId}`
//         );
//         console.log(response.data.pets[0]);
        
//         setPetFavList(response.data.pets, () => {
//             console.log(petFavlist);
//           });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("Error fetching data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
  return (
    <div>
      {/* <Navbar /> */}

      {/* <PetList pets={petFavlist} loading={loading} error={error} /> */}
      <div style={{margin:"50px 0 60px 600px"}}>
      <h1>This is my favourite section</h1>
      
      </div>
      <div style={{marginLeft:"800px"}}>
      {/* Link button */}
      <Link to="/" className="button">
        back to main page
      </Link>
    </div>
      
      <div style={{marginTop:"588px"}}>
      <Footer />
      </div>
      
    </div>
  );
};

export default Favourite;
