import React, { useState } from 'react';
import SegmentedButton from '@/components/segmentedButton.withdraw/SegmentedButton';
import ErgContent from '../withdraw/Erg/ErgContent';
import RsnContent from '../withdraw/Rsn/RsnContent';
import { SegmentPanel } from '../../../../../components/segmentedButton.withdraw/SegmentPanel';

const WithdrawModal = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="my-5">
      <p className="text-center text-sm text-onPrimaryContainer-dark">
        You can withdraw assets once unstaked
      </p>
      <SegmentedButton
        tabs={[{ label: 'ERG' }, { label: 'RSN' }]}
        position="horizontal"
        onTabChange={handleTabChange}
        className=" m-6"
      />

      <SegmentPanel value={selectedTab} index={0}>
        <ErgContent />
      </SegmentPanel>
      <SegmentPanel value={selectedTab} index={1}>
        <RsnContent />
      </SegmentPanel>
    </div>
  );
};

export default WithdrawModal;
