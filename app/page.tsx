import React from 'react';

import { Box } from '@mui/material';

import { Banner, Reward, Statistics, JoinUs, Footer } from '@/scenes/landing';

const Landing = () => {
  return (
    <Box className="h-full overflow-y-auto pb-14">
      <Box
        component="main"
        className=" flex-grow  bg-background-dark px-[6.25rem] py-20"
      >
        <Banner />
        <Reward />
        <Statistics />
        <JoinUs />
      </Box>
      <Footer />
    </Box>
  );
};

export default Landing;
