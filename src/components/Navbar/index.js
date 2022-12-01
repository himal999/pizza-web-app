import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavbarElement';
import logo from '../../assets/cp-logo.png';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink src={logo}></NavLink>
        <NavIcon>
          <Bars onClick={toggle} />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
