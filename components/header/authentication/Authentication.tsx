import React, { Dispatch, SetStateAction } from 'react';

import SegmentedButton from '@/components/segmentedButton/SegmentedButton';
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
              <Google handleCloseModal={handleCloseModal} className="mt-10" />
            ),
          },
          {
            label: 'Login via wallet',
            children: (
              <SegmentedButton
                className="mt-5"
                tabs={[
                  {
                    label: 'Nautilus wallet',
                    children: <Nautilus handleCloseModal={handleCloseModal} />,
                  },
                  {
                    label: 'ErgoPay',
                    children: <ErgoPay handleCloseModal={handleCloseModal} />,
                  },
                ]}
              />
            ),
          },
        ]}
      />
    </div>
  );
};
