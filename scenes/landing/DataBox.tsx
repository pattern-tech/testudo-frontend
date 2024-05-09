'use client';
import React, { useState } from 'react';

export const DataBox = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsVisible1(!isVisible1)}
        className=" my-5 w-[1200px] cursor-pointer rounded-[1.25rem] bg-surfaceContainer-dark px-5 py-5 text-xl"
      >
        <p>What is Rosen Bridge?</p>
        <span
          className="text-sm text-onPrimaryContainer-dark"
          style={{ display: isVisible1 ? 'inline' : 'none' }}
        >
          Rosen Bridge is an open-source protocol for cross-chain asset
          transfers. The protocol facilitates incentivized auditing, ongoing
          monitoring, and transparent reporting for asset transfers between
          blockchains.
        </span>
      </div>

      <div
        onClick={() => setIsVisible2(!isVisible2)}
        className=" my-5 w-[1200px] cursor-pointer rounded-[1.25rem] bg-surfaceContainer-dark px-5 py-5 text-xl"
      >
        <p>What does becoming a watcher mean?</p>
        <span
          className="text-sm text-onPrimaryContainer-dark"
          style={{ display: isVisible2 ? 'inline' : 'none' }}
        >
          Rosen Bridge is an open-source protocol for cross-chain asset
          transfers. The protocol facilitates incentivized auditing, ongoing
          monitoring, and transparent reporting for asset transfers between
          blockchains.
        </span>
      </div>

      <div
        onClick={() => setIsVisible3(!isVisible3)}
        className=" my-5 w-[1200px] cursor-pointer rounded-[1.25rem] bg-surfaceContainer-dark px-5 py-5 text-xl"
      >
        <p>Why should you use Testudo instead of running your own watcher?</p>
        <span
          className="text-sm text-onPrimaryContainer-dark"
          style={{ display: isVisible3 ? 'inline' : 'none' }}
        >
          Rosen Bridge is an open-source protocol for cross-chain asset
          transfers. The protocol facilitates incentivized auditing, ongoing
          monitoring, and transparent reporting for asset transfers between
          blockchains.
        </span>
      </div>

      <div
        onClick={() => setIsVisible4(!isVisible4)}
        className=" my-5 w-[1200px] cursor-pointer rounded-[1.25rem] bg-surfaceContainer-dark px-5 py-5 text-xl"
      >
        <p>How does Testudo offer compound interest?</p>
        <span
          className="text-sm text-onPrimaryContainer-dark"
          style={{ display: isVisible4 ? 'inline' : 'none' }}
        >
          Rosen Bridge is an open-source protocol for cross-chain asset
          transfers. The protocol facilitates incentivized auditing, ongoing
          monitoring, and transparent reporting for asset transfers between
          blockchains.
        </span>
      </div>

      <div
        onClick={() => setIsVisible5(!isVisible5)}
        className=" my-5 w-[1200px] cursor-pointer rounded-[1.25rem] bg-surfaceContainer-dark px-5 py-5 text-xl"
      >
        <p>How do we estimate the annual percentage yield (APY)?</p>
        <span
          className="text-sm text-onPrimaryContainer-dark"
          style={{ display: isVisible5 ? 'inline' : 'none' }}
        >
          Rosen Bridge is an open-source protocol for cross-chain asset
          transfers. The protocol facilitates incentivized auditing, ongoing
          monitoring, and transparent reporting for asset transfers between
          blockchains.
        </span>
      </div>

      <div
        onClick={() => setIsVisible6(!isVisible6)}
        className=" my-5 w-[1200px] cursor-pointer rounded-[1.25rem] bg-surfaceContainer-dark px-5 py-5 text-xl"
      >
        <p>How does Testudo make money?</p>
        <span
          className="text-sm text-onPrimaryContainer-dark"
          style={{ display: isVisible6 ? 'inline' : 'none' }}
        >
          Rosen Bridge is an open-source protocol for cross-chain asset
          transfers. The protocol facilitates incentivized auditing, ongoing
          monitoring, and transparent reporting for asset transfers between
          blockchains.
        </span>
      </div>
    </div>
  );
};