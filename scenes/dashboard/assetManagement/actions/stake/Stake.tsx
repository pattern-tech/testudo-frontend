import React from 'react';

import SegmentedButton from '@/components/segmentedButton/SegmentedButton';

import SingleAsset from './singleAsset/SingleAsset';
import MultipleAsset from "@/scenes/dashboard/assetManagement/actions/stake/multipleAsset/MultipleAsset";

const Stake = () => {
  return (
    <div className="my-5">
      <p className="text-center text-sm font-bold text-onPrimaryContainer-dark">
        Note: All invested assets will be automatically stacked through Testudo
        platform
      </p>
      <SegmentedButton
        className="mt-4"
        tabs={[
          {
            label: 'Single asset',
            children: <SingleAsset />,
          },
          {
            label: 'Multiple assets (Recommended)',
            children: <MultipleAsset />,
          },
        ]}
      />
    </div>
  );
};

export default Stake;
