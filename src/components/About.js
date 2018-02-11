import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import colors from '../utils/colors';
import microsoft from '../images/microsoft.png';
import apple from '../images/apple.png';
import logitech from '../images/logitech.png';
import hp from '../images/hp.png';
import dell from '../images/dell.png';

export default () => (
  <div className="container">
    <Content className="row">
      <div className="col-12 col-sm-5">
        <ServiceMessage>
          Nos complace ayudarte! Estamos disponibles para asesorarte en <b>tecnología</b>, <b>ingeniería</b> y <b>decoración</b>
        </ServiceMessage>
        <ServiceButtons>
          <Button label="Contáctanos" primary style={{marginRight: '1rem'}} />
          <Button label="Saber Más" />
        </ServiceButtons>
      </div>
      <div className="col-12 col-sm-2 d-none d-sm-flex align-items-center justify-content-center">
        <Divider />
      </div>
      <div className="col-12 col-sm-5">
        <DetailsList>
            <li>Amplia variedad de mobiliarios para su empresa u oficina, asesoría totalmente gratis.</li>
            <li>Somos <b>vendedor autorizado</b> de productos Microsoft.</li>
            <li>Venta de productos Apple.</li>
            <li>Garantía extendida.</li>
            <li>Variedad de productos.</li>
            <li>Taller de reparación con más de una década de experiencia.</li>
            <li>Si no lo encuentras en otro lugar, nosotros lo tenemos!</li>
        </DetailsList>
      </div>
      <div className="col-12 d-none d-sm-flex align-items-center justify-content-between">
        <BrandLogo src={microsoft} />
        <BrandLogo src={apple} />
        <BrandLogo src={logitech} />
        <BrandLogo src={hp} />
        <BrandLogo src={dell} />
      </div>
    </Content>
  </div>
)

const Content = styled.div`
  margin-top: 5rem;
`

const ServiceMessage = styled.div`
  font-size: 1.375rem;
`

const ServiceButtons = styled.div`
  display: flex;
  margin-top: 1.5rem;
`

const Divider = styled.div`
  width: 0.2rem;
  height: 70%;
  background-color: ${colors.blue};
  opacity: 0.75;
`

const DetailsList = styled.ul`
  list-style: square;
`

const BrandLogo = styled.img`
  height: 2.5rem;
  margin: 4rem 0;
`