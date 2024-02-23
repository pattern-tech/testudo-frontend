import React, { useState, SyntheticEvent } from 'react';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { TabPanel } from './TabPanel';

interface TabProps {
  label: string;
  children?: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

const StyledTab = styled(Tab)`
  &.MuiTab-root {
    color: ${({ theme }) => theme.palette.onSurfaceVariant.main};
    padding: 0.875rem 1rem;
    text-transform: none;
    margin: 0 3.75rem;
  }
  &.Mui-selected {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export default function CenteredTabs({ tabs }: TabsProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Tabs
          className="mb-9 border-b border-solid border-surfaceContainerHigh-dark "
          value={value}
          onChange={handleChange}
          centered
        >
          {tabs?.map((tab, index) => (
            <StyledTab label={tab.label} key={index} />
          ))}
        </Tabs>
      </Box>
      {tabs?.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.children}
        </TabPanel>
      ))}
    </>
  );
}
