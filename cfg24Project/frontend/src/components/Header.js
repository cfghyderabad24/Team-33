import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Nav,Navbar ,NavDropdown} from 'react-bootstrap';
import { SiGoogletranslate } from "react-icons/si";
import Gt from './Gt';

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="success" fixed="top" variant="dark" mb="5" >
          <Navbar.Brand href="/">
          <img
              src='https://give.do/static/img/logos/7AE/fbcc4b68-0966-44e7-a211-e2b00fd29da5.jpg'
              style={{
                marginRight:'4px',
                width:'30px',
                height:'30px',
                borderRadius:'50%'
              }}
              className="d-inline-block align-top"
              alt="logo"
            />
            IFTR
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <>
                  <Nav.Item>
                    <Nav.Link eventKey="1" as={NavLink} to="/">
                      Home
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="2" as={NavLink} to="/signup">
                      Signup
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="3" as={NavLink} to="/login">
                      Login
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="4" as={NavLink} to="/aboutus">
                      About us
                    </Nav.Link>
                  </Nav.Item>
                </>
            </Nav>

          </Navbar.Collapse>
        <div className="dropdown">
          <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
            Translate<SiGoogletranslate/>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Gt />
          </div>
        </div>
      </Navbar>
    </div>
  )
}

export default Header


  
    