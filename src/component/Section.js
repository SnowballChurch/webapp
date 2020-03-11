import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  color: #c9a47a;
`;

const SubTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  color: #464646;
`;

const Body = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 29px;
`;

const SectionStyle = styled.div`
  padding: 20px;
  background-color: ${props => props.background || 'transparent' };
  text-align: ${props => props.textAlign || 'left'};
  color: ${props => props.color || '#000' };
`;

const SectionContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

function Section(props) {
  return (
    <SectionStyle background={props.background} color={props.color} textAlign={props.textAlign}>
      {props.children}
    </SectionStyle>
  );
}

function SectionTitle(props) {
  return <Title>{props.children}</Title>
}

function SectionSubTitle(props) {
  return <SubTitle>{props.children}</SubTitle>
}

function SectionBody(props) {
  return <Body>{props.children}</Body>
}

export {Section, SectionContainer, SectionTitle, SectionSubTitle, SectionBody};