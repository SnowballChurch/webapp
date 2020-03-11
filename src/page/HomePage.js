import React from 'react';
import styled from 'styled-components';

import banner from '../static/img/la.jpg';
import Location from "../component/Location";
import Service from "../component/Service";
import Leadership from "../component/Leadership";
import Verse from "../component/Verse";

const Banner = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background: url(${banner}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Title = styled.h1`
  max-width: 100%;
  font-size: 70px;
  text-transform: uppercase;
  text-shadow: 2px 2px 2px #666;
  color: #fff;
  text-align: center;
  line-height: 100%;
`;

function HomePage() {
  return (
    <div>
      <Banner>
        <Title>You can find Jesus in Los Angeles</Title>
      </Banner>
      <Verse />
      <Leadership />
      <Service />
      <Location />
    </div>
  );
}

export default HomePage;