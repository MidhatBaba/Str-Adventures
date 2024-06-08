import React from "react";
import { Container, Grid, Col, Text, Button, ThemeIcon } from '@mantine/core';
import { IconMapPin, IconPhone, IconMail, IconBrandTwitter, IconBrandFacebook, IconBrandYoutube, IconBrandLinkedin } from '@tabler/icons-react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer bg-dark text-light pt-5 mt-5">
      <Container className="py-5">
        <Grid gutter="lg" className="g-5">
          <Grid.Col lg={3} md={6}>
            <Text weight={700} size="lg" className="text-white mb-3">Company</Text>
            <Button component="a" variant="subtle" className="btn-link" href="">About Us</Button>
            <Button component="a" variant="subtle" className="btn-link" href="">Contact Us</Button>
            <Button component="a" variant="subtle" className="btn-link" href="">Privacy Policy</Button>
            <Button component="a" variant="subtle" className="btn-link" href="">Terms & Conditions</Button>
            <Button component="a" variant="subtle" className="btn-link" href="">FAQs & Help</Button>
          </Grid.Col>
          <Grid.Col lg={3} md={6}>
            <Text weight={700} size="lg" className="text-white mb-3">Contact</Text>
            <Text className="mb-2"><ThemeIcon radius="xl" variant="light" className="me-3"><IconMapPin /></ThemeIcon>Ellahi Bagh Srinagar</Text>
            <Text className="mb-2"><ThemeIcon radius="xl" variant="light" className="me-3"><IconPhone /></ThemeIcon>+919149778587</Text>
            <Text className="mb-2"><ThemeIcon radius="xl" variant="light" className="me-3"><IconMail /></ThemeIcon>48@gmail.com</Text>
            <div className="d-flex pt-2">
              <Button component="a" variant="outline" className="btn-social" href=""><IconBrandTwitter /></Button>
              <Button component="a" variant="outline" className="btn-social" href=""><IconBrandFacebook /></Button>
              <Button component="a" variant="outline" className="btn-social" href=""><IconBrandYoutube /></Button>
              <Button component="a" variant="outline" className="btn-social" href=""><IconBrandLinkedin /></Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
      <Container>
        <div className="copyright">
          <Grid>
            <Grid.Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">Str Adventures</a>, All Right Reserved.
            </Grid.Col>
            <Grid.Col md={6} className="text-center text-md-end">
              <div className="footer-menu">
                <Button component="a" variant="link" href="">Home</Button>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
