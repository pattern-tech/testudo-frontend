'use client';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';

import { ButtonBase, styled } from '@mui/material';

interface Props extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  kind: 'Filled' | 'Tonal';
  className?: string;
  fullWidth?: boolean;
}

const getColorBasedOnKind = (kind: 'Filled' | 'Tonal') => {
  switch (kind) {
    case 'Filled':
      return {
        color: ({ theme }) => theme.palette.onPrimary.main,
        bgColor: ({ theme }) => theme.palette.primary.main,
      };
    case 'Tonal':
      return {
        color: ({ theme }) => theme.palette.onSecondaryContainer.main,
        bgColor: ({ theme }) => theme.palette.secondaryContainer.main,
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
