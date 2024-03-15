import React, { useState, SyntheticEvent } from 'react';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { SegmentPanel } from './SegmentPanel';

interface SegmentProps {
  label: string;
  children?: React.ReactNode;
}

interface Props {
  tabs: SegmentProps[];
  className?: string;
}

const StyledTab = styled(Tab)`
  &.MuiTab-root {
    color: ${({ theme }) => theme.palette.onSurface.main};
    padding: 0.625rem 0;
    text-transform: none;
    margin: 0;
    width: 50%;
    min-height: 2.5rem;
  }
  &.Mui-selected {
    color: ${({ theme }) => theme.palette.onSecondaryContainer.main};
    background-color: ${({ theme }) =>
      theme.palette.onSecondaryFixedVariant.main};
  }
`;

export default function SegmentedButton({ tabs, className }: Props) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={className}>
      <Box sx={{ width: '100%' }}>
        <Tabs
          className="mb-6 min-h-10 rounded-full border border-outline-dark"
          value={value}
          onChange={handleChange}
          centered
          sx={{
            '.MuiTabs-indicator': {
              backgroundColor: 'transparent',
            },
          }}
        >
          {tabs?.map((tab, index) => (
            <StyledTab label={tab.label} key={index} />
          ))}
        </Tabs>
      </Box>
      {tabs?.map((tab, index) => (
        <SegmentPanel key={index} value={value} index={index}>
          {tab.children}
        </SegmentPanel>
      ))}
    </Box>
  );
}
