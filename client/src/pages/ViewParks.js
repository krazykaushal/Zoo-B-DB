import React, {useState, useEffect} from 'react'
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
  Paper
} from "@mui/material";
import "../index.css"

const ViewParks = () => {

  const [parkList, setParkList] = useState([]);

  const getParks  = async () => {
    try {
       const response = await fetch("http://localhost:5000/parks");
       const jsonData = await response.json();
      //  console.log(jsonData); 
      setParkList(jsonData)
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getParks();
  },[]);

  // console.log(parkList);

  return (
    <div>
      <Box className='glass'>
        <Typography variant='h2' align='center'>
          Wildlife Park Data
        </Typography>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead sx={{
          bgcolor: 'aqua',
          borderColor : 'primary.main',
        }}>
          <TableRow>
            <TableCell>Park_id </TableCell>
            <TableCell align="right">Park_name</TableCell>
            <TableCell align="right">park_type</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Owned_by</TableCell>
            <TableCell align="right">Area</TableCell>
            <TableCell align="right">Expenditure</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {parkList.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.park_id}
              </TableCell>
              <TableCell align="right">{row.park_name}</TableCell>
              <TableCell align="right">{row.park_type}</TableCell>
              <TableCell align="right">{row.in_state}</TableCell>
              <TableCell align="right">{row.owned_by}</TableCell>
              <TableCell align="right">{row.area}</TableCell>
              <TableCell align="right">{row.expenditure}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
    </div>
  )
}

export default ViewParks