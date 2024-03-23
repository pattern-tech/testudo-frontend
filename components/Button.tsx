'use client';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';

import { ButtonBase, styled } from '@mui/material';

interface Props extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  kind: 'Filled' | 'Tonal' | 'Outlined';
  className?: string;
  fullWidth?: boolean;
}

const getColorBasedOnKind = (kind: 'Filled' | 'Tonal' | 'Outlined') => {
  switch (kind) {
    case 'Filled':
      return {
        color: ({ theme }) => theme.palette.onPrimary.main,
        bgColor: ({ theme }) => theme.palette.primary.main,
        borderColor: ({ theme }) => theme.palette.primary.main,
      };
    case 'Tonal':
      return {
        color: ({ theme }) => theme.palette.onSecondaryContainer?.main,
        bgColor: ({ theme }) => theme.palette.secondaryContainer?.main,
        borderColor: ({ theme }) => theme.palette.secondaryContainer?.main,
      };
    case 'Outlined':
      return {
        color: ({ theme }) => theme.palette.primary?.main,
        bgColor: () => 'transparent',
        borderColor: ({ theme }) => theme.palette.outline?.main,
      };
  }
};

export default function Button({
  className,
  kind,
  fullWidth,
  children,
  ...rest
}: Props) {
  const StyledButton = styled(ButtonBase)`
    background-color: ${getColorBasedOnKind(kind).bgColor} !important;
    color: ${getColorBasedOnKind(kind).color};
    padding: 0.625rem 1.5rem;
    border-radius: 6.25rem;
    border: 1px solid ${getColorBasedOnKind(kind)?.borderColor};
    width: ${fullWidth ? '100%' : 'auto'};
    cursor: pointer;
  `;

  return (
    <StyledButton
      {...rest}
      className={`${className} styledBtn text-sm font-semibold`}
    >
      {children}
    </StyledButton>
  );
}
