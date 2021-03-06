import React from 'react';
import Page from '../component/Page';
import {Section, SectionBody, SectionContainer, SectionSubTitle, SectionTitle} from "../component/Section";
import PaymentMethod from "../component/PaymentMethod";
import styled from "styled-components";
import banner from "../static/img/thanks-god.jpg";
import Button from "@material-ui/core/Button";

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

const GiveButton = styled(Button)`
  margin: 20px 0;
  padding: 10px 30px;
  background-color: #009900;
  border: solid 1px #006600;
  border-radius: 30px;
  font-size: 20px;
  color: #fff;
  
  &:hover {
    background-color: #00aa00;
  }
`;

function GivePage() {
  return (
    <Page>
      <Banner>
        <Title>Give to God</Title>
      </Banner>
      <Section textAlign="center">
        <SectionContainer>
          <SectionTitle>Give</SectionTitle>
          <SectionSubTitle>Tithes and Offerings & Other Initiatives</SectionSubTitle>
          <SectionBody>
            In Malachi, the Bible talks about bringing the first 10% (tithe) of our income into the storehouse (church). If you do, “I will open the windows of heaven for you. I will pour out a blessing so great you won’t have enough room to take it in!”. Let’s believe for God to provide for us as a church, as we obey His Word in bringing our tithes.
          </SectionBody>
          <SectionBody>
            <GiveButton component="a" href="https://pushpay.com/g/snowballchurch" target="_blank">Give Online Now</GiveButton>
          </SectionBody>
          <PaymentMethod />
        </SectionContainer>
      </Section>
    </Page>
  );
}

export default GivePage;
