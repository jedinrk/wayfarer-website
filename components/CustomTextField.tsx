import React from 'react';
import { TextField } from '@mui/material';

interface CustomTextFieldProps {
  label: string;
  required?: boolean;
  fullWidth?: boolean;
  color?: 'primary' | 'secondary' | 'success';
  name?: string;
  id?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'standard' | 'filled' | 'outlined';
  className?: string;
  [key: string]: any; // Allow for additional props
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  required,
  fullWidth,
  color,
  name,
  id,
  value,
  onChange,
  variant = "standard",
  className,
  ...props
}) => {
  return (
    <TextField
      label={label}
      required={required}
      fullWidth={fullWidth}
      color={color}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      variant={variant}
      InputLabelProps={{
        style: {
          color: '#6f859b',
          fontSize: '1.125rem', // Equivalent to text-lg
          fontFamily: 'Figtree',
        },
      }}
      InputProps={{
        style: {
          padding: '8px 0', // Equivalent to py-2
        },
      }}
      sx={{
        '& .MuiInput-underline:before': {
          borderBottomColor: '#caccd4', // Equivalent to border-[#caccd4]
        },
        '& .MuiInput-underline:hover:before': {
          borderBottomColor: '#caccd4',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#4b8200',
        }
      }}
      className={className}
      {...props}
    />
  );
};

export default CustomTextField;