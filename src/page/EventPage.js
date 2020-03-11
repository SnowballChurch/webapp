import React from 'react';
import Page from '../component/Page';
import {Section, SectionBody, SectionSubTitle, SectionTitle} from "../component/Section";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import banner from "../static/img/event.jpg";
import eventAndre from "../static/img/event-andre.jpg";
import eventLudmila from "../static/img/event-ludmila.jpg";
import eventXmas from "../static/img/event-christmas.jpg";
import eventNye from "../static/img/event-nye.jpg";
import {CardHeader} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const Banner = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background: ${props => `url(${props.image}) no-repeat center center fixed`}; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Events = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const EventCard = styled(Card)`
  display: block;
  margin: 10px;
  max-width: 400px;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const Media = styled(CardMedia)`
  height: 200px;
`;

const DateAvatar = styled(Avatar)`
  display: block;
  background-color: transparent;
  border-radius: 0;
`;

const Month = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 300;
  color: #ff0000;
`;

const Day = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  color: #222;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const Title = styled.h2`
  margin: 0;
  margin-left: 10px;
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  color: #c9a47a;
`;

function Date(props) {
  return (
    <DateAvatar>
      <Month>{props.month}</Month>
      <Day>{props.date}</Day>
    </DateAvatar>
  );
}

function EventPage(props) {
  return (
    <Page>
      <Banner image={props.location.state.image} />
      <Section>
        <Container>
          <Header>
            <Date date={props.location.state.date} month={props.location.state.month} />
            <Title>{props.location.state.title}</Title>
          </Header>
        </Container>
      </Section>
    </Page>
  );
}

export default EventPage;
