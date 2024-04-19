'use client';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';

import { ButtonBase, styled } from '@mui/material';

interface Props extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
}

const StyledButton = styled(ButtonBase)`
  & .MuiButtonBase-root {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.onPrimary.main};
    padding: 0.625rem 1.5rem;
    border-radius: 1.25rem;
  }
`;

export default function Button({ children, ...rest }: Props) {
  return (
    <StyledButton>
      <ButtonBase {...rest} className=" text-sm font-semibold ">
        {children}
      </ButtonBase>
    </StyledButton>
  );
}
