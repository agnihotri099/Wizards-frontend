import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormExample({ pets, setSortedPetList }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedPets, setSortedPets] = useState([]);
  // Update the sortedPets array when pets or sorting criteria change
  useEffect(() => {
    let filteredPets = pets.filter((pet) =>
      pet.species.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort by price in ascending order
    filteredPets.sort((a, b) => a.price - b.price);

    setSortedPets(filteredPets);
    setSortedPetList(filteredPets);
  }, [pets, searchTerm]);

  useEffect(() => {
    const accessToken = localStorage.getItem("userData");
    if (!accessToken) {
      setIsLogin(!isLogin);
    }
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    localStorage.removeItem("userData");
  };
  const handleFav = () => {
    navigate("/favourite");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline style={{ margin: "0 20px" }}>
        <InputGroup>
          {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          /> */}
          <h2>Web Wizards</h2>
        </InputGroup>
      </Form>
      <Form inline style={{ margin: "0 20px" }}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Col>
          {!isLogin ? (
            <Col xs="auto">
              <Button type="submit" onClick={handleFav}>
                Favourites
              </Button>
            </Col>
          ) : null}
          {isLogin ? (
            <Col xs="auto">
              <Button type="submit" onClick={handleLogin}>
                Login
              </Button>
            </Col>
          ) : (
            <Col xs="auto">
              <Button type="submit" onClick={handleLogout}>
                Logout
              </Button>
            </Col>
          )}
        </Row>
      </Form>
    </Navbar>
  );
}

export default FormExample;
