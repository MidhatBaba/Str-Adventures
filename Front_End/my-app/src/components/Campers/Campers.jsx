import React from 'react';
import { Container, Grid, Card, Text, Title, Button, Center, Group } from '@mantine/core';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram } from '@tabler/icons-react';
import '@mantine/core/styles.css';
import './Campers.css';

const FeedbackSection = () => {
  const feedbacks = [
    {
      name: 'Khalid Ramzan',
      feedback: 'Absolutely fantastic experience with STR! From start to finish, their attention to detail and commitment to customer satisfaction were evident.',
      delay: 0.1,
    },
    {
      name: 'Aabid',
      feedback: 'Choosing STR for our vacation was the best decision we made! Their professionalism and dedication to ensuring a memorable trip were truly commendable.',
      delay: 0.3,
    },
    {
      name: 'Pankaj Tripathi',
      feedback: 'STR has completely exceeded my expectations. From the moment I contacted them to plan my trip, they were attentive and incredibly responsive to all my inquiries.',
      delay: 0.5,
    },
    {
      name: 'Meena Thappar',
      feedback: 'STR has been an absolute delight to work with! Their team went above and beyond to make my vacation truly memorable.',
      delay: 0.7,
    },
  ];

  return (
    <div className="feedback-section">
      <Container>
        {/****************************TITLE *************************/}
        <Center mb="lg">
          <div className="text-center wow fadeInUp" id='feed1' data-wow-delay="0.1s">
            <Title 
              order={6} 
              className="feedback-title"
            >
              FEEDBACK
            </Title>
            <Title order={1} className="feedback-subtitle">
              Happy Campers Say
            </Title>
          </div>
        </Center>
        <Grid gutter="lg" id='tt'>
          {feedbacks.map((feedback, index) => (
            <div>
            <Grid.Col  key={index} lg={3} md={6} className={`wow fadeInUp`} data-wow-delay={`${feedback.delay}s`}>
              <Card shadow="sm" padding="lg" radius="md" withBorder className="feedback-card">
                {/* <Card.Section className="overflow-hidden">
                  {/* <img className="img-fluid" src="img/team-1.jpg" alt="" /> */}
                {/* </Card.Section> */} 
                <Center id="social-buttons">
                  <Group spacing="xs">
                    <Button 
                      variant="light" 
                      component="a" 
                      href="#" 
                      size="xs" 
                      className="social-button"
                    >
                      <IconBrandFacebook size={18} />
                    </Button>
                    <Button 
                      variant="light" 
                      component="a" 
                      href="#" 
                      size="xs" 
                      className="social-button"
                    >
                      <IconBrandTwitter size={18} />
                    </Button>
                    <Button 
                      variant="light" 
                      component="a" 
                      href="#" 
                      size="xs" 
                      className="social-button"
                    >
                      <IconBrandInstagram size={18} />
                    </Button>
                  </Group>
                </Center>
                <Text align="center" mt="sm">
                  <Title order={5} className="feedback-name">{feedback.name}</Title>
                  <Text size="sm" className="feedback-text">{feedback.feedback}</Text>
                </Text>
              </Card>
            </Grid.Col>
            </div>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default FeedbackSection;
