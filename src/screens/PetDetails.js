import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const PetDetails = () => {
  const { id } = useParams();
  const [petDetails, setPetDetails] = useState(null);

  // Fetch pet details based on the ID
  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/pet/${id}`);
        const data = await response.json();
        setPetDetails(data);
      } catch (error) {
        console.error("Error fetching pet details:", error);
      }
    };

    fetchPetDetails();
  }, [id]);

  if (!petDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <h2>Pet Details</h2>
      <p>Name: {petDetails.name}</p>
      <p>Species: {petDetails.species}</p>
      <p>Age: {petDetails.age}</p>
      <p>Price: {petDetails.price}</p>
      Display other details as needed */}
      <Card style={{ width: "24rem", height: "25rem",marginTop:"100px" }}>
        <Card.Img variant="top" src={petDetails.image} />
        <Card.Body>
          <Card.Title>{petDetails.species}</Card.Title>
          <Card.Text>
            {petDetails.name} is a very energetic {petDetails.species}.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Name : {petDetails.name}</ListGroup.Item>
          <ListGroup.Item>Age : {petDetails.age}</ListGroup.Item>
          <ListGroup.Item>Price : ${petDetails.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Add to Cart</Card.Link>
          <Card.Link href="#">Add to favourite</Card.Link>
          <Card.Link href="/">Back to pet list</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PetDetails;
