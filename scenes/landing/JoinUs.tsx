import React from 'react';

import Image from 'next/image';

interface ItemProps {
  title: string;
  description: string;
  imgSrc: string;
  rootClassName: string;
}

export const Item = ({
  title,
  description,
  imgSrc,
  rootClassName,
}: ItemProps) => {
  return (
    <div
      className={`mt-16 flex w-full items-center justify-between ${rootClassName}`}
    >
      <div className="flex w-3/12 flex-col items-center	">
        <h3 className=" text-headline-large font-extrabold leading-[5rem]">
          {title}
        </h3>
        <p className="mt-5 text-center text-sm font-medium text-onSecondaryContainer-dark">
          {description}
        </p>
      </div>
      <Image src={imgSrc} alt={description} width={824} height={564} />
    </div>
  );
};

export const JoinUs = () => {
  return (
    <div className="mb-[8.75rem] mt-40 flex flex-col items-center">
      <h2 className=" text-[2.5rem] font-extrabold leading-loose">
        Join Testudo
      </h2>
      <Item
        title="Become a Watcher"
        description="Contribute to Rosen security and expansion without the need of running a node."
        imgSrc="/images/joinUs1.svg"
        rootClassName="flex-row"
      />
      <Item
        title="Earn money"
        description="Stake your RSN or Ergo with Testudo to protect the network and earn rewards."
        imgSrc="/images/joinUs2.svg"
        rootClassName="flex-row-reverse"
      />
    </div>
  );
};
