import React from 'react';

import { styled } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

type Props = {
  className?: string;
  variant?: 'outlined';
  disabled?: boolean;
  label?: string;
  color?: 'primary';
  size?: 'small' | 'medium'; // Add size property
  startAdornment?: React.JSX.Element;
  endAdornment?: React.JSX.Element;
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
  startAdornment,
  endAdornment,
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
      InputProps={{
        startAdornment: startAdornment && (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: endAdornment && (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ),
      }}
    >
      <TextField />
    </StyledTextField>
  );
};

export default InputBox;
