import React from 'react';

import Box from '@mui/material/Box';

interface SegmentPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const SegmentPanel = (props: SegmentPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="w-full"
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
};
