import React, {useRef} from "react";
import Content from "../CardsComponent/Content";
import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, useMantineTheme } from '@mantine/core';
import '@mantine/carousel/styles.css';
import "../Activities/Adventure.css";
import { rem } from '@mantine/core';
import { IconArrowRight, IconArrowLeft, IconBorderRadius } from '@tabler/icons-react';
function Trek(){
    const theme = useMantineTheme();
    const carouselStyles = {
      control: {
        backgroundColor: theme.colors.green[6],
        color: theme.white,
        '&:hover': {
          backgroundColor: theme.colors.blue[7],
        },
      },
      controlNext: {
        right: rem(10),
         // Positioning for the next arrow
      },
      controlPrev: {
        left: rem(10), // Positioning for the previous arrow
      },
    };
    return (
       <div>
          <div className="ad_div">
            <h1>BROWSE OUR TREKS</h1>
         <div id="ad_inner_div">
          {/********************** Carousel without buttons ***********************/ }
         <Carousel  className="mantine-Carousel-root"
          nextControlIcon={<IconArrowRight style={{ width: rem(20), height: rem(20) }} id="next" />}
          previousControlIcon={<IconArrowLeft style={{ width: rem(20), height: rem(20) }} id="previous"/>}
          loop
           slideSize="25%"
           slideGap= 'xs'
           align="start"
           slidesToScroll={2}
           styles={carouselStyles}
           breakpoints={[
           { maxWidth: 'md', slideSize: '50%' },
           { maxWidth: 'sm', slideSize: '100%' },
         ]}
       >
  {/************************ Carousel With buttons  */}
{/* <Carousel className="mantine-Carousel-root"
         
         height={200}
         slideSize="25%"
         slideGap="md"
         nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
         previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
         loop
         align="center"
         slidesToScroll={1}
    > */}

         
      {Content.slice(11, 21).map((item) => (
           <Carousel.Slide key={item.id}>
              <Card shadow="sm"  id="card_d" >
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
export default Trek;