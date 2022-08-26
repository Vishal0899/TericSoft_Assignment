import {
  Input,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const UserInput = () => {
  return (
    <Box width={"400px"} m={"auto"} mb={"30px"} border="1px solid black">
      <h1>UserInput</h1>
      <Input placeholder="name" />
      <br />
      <Input placeholder="email" />
      <br />
      <Input placeholder="phone" />
      <br />
      {/* <Date /> */}
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="male"
          name="radio-buttons-group"
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <FormGroup>
        <FormLabel>Hobbies</FormLabel>
        <FormControlLabel style={{marginLeft : "120px"}} control={<Checkbox defaultChecked />} label="Coding" />
        <FormControlLabel style={{marginLeft : "120px"}} control={<Checkbox />} label="Listening Podcast" />
        <FormControlLabel style={{marginLeft : "120px"}} control={<Checkbox />} label="Reading Books" />
      </FormGroup>
    </Box>
  );
};
