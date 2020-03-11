import React from 'react';
import styled from 'styled-components';

import {Section} from "./Section";
import {CardHeader, Container} from "@material-ui/core";
import PlaceIcon from '@material-ui/icons/Place';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";

import loungeImage from "../static/img/lounge.jpg";
import churchImage from "../static/img/church.jpg";

const TimeCard = styled(Card)`
  width: 300px;
`;

const Link = styled.a`
  vertical-align: top;
  color: #365899;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const DateAvatar = styled(Avatar)`
  background-color: #dd0000;
  color: #fff;
`;

const Content = styled(CardContent)`
  padding: 8px;
`;

const Media = styled(CardMedia)`
  height: 150px;
`;

function Service() {
  return (
    <Section background="#eaeaea">
      <Container>
        <h2>Service Hours</h2>
        <Grid container spacing={5} justify="center">
          <Grid item>
            <TimeCard>
              <CardHeader title="Sundays" subheader="10:30 AM" avatar={
                <DateAvatar aria-label="recipe">
                  sun
                </DateAvatar>
              }>
              </CardHeader>
              <Media
                image={churchImage}
              />
              <Content>
                <PlaceIcon /> <Link href="#location-church">Snowball Church LA</Link>
              </Content>
              <CardActions>
                <Button color="secondary" startIcon={<EventAvailableIcon />}>
                  Add to my calendar
                </Button>
              </CardActions>
            </TimeCard>
          </Grid>
          <Grid item>
            <TimeCard>
              <CardHeader title="Wednesdays" subheader="8:30 PM" avatar={
                <DateAvatar aria-label="recipe">
                  wed
                </DateAvatar>
              }>
              </CardHeader>
              <Media
                image={loungeImage}
              />
              <Content>
                <PlaceIcon /> <Link href="#location-lounge">Snowball Church Lounge</Link>
              </Content>
              <CardActions>
                <Button color="secondary" startIcon={<EventAvailableIcon />}>
                  Add to my calendar
                </Button>
              </CardActions>
            </TimeCard>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default Service;