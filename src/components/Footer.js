import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import Logo from './Logo';
import LogoDivider from './LogoDivider';
import Phone from './Phone';
import Nav from './Nav';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';

export default () => (
  <Footer>
    <div className="container">
      <div className="col-12">
        <FooterTop className="row d-flex justify-content-between align-items-center">
          <div>
            <Logo />
            <LogoDivider />
            <Phone />
          </div>
          <div>
            <Nav />
          </div>
        </FooterTop>
        <FooterBottom className="row d-flex justify-content-between">
          <Legal>
            Ingsecom Computadoras S.R.L. — Todos los derechos reservados
          </Legal>
          <div>
            <a href="https://www.facebook.com/Ingsecom-Computadoras-162102830557190/">
              <SocialButton src={facebook} />
            </a>
            <a href="https://www.instagram.com/ingsecom/">
              <SocialButton src={instagram} />
            </a>
          </div>
        </FooterBottom>
      </div>
    </div>
  </Footer>
)

const Footer = styled.div`
  width: 100%;
  color: white;
  background-color: ${colors.blue};
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
`

const FooterTop = styled.div`
  border-bottom: 0.5px solid rgba(255,255,255,0.5);
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
`

const FooterBottom = styled.div``

const Legal = styled.div`
  font-size: 0.7rem;
  font-weight: 200;
`

const SocialButton = styled.img`
  height: 1.25rem;
  padding: 0 0.75rem;

  &:last-of-type {
    padding-right: 0;
  }
`