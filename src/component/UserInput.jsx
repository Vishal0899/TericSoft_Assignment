import {
  Input,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import axios from "axios";

export const UserInput = () => {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    DOB: "",
    Gender: "",
    Hobbies: "",
  });
  const handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleClick = () => {
    // console.log(data);
    axios
      .post("http://localhost:8080/Users", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <Box width={"400px"} m={"auto"} mb={"30px"} border="1px solid black">
      <h1>UserInput</h1>
      <Input
        placeholder="Name"
        value={data.Name}
        name="Name"
        onClick={handleData}
      />
      <br />
      <br />
      <Input
        placeholder="Email"
        value={data.Email}
        name="Email"
        onClick={handleData}
      />
      <br />
      <br />
      <Input
        placeholder="Phone"
        value={data.Phone}
        name="Phone"
        onClick={handleData}
      />
      <br />
      <br />
      <Input
        onChange={(e) => console.log(e.target.value)}
        type="date"
        name="DOB"
        value={data.DOB}
        onClick={handleData}
      />
      <br />
      <br />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          //   defaultValue="male"
          name="Gender"
          value={data.Gender}
          onClick={handleData}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <br />
      <br />
      <FormLabel>Hobbies</FormLabel>
      <FormGroup name="Hobbies" value={data.Hobbies} onClick={handleData}>
        <FormControlLabel
          style={{ marginLeft: "120px" }}
          control={<Checkbox />}
          label="Coding"
        />
        <FormControlLabel
          style={{ marginLeft: "120px" }}
          control={<Checkbox />}
          label="Listening Podcast"
        />
        <FormControlLabel
          style={{ marginLeft: "120px" }}
          control={<Checkbox />}
          label="Reading Books"
        />
      </FormGroup>
      <br />
      <br />
      <br />
      <Button onClick={handleClick}>ADD</Button>
    </Box>
  );
};
