import React from 'react';
import styled from 'styled-components';
import {Container} from "@material-ui/core";
import {Section} from "./Section";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Icon from '@material-ui/core/Icon';
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";

const PaymentItem = styled(Card)`
  box-shadow: none;
  width: 220px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #666;
`;

const Link = styled.a`
  text-decoration: none;
  color: #666;
  
  &:hover {
    text-decoration: underline;
  }
`;

function PaymentMethod() {
  return (
    <Section textAlign="center">
      <Container>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <PaymentItem>
              <CardMedia>
                <Icon className="fas fa-comments-dollar" style={{fontSize: '100px', width: '100%'}} />
              </CardMedia>
              <CardContent>
                <h3>Text</h3>
                <Text><Link href="sms:77977&body=snowballchurchla" target="_blank">snowball to 77977</Link></Text>
              </CardContent>
            </PaymentItem>
          </Grid>
          <Grid item>
            <PaymentItem>
              <CardMedia>
                <Icon className="fab fa-paypal" style={{fontSize: '100px', width: '100%'}} />
              </CardMedia>
              <CardContent>
                <h3>PayPal</h3>
                <Text><Link href="https://paypal.me/snowballchurchla" target="_blank">paypal.me/snowballchurchla</Link></Text>
              </CardContent>
            </PaymentItem>
          </Grid>
          <Grid item>
            <PaymentItem>
              <CardMedia>
                <Icon className="fas fa-mobile-alt" style={{fontSize: '100px', width: '100%'}} />
              </CardMedia>
              <CardContent>
                <h3>Venmo</h3>
                <Text><Link href="https://venmo.com/snowballchurch-la" target="_blank">snowballchurch-la</Link></Text>
              </CardContent>
            </PaymentItem>
          </Grid>
          <Grid item>
            <PaymentItem>
              <CardMedia>
                <Icon className="fas fa-dollar-sign" style={{fontSize: '100px', width: '100%'}} />
              </CardMedia>
              <CardContent>
                <h3>Zelle</h3>
                <Text><Link href="mailto:snowballchuchla@gmail.com" target="_blank">snowballchuchla@gmail.com</Link></Text>
              </CardContent>
            </PaymentItem>
          </Grid>
          <Grid item>
            <PaymentItem>
              <CardMedia>
                <Icon className="fas fa-place-of-worship" style={{fontSize: '100px', width: '100%'}} />
              </CardMedia>
              <CardContent>
                <h3>Services</h3>
                <Text>cash or check</Text>
              </CardContent>
            </PaymentItem>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default PaymentMethod;