import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  font-weight: 700;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));
`;
export const NavLink = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 2rem;
  display: block;
  align-items: center;
  width: 90px;
  height: 80px;
  text-decoration: none;
  transform: translate(60%, 20%);
  cursor: pointer;
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaBars)`
  font-size: 2rem;
  transform: translate(-100%, 100%);
`;
