import React, { useState } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

interface InterestCheckboxProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InterestCheckbox: React.FC<InterestCheckboxProps> = ({
  name,
  value,
  onChange,
}) => {
  return (
    <div className="flex-col justify-start items-start gap-4 inline-flex">
      <div className="text-[#1a282b] text-lg font-normal font-['Figtree'] leading-normal">
        I’m interested in
      </div>
      <div className="justify-start items-center gap-10 inline-flex ml-2">
        <RadioGroup
          name={name}
          value={value}
          onChange={onChange}
          row
          className="gap-5 md:gap-10"
        >
          <FormControlLabel
            value="Container Transportation"
            control={
              <Radio
                className="w-6 h-6 relative text-[#1a282b] text-lg font-normal"
                color="success"
              />
            }
            label="Container Transportation"
            className="gap-2"
          />
          <FormControlLabel
            value="Container Sale"
            control={
              <Radio
                className="w-6 h-6 relative text-[#1a282b] text-lg font-normal"
                color="success"
              />
            }
            label="Container Sale"
            className="gap-2"
          />
        </RadioGroup>
      </div>
    </div>
  );
};

export default InterestCheckbox;
