import React, { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  Container,
  Typography,
  Box,
  LinearProgress,
  FormControl,
  TextField,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "../index.css";

const ViewAnimals = () => {
  const [animalList, setAnimalList] = useState([]);

  const getAnimals = async () => {
    try {
      const response = await fetch("http://localhost:5000/animals");
      const jsonData = await response.json();
      //  console.log(jsonData);
      setAnimalList(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div>
      <Box className="glass">
        <Typography variant="h2" align="center">
          Animals Data
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead
              sx={{
                bgcolor: "aqua",
                borderColor: "primary.main",
              }}
            >
              <TableRow>
                <TableCell>Sr.No.</TableCell>
                <TableCell>Animal_name </TableCell>
                <TableCell align="right">Species</TableCell>
                <TableCell align="right">Count</TableCell>
                <TableCell align="right">Avg_Lifespan</TableCell>
                <TableCell align="right">Park_id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {animalList.map((row,i) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                    <TableCell>{++i}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.animal_name}
                  </TableCell>
                  <TableCell align="right">{row.species}</TableCell>
                  <TableCell align="right">{row.count}</TableCell>
                  <TableCell align="right">{row.avg_lifespan}</TableCell>
                  <TableCell align="right">{row.park_id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default ViewAnimals;
