import React from 'react';
import Page from '../component/Page';
import {Section, SectionTitle} from "../component/Section";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import banner from "../static/img/event.jpg";
import eventAndre from "../static/img/event-andre.jpg";
import eventLudmila from "../static/img/event-ludmila.jpg";
import eventXmas from "../static/img/event-christmas.jpg";
import eventNye from "../static/img/event-nye.jpg";
import {CardHeader} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

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
  display: inline-block;
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

const EventLink = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

function Date(props) {
  return (
    <DateAvatar>
      <Month>{props.month}</Month>
      <Day>{props.date}</Day>
    </DateAvatar>
  );
}

function toEvent(props, image, title, year, month, date) {
  props.history.push(`/events/${year}/${month}/${date}/${title.toLowerCase().replace(/[\s\W]+/g, '-')}`, {image: image, title: title, month: month, date: date});
}

function EventsPage(props) {
  return (
    <Page>
      <Banner>
        <Title>Events</Title>
      </Banner>
      <Section>
        <Container>
          <SectionTitle>Upcoming Events</SectionTitle>
          <Events>
            <EventCard>
              <EventLink onClick={() => toEvent(props, eventAndre, 'Andre Aquino & Band in the Service Sunday', 2020, 'mar', 8)}>
                <Media image={eventAndre} />
                <CardHeader title="Andre Aquino & Band in the Service Sunday"
                            titleTypographyProps={{variant: 'h5'}}
                            avatar={<Date date={8} month="mar" />} />
              </EventLink>
            </EventCard>
          </Events>
          <SectionTitle>Past Events</SectionTitle>
          <Events>
            <EventCard>
              <EventLink onClick={() => toEvent(props, eventLudmila, 'Ludmila Ferber Brazilian Night', 2020, 'jan', 29)}>
                <Media image={eventLudmila} />
                <CardHeader title="Ludmila Ferber Brazilian Night"
                            titleTypographyProps={{variant: 'h5'}}
                            avatar={<Date date={29} month="jan" />} />
              </EventLink>
            </EventCard>
            <EventCard>
              <EventLink onClick={() => toEvent(props, eventNye, 'NYE Dinner Celebretion', 2019, 'dec', 31)}>
                <Media image={eventNye} />
                <CardHeader title="NYE Dinner Celebretion"
                            titleTypographyProps={{variant: 'h5'}}
                            avatar={<Date date={31} month="dec" />} />
              </EventLink>
            </EventCard>
            <EventCard>
              <EventLink onClick={() => toEvent(props, eventXmas, 'Christmas Special Service', 2019, 'dec', 22)}>
                <Media image={eventXmas} />
                <CardHeader title="Christmas Special Service"
                            titleTypographyProps={{variant: 'h5'}}
                            avatar={<Date date={22} month="dec" />} />
              </EventLink>
            </EventCard>
          </Events>
        </Container>
      </Section>
    </Page>
  );
}

export default EventsPage;
