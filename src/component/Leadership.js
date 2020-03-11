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

import lucasImage from "../static/img/lucas.jpg";
import anaImage from "../static/img/ana.jpg";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const PastorCard = styled(Card)`
  text-align: center;
  box-shadow: none;
  width: 300px;
`;

const Content = styled(CardContent)`
  padding: 8px;
`;

const Media = styled(CardMedia)`
  border-radius: 50%;
  height: 300px;
`;

const Actions = styled(CardActions)`
  display: block;
  text-align: center;
`;

function Leadership() {
  return (
    <Section>
      <Container>
        <h2>Leadership</h2>
        <Grid container spacing={5} justify="center">
          <Grid item>
            <PastorCard>
              <CardHeader title="Lucas" subheader="Lead" />
              <Media
                image={lucasImage}
              />
              <Content>
                Lucas is ...
              </Content>
              <Actions>
                <IconButton>
                  <Icon className="fab fa-facebook" />
                </IconButton>
                <IconButton>
                  <Icon className="fab fa-instagram" />
                </IconButton>
                <IconButton>
                  <Icon className="fab fa-twitter" />
                </IconButton>
              </Actions>
            </PastorCard>
          </Grid>
          <Grid item>
            <PastorCard>
              <CardHeader title="Ana" subheader="Lead" />
              <Media
                image={anaImage}
              />
              <Content>
                Ana is ...
              </Content>
              <Actions>
                <IconButton>
                  <Icon className="fab fa-facebook" />
                </IconButton>
                <IconButton>
                  <Icon className="fab fa-instagram" />
                </IconButton>
                <IconButton>
                  <Icon className="fab fa-twitter" />
                </IconButton>
              </Actions>
            </PastorCard>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default Leadership;