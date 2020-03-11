import React from 'react';
import styled from 'styled-components';
import Container from "@material-ui/core/Container";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from "@material-ui/core/IconButton";

const Section = styled.div`
  background-color: #f4f4f4; 
`;

const Copyright = styled.div`
  padding: 30px 0;
  background-color: #252525;
  color: #888888;
  font-size: 11px;
`;

const Social = styled.div`
  text-align: center;
  padding: 10px 0;
`;

const Separator = styled.hr`
  border-top: solid 1px #d4d4d4;
`;

const Icon = styled(IconButton)`
  margin: 10px;
`;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Section>
        <Container maxWidth="lg">
          <Separator />
          <Social>
            <Icon href="https://www.facebook.com/snowballchurchla" target="_blank">
              <FacebookIcon fontSize="large" />
            </Icon>
            <Icon href="https://www.instagram.com/snowballchurchla" target="_blank">
              <InstagramIcon fontSize="large" />
            </Icon>
            <Icon>
              <YouTubeIcon fontSize="large" />
            </Icon>
          </Social>
        </Container>
      </Section>
      <Copyright>
        <Container maxWidth="lg">
          © {year} SNOWBALL CHURCH LOS ANGELES.
        </Container>
      </Copyright>
    </footer>
  );
}

export default Footer;