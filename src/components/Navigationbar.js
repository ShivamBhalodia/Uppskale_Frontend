import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
const Navigationbar = (props) => {
  return (
    <div>
      <Navbar bg="white" className="justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img
            src="./assets/icon.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Button as={Link} to={props.path} variant="primary" size="sm" className="rounded px-3 py-1">
          {props.text}
        </Button>
      </Navbar>
      <hr class="mt-0 mb-1" style={{ border: "1px solid #42a4f5" }} />
    </div>

  );

}

export default Navigationbar;
