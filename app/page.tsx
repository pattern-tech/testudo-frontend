import React from 'react';

import { Box } from '@mui/material';

import {
  Banner,
  Reward,
  Statistics,
  JoinUs,
  Faq,
  Footer,
} from '@/scenes/landing';

const Landing = () => (
  <>
    <Box
      component="main"
      className="flex-grow bg-background-dark px-[6.25rem] py-20"
    >
      <Banner />
      <Reward />
      <Statistics />
      <JoinUs />
      <Faq />
    </Box>
    <Footer />
  </>
);

export default Landing;
