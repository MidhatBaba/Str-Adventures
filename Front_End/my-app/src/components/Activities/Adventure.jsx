import React from "react";
// import Card from "../CardsComponent/Card"; 
import Content from "../CardsComponent/Content";
import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, useMantineTheme } from '@mantine/core';
import "./Adventure.css";
function Adventure(){  
  const theme = useMantineTheme();
   return (
      <div  style={{ padding: '20px' }}>
         <div className="ad_div">
           <h1>Adventure Activities</h1>
        <div id="ad_inner_div">
        <Carousel  className="mantine-Carousel-root"
         loop
          slideSize="33.3333%"
          slideGap="md"
          align="start"
          slidesToScroll={1}
          breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'sm', slideSize: '100%' },
        ]}
      >
        
     {Content.slice(4, 11).map((item) => (
          <Carousel.Slide key={item.id}>
            <Card shadow="sm" padding="lg">
              <Card.Section>
                <Image src={item.image} alt={item.name} height={160} />
              </Card.Section>
              <Text weight={500} style={{ marginTop: theme.spacing.sm }}>
                {item.name}
              </Text>
            </Card>
          </Carousel.Slide>
        ))}
       </Carousel>
      </div>
      </div>
    </div>
  );
}           
export default Adventure;