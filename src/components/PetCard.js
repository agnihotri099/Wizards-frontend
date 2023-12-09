import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PetCard = ({ _id, name, species, image, age, price }) => {

    const navigate = useNavigate();

    const handleMoreDetailsClick = () => {
        // Check if the user is logged in based on your local storage setup
        const isLoggedIn = localStorage.getItem('userData');
    
        if (isLoggedIn) {
          // User is logged in, navigate to the "More details" page
          navigate(`/pet/${_id}`);
        } else {
          // User is not logged in, show a login prompt or redirect to the login page
          // For simplicity, this example alerts the user; you can customize it based on your authentication logic
          alert('Please log in to view more details.');
          // Alternatively, you can redirect to the login page using history.push('/login');
        }
      };
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img style={{height:'200px'}} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{species}</Card.Title>
        <Card.Text>
          Name: {name} | Age: {age}
        </Card.Text>
        <Card.Text>
          Price: ${price}
        </Card.Text>
        
          <Button variant="primary" onClick={handleMoreDetailsClick}>More details</Button>
        
      </Card.Body>
    </Card>
  );
};

export default PetCard;
