import React from "react";
import "./About.css";
import { Button, Image} from '@mantine/core';
function About_Us(){
    return(
      // <MantineProvider
      // theme={{
      //     breakpoints: {
      //         xs: 480,
      //         sm: 768,
      //         md: 1024,
      //         lg: 1280,
      //         xl: 1440,
      //       },
      //     }}
      //  >
        <div>
           <h1 style={{textAlign:"center"}}>WHO CHOOSE US</h1>
        <div className="about">
           <div className="try">      
           {/* <Text
                            size={{
                                xs: 'sm',
                                sm: 'md',
                                md: 'lg',
                                lg: 'xl',
                                xl: '2xl',
                            }}
                            weight={500}
                        > */}
               Welcome to Str Adventures, your trusted companion in the world of travel exploration! At Str Adventures, we're passionate about crafting unforgettable travel experiences that inspire, delight, and create cherished memories for our clients.
               <br /><br />
               At Str Adventures, we believe in the transformative power of travel to broaden horizons, foster connections, and create lifelong memories. With a focus on customer satisfaction and unparalleled service, we strive to exceed your expectations at every step of your journey.
              {/* </Text> */}
           <div style={{paddingTop:"30px"}} data-aos="fade-up" data-aos-delay="600">
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
                <span>Discover More</span>
                <i className="bi bi-arrow-right" style={{ marginLeft: 8 }}></i>
              </Button>
            </div>
          </div>
          </div>
          {/***********************Image div ****************************/}
           <div className="tryme">
           <Image src= './Pictures/About_Us.jpg' alt="About Us" className="img-fluid" />
           </div>
        </div>
        </div>
        // </MantineProvider>
    );
}
export default About_Us;