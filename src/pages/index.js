import '../../node_modules/bootstrap/scss/bootstrap.scss';
import '../styles/main.scss';
import React from "react";
import styled from 'styled-components';
import Jumbotron from '../components/Jumbotron';
import About from '../components/About';
import Footer from '../components/Footer';

export default () => <div>
  <Jumbotron />
  <About />
  <Footer />
</div>