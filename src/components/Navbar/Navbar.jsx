import React from "react";
import { Badge, Container, Button, Navbar } from "react-bootstrap";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavComponent = () => {
  const cart = useSelector((state) => state.allProducts.cart);
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Navbar
        </Navbar.Brand>
        <Button
          className="ml-auto"
          style={{ backgroundColor: "transparent", border: "none" }}
          onClick={(e) => {
            e.preventDefault();
            navigate("/cart");
          }}
        >
          <BsFillCartPlusFill style={{ fontSize: "35px", color: "#FFF" }} />
          <Badge bg="light" text="dark" style={{ fontSize: "10px" }}>
            {cart.length === 0 ? "0" : cart.length}
          </Badge>
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
