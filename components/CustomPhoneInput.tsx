import React from "react";
import {
  TextField,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface CustomPhoneInputProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledBox = styled(Box)(({ theme }) => ({
  height: "3rem",
  borderBottom: "1px solid #caccd4",
  display: "flex",
  alignItems: "end", // Center items vertically
  gap: "0.5rem",
  width: "100%",
}));

const SelectorBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexGrow: 0, // Expand to fill available space
  marginRight: "0.5rem", // Add a small gap if needed
  color: "#1a282b",
  fontSize: "1.125rem",
  fontFamily: "Figtree",
}));

const CustomTextFieldBox = styled(Box)(({ theme }) => ({
  flexGrow: 1, // Expand to fill available space
  color: "#6f859b",
  fontSize: "1.125rem",
  fontFamily: "Figtree",
}));

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({
  name,
  value,
  onChange,
}) => {
  const [countryCode, setCountryCode] = React.useState("+91");

  const handleCountryCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCountryCode(event.target.value);
  };

  return (
    <StyledBox>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "0.25rem 0.5rem",
          gap: "0.5rem",
          width: "100%",
        }}
      >
        <SelectorBox>
          <FormControl variant="standard">
            <InputLabel id="country-code-label" shrink />
            <Select
              labelId="country-code-label"
              id="country-code"
              defaultValue={countryCode}
              disableUnderline
              sx={{
                color: "#1a282b",
                fontSize: "1.125rem", // Equivalent to text-lg
                fontFamily: "Figtree",
                "& .MuiSelect-icon": { display: "none" }, // Hides the arrow icon
              }}
            >
              <MenuItem value="+91">+91</MenuItem>
              <MenuItem value="+1">+1</MenuItem>
              <MenuItem value="+44">+971</MenuItem>
            </Select>
          </FormControl>
        </SelectorBox>
        <CustomTextFieldBox>
          <input
            type="tel"
            name={name}
            value={value}
            onChange={onChange}
            placeholder="9876543210"
            className="bg-transparent border-none outline-none px-0 py-0 mx-0 my-0 text-[#6f859b] text-lg font-normal"
          />

          {/* <TextField
            fullWidth
            variant="standard"
            value={value}
            onChange={onChange}
            inputProps={{
              style: {
                color: "#6f859b",
                fontSize: "1.125rem", // Equivalent to text-lg
                fontFamily: "Figtree",
                height: "100%",
              },
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
            placeholder="98765 12345"
            InputProps={{
              disableUnderline: true,
            }}
          /> */}
        </CustomTextFieldBox>
      </Box>
    </StyledBox>
  );
};

export default CustomPhoneInput;
