import React from 'react';

import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';

type Props = {
  className?: string;
  variant?: 'outlined';
  disabled?: boolean;
  label?: string;
  color?: 'primary';
  size?: 'small' | 'medium'; // Add size property
};

type PropsType = Props &
  Omit<React.ComponentPropsWithoutRef<'input'>, keyof Props>;

const StyledTextField = styled(TextField)`
  border-color: ${({ theme }) => theme.palette.outline.main};
  color: ${({ theme }) => theme.palette.onSurfaceVariant.main};
  .MuiInputBase-input {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.onSurface.main};
  }
`;

const InputBox = ({
  className,
  variant = 'outlined',
  disabled = false,
  value,
  defaultValue,
  label,
  type,
  onChange,
  ...rest
}: PropsType) => {
  return (
    <StyledTextField
      required={false}
      type={type}
      variant={variant}
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      size={rest?.size}
      {...rest}
      className={className}
      label={label}
    >
      <TextField />
    </StyledTextField>
  );
};

export default InputBox;
