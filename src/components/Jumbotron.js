import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import bgImage from '../images/jumbotron-bg.jpg';
import Header from './Header';

export default () => (
  <Jumbotron>
    <Overlay>
      <Container className="container">
        <Header />
        <SloganContainer>
          <div className="col-12 col-md-8 col-xl-6 text-center">
            <h1>Líderes en la oferta de servicios de Informática e Ingeniería Civil</h1>
          </div>
        </SloganContainer>
      </Container>
    </Overlay>
  </Jumbotron>
);

const Jumbotron = styled.div`
 width: 100%;
 height: 100vh;
 background-image: url(${bgImage});
 background-size: cover;
 background-repeat: no-repeat;
 background-position: center;
 color: white;
 display: flex;
`

const Overlay = styled.div`
  flex: 1;
  background-color: ${colors.blue};
  opacity: 0.85;
`

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const SloganContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`