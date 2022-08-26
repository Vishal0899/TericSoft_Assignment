import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";

export function UsersList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/Users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Hobbies</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((elem) => (
            <TableRow
              key={elem.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {elem.Name}
              </TableCell>
              <TableCell align="right">{elem.Email}</TableCell>
              <TableCell align="right">{elem.Phone}</TableCell>
              <TableCell align="right">{elem.DOB}</TableCell>
              <TableCell align="right">{elem.Gender}</TableCell>
              <TableCell align="right">{elem.Hobbies}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
