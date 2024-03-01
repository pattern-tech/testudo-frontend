import React, { Dispatch, SetStateAction } from 'react';

import Image from 'next/image';

import CenteredTabs from '@/components/tabs/Tabs';

import { ErgoPay } from './ErgoPay';
import { Google } from './Google';
import { Nautilus } from './Nautilus';

interface Props {
  handleCloseModal: Dispatch<SetStateAction<boolean>>;
}

export const Authentication = ({ handleCloseModal }: Props) => {
  return (
    <div className="mt-5">
      <CenteredTabs
        tabs={[
          {
            label: 'Login via Google',
            children: (
              <Google handleCloseModal={handleCloseModal} className="mt-1" />
            ),
          },
          {
            label: 'Login via wallet',
            children: (
              <div className="m-auto w-3/4">
                <Nautilus handleCloseModal={handleCloseModal} />
                <div className="my-3 flex items-center justify-center">
                  <Image
                    src="/images/line.svg"
                    alt="nautilusLogo logo"
                    width={157}
                    height={1}
                    className="w-full"
                  />
                  <span className="px-[1.125rem] text-sm font-medium text-onSurfaceVariant-dark">
                    Or
                  </span>
                  <Image
                    src="/images/line.svg"
                    alt="nautilusLogo logo"
                    width={157}
                    height={1}
                    className="w-full"
                  />
                </div>
                <ErgoPay handleCloseModal={handleCloseModal} />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};
