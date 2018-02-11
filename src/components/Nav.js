import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

export default () => (
  <Nav>
    <NavLink href="http://google.com">Inicio</NavLink>
    <NavLink href="http://google.com" style={{padding: '0 2rem'}}>Sobre Nosotros</NavLink>
    <NavLink href="http://google.com">Contacto</NavLink>
  </Nav>
);

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const NavLink = styled.a`
  font-size: 0.8rem;
  color: white;
  text-decoration: none;

  &:hover {
    color: ${colors.orange};
    text-decoration: none;
  }
`