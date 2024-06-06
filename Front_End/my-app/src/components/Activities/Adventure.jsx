import React from "react";
import Content from "../CardsComponent/Content";
import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, useMantineTheme } from '@mantine/core';
import '@mantine/carousel/styles.css';
import "./Adventure.css";
function Adventure(){  
  const theme = useMantineTheme();
   return (
      <div>
         <div className="ad_div">
           <h1>ADVENTURE ACTIVITIES</h1>
        <div id="ad_inner_div">
        <Carousel  className="mantine-Carousel-root"
         loop
          slideSize="22%"
          slideGap= "md"
          align="center"
          slidesToScroll={1}
          breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'sm', slideSize: '100%' },
        ]}
      >
        
     {Content.slice(4, 11).map((item) => (
          <Carousel.Slide key={item.id}>
             <Card shadow="sm" padding="lg" id="card_d" >
              <Card.Section>
                <Image className="pict" src={item.image} alt={item.name} height={160} />
              </Card.Section>
              <Text className="card_txt" weight={500} style={{ marginTop: theme.spacing.sm }}>
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