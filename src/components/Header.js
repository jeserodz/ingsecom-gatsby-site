import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import Logo from './Logo';
import LogoDivider from './LogoDivider';
import Phone from './Phone';
import Nav from './Nav';

export default () => (
  <Header>
    <div>
      <Logo />
      <LogoDivider />
      <Phone />
    </div>
    <Nav />
  </Header>
);

const Header = styled.div`
  width: 100%;
  height: 6.5625rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid rgba(255,255,255,0.5);
`