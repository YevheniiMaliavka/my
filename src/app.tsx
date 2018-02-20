import * as React from 'react';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';

export const App = () => (
  <Navbar staticTop collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">YM</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">
          About Me
        </NavItem>
        <NavItem eventKey={3} href="#">
          Projects
        </NavItem>
        <NavItem eventKey={3} href="#">
          Experiences
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          CV
        </NavItem>
        <NavItem eventKey={1} href="#">
          Contact
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
