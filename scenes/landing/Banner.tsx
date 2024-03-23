'use client';

import React from 'react';

import Lottie from 'lottie-react';

import lottieJson from '@/public/lottie.json';

export const Banner = () => {
  return (
    <>
      <h1 className=" text-center  text-[4rem] font-extrabold leading-[5rem] ">
        Become a watcher
      </h1>
      <Lottie
        className="mx-auto mt-20 w-fit "
        animationData={lottieJson}
        loop={true}
      />
    </>
  );
};
