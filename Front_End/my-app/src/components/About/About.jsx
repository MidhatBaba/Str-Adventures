import React, {useEffect} from 'react';
import { Container, Grid, Title,  Button, Image } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
// import "../Activities/Adventure.css";
import "./About.css";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

// Initialize AOS animations
AOS.init();

function AdventureWelcome() {
  const theme = useMantineTheme();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="about">
        <h1 style={{textAlign:"center"}}>WHO WE ARE</h1>
    <Container className='tryme1'>
      <Grid >
      {/* <div className='try'> */}
        <Grid.Col lg={6}  className='try' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Title order={4} data-aos="fade-up" data-aos-delay="100">
            Welcome to Str Adventures, your trusted companion in the world of travel exploration! At Str Adventures, we're passionate about crafting unforgettable travel experiences that inspire, delight, and create cherished memories for our clients.
            <br /><br />
            At Str Adventures, we believe in the transformative power of travel to broaden horizons, foster connections, and create lifelong memories. With a focus on customer satisfaction and unparalleled service, we strive to exceed your expectations at every step of your journey.
          </Title>
          <div data-aos="fade-up" data-aos-delay="600">
            <div style={{ textAlign: 'center', textAlignLast: 'left' }}>
              <Button
                component="a"
                href="#about"
                className="btn-get-started"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              >
                <span>Learn More</span>
                <i className="bi bi-arrow-right" style={{ marginLeft: 8 }}></i>
              </Button>
            </div>
          </div>
        </Grid.Col>
        {/* </div> */}
        <Grid.Col lg={6}  className="tryme2" data-aos="zoom-out" data-aos-delay="200">
        {/* <div className='tryme2'> */}
          <Image src= './Pictures/About_Us.jpg' alt="About Us" className="img-fluid" />
        {/* </div> */}
        </Grid.Col>
      </Grid>
    </Container>
    </div>
  );
}

export default AdventureWelcome;

