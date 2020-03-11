import React from 'react';
import styled from 'styled-components';
import {Container} from "@material-ui/core";
import {Section, SectionBody} from "./Section";

const Quote = styled.p`
  margin: 60px 0 40px;
  font-size: 28px;
  line-height: 160%;
  margin-bottom: 0;
  font-family: "Sentinel SSm A","Sentinel SSm B",Georgia,Times,serif;
  font-weight: 300;
  color: #63605b;
`;

const Ref = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #c9a47a !important;
  line-height: 1.4;
`;

const Separator = styled.hr`
  margin: 40px auto;
  width: 120px;
  border: solid #ddd;
  border-width: 2px 0 0;
  border-color: #e3dfd7;
`;

function Verse() {
  return (
    <Section textAlign="center">
      <SectionBody>
        <Container>
          <Quote>For where two or three gather in my name, there am I with them.</Quote>
          <Ref>Matthew 18:20</Ref>
          <Separator />
        </Container>
      </SectionBody>
    </Section>
  );
}

export default Verse;