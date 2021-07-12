<<<<<<< HEAD
import react from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/Signupoption.css'

const Home = () => {

    return (
        <div>
            <Navbar bg="white" expand="lg" className="Hi" style={{height:"60px"}}>
                <Link to="/"><img
                    src="./assets/Logo.svg"
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="Uppskale logo"
                /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-primary">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{color:"blue"}}>
                            <NavDropdown.Item as={Link} to="action/3.1" style={{color:"blue"}}>Action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="action/3.1" >Action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="action/3.2" >Another action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="action/3.3" >Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="login">Challenge</Nav.Link>
                        <Nav.Link as={Link} to="login" >Pricing</Nav.Link>
                        <Button as={Link} to="signupoption" variant="primary" size="sm" className="rounded px-3 mr-2 mt-2 " style={{height:"28px",paddingTop:"1px"}}>
                            Sign Up
                        </Button>
                        <Button as={Link} to="login" variant="primary" size="sm" className="rounded px-4 mt-2" style={{height:"28px",paddingTop:"1px"}}>
                            Login
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr class="mt-0 mb-1" style={{ border: "1px solid #42a4f5" }} />            
        </div>
    );
}



export default Home;
=======
import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";

import history from "../history";

const useStyles = makeStyles((theme) => ({}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <hr style={{ border: "1px solid blue", marginBlock: "0px" }} />
    </div>
  );
};

export default Home;
>>>>>>> 221b84f1509a26e946bcb591c22d3c038670249d
