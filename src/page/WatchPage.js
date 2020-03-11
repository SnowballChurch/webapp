import React from 'react';
import Page from '../component/Page';
import styled from "styled-components";
import banner from "../static/img/la.jpg";
import {Section} from "../component/Section";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import {CardContent} from "@material-ui/core";

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

const BlackBackground = styled.div`
  background-color: #181818;
  color: #fff;
`;

const ServiceCard = styled(Card)`
  margin-bottom: 20px;
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
`;

const Video = styled.iframe`
  width: 800px;
  max-width: 100%;
`;

const Margin = styled.div`
  padding-top: 100px;
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

function WatchPage() {
  return (
    <Page>
      <BlackBackground>
        <Margin />
        <Section>
          <Container>
            <ServiceCard>
              <CardContent>
                <h2>Service 02/23/2020</h2>
                <Center>
                  <Video
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsnowballchurchla%2Fvideos%2F518918692162256%2F&show_text=0&width=560"
                    width="800" height="450" style={{border:'none',overflow:'hidden', maxWidth: '100%'}} scrolling="no" frameBorder="0"
                    allowTransparency="true" allowFullScreen="true"></Video>
                </Center>
              </CardContent>
            </ServiceCard>
            <ServiceCard>
              <CardContent>
                <h2>Service 02/16/2020</h2>
                <Center>
                  <Video
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsnowballchurchla%2Fvideos%2F201716260906944%2F&show_text=0&width=560"
                    width="800" height="450" style={{border:'none',overflow:'hidden', maxWidth: '100%'}} scrolling="no" frameBorder="0"
                    allowTransparency="true" allowFullScreen="true"></Video>
                </Center>
              </CardContent>
            </ServiceCard>
            <ServiceCard>
              <CardContent>
                <h2>Service 02/09/2020</h2>
                <Center>
                  <Video
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsnowballchurchla%2Fvideos%2F2562676734010903%2F&show_text=0&width=560"
                    width="800" height="450" style={{border:'none',overflow:'hidden', maxWidth: '100%'}} scrolling="no" frameBorder="0"
                    allowTransparency="true" allowFullScreen="true"></Video>
                </Center>
              </CardContent>
            </ServiceCard>
          </Container>
        </Section>
      </BlackBackground>
    </Page>
  );
}

export default WatchPage;
