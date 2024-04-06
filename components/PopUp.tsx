'use client';
import React, { ReactNode } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

import closeIcon from '@/assets/svg/closeIcon.svg';

interface Props {
  state: boolean;
  handleClose: () => void;
  title?: string;
  children: ReactNode;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiModal-backdrop': {
    backgroundColor: theme.palette.shadow.main,
  },
  '& .MuiPaper-root': {
    padding: '1.25rem',
    margin: '0',
    backgroundColor: theme.palette.surface.main,
    borderRadius: '0.75rem',
    width: '35.5rem',
  },
  '& .MuiDialogTitle-root': {
    color: theme.palette.onSurface.main,
    fontSize: '1.125rem',
    fontWeight: 'bold',
    padding: 0,
  },
}));

const PopUp = ({ state, handleClose, children, title }: Props) => {
  return (
    <StyledDialog onClose={handleClose} open={state}>
      <div className="flex items-center justify-between">
        <DialogTitle>{title}</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            padding: 0,
          }}
        >
          <Image src={closeIcon} alt="close icon" width={48} height={48} />
        </IconButton>
      </div>
      <DialogContent sx={{ padding: 0 }}>{children}</DialogContent>
    </StyledDialog>
  );
};

export default PopUp;
