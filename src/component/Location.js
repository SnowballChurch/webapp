import React from 'react';
import {Container} from "@material-ui/core";
import {Section} from "./Section";

function Location() {
  return (
    <Section>
      <Container>
        <h2 id="locations">Locations</h2>
        <h3 id="location-church">Snowball Church LA</h3>
        <p>1661 S Crescent Heights Blvd, Los Angeles, CA 90035</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8677657472804!2d-118.37618668494237!3d34.047262980607286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b96dc7550d5d%3A0xc70da882d2fe7f0!2s1661%20S%20Crescent%20Heights%20Blvd%2C%20Los%20Angeles%2C%20CA%2090035!5e0!3m2!1sen!2sus!4v1582684499286!5m2!1sen!2sus"
          width="100%" height="400" frameBorder="0" style={{border:0}} allowFullScreen="">
        </iframe>
        <h3 id="location-lounge">Snowball Church Lounge</h3>
        <p>5555 Washington Blvd, Los Angeles, CA 90016</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.26878616891!2d-118.36703358494265!3d34.03697568061009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b9a0bca691e1%3A0xe0c0bb0507e378ea!2s5555%20Washington%20Blvd%2C%20Los%20Angeles%2C%20CA%2090016!5e0!3m2!1sen!2sus!4v1582685528778!5m2!1sen!2sus"
          width="100%" height="400" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
      </Container>
    </Section>
  );
}

export default Location;