import React, { useState, SyntheticEvent } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';


interface SegmentProps {
  label: string;
  children?: React.ReactNode;
}


interface Props {
  tabs: SegmentProps[];
  className?: string;
  position?: 'vertical' | 'horizontal';
  onTabChange?: (event: SyntheticEvent, newValue: number) => void;  // Optional callback for handling tab changes
}


const SegmentedButton = ({ tabs, className, position = 'vertical', onTabChange }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent<Element, Event>, newValue: number) => {
    setValue(newValue);
    if (onTabChange) {
      onTabChange(event, newValue);
    }
  };

  
  const StyledTab = styled(Tab)(({ theme }) => ({
    "&.MuiTab-root": {
      color: theme.palette.onSurface.main,
      padding: "0.625rem 0",
      textTransform: "none",
      margin: 0,
      width: "50%",
      minHeight: "2.5rem",
    },
    "&.Mui-selected": {
      color: theme.palette.onSecondaryContainer.main,
      backgroundColor: theme.palette.onSecondaryFixedVariant.main,
    }
  }));

  return (
    <Box className={className}>
      <Box sx={{ width: position === 'vertical' ? '100%' : 'auto' }}>
        <Tabs
          className={`${position === 'vertical' && 'mb-6'} min-h-10 rounded-full border border-outline-dark`}
          value={value}
          onChange={handleChange}
          centered
          sx={{
            ".MuiTabs-indicator": {
              backgroundColor: 'transparent',
            },
          }}
        >
          {tabs.map((tab, index) => (
            <StyledTab label={tab.label} key={index} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default SegmentedButton;