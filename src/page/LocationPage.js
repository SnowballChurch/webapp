import React from 'react';
import Page from '../component/Page';
import Location from "../component/Location";
import styled from "styled-components";
import banner from "../static/img/la.jpg";

const Banner = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  max-height: 100vh;
  background: url(${banner}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: scroll !important;
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

function LocationPage() {
  return (
    <Page>
      <Banner>
        <Title>Los Angeles</Title>
      </Banner>
      <Location />
    </Page>
  );
}

export default LocationPage;
