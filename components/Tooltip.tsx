'use client';
import * as React from 'react';

import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

interface Props {
  title: React.ReactNode;
  children: React.ReactElement;
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export default function CustomizedTooltip({ title, children }: Props) {
  return (
    <HtmlTooltip placement="right" title={title}>
      {children}
    </HtmlTooltip>
  );
}
