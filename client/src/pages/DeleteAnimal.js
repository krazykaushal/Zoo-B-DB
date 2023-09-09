import React, { useState } from "react";
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

const DeleteAnimal = () => {
  const [park_id, setPark_id] = useState("");

  const handleChange = (event) => {
    setPark_id(event.target.value);
  };
  const onDeleteHandler = async (id) => {
    try {
        const deleteResponse =  await fetch(`http://localhost:5000/animals/${id}`, {
            method: "DELETE"
        })
        console.log(park_id,deleteResponse);
    } catch (err) {
        console.error(err.message)
    }
  };
  return (
    <div>
      <Box className="glass">
        <Paper elevation={3} className="paper">
          <Typography variant="h2" align="center">
            Delete Animal with Park_id
          </Typography>
          <FormControl fullWidth>
            <Grid container justifyContent="center" className="textfield">
              <Grid item xs={9}>
                <TextField
                  label="Park_id"
                  name="park_id"
                  id="park_id"
                  fullWidth
                  placeholder="E.g. 4"
                  value={park_id}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item xs={5} >
                <Button
                  variant="contained"
                  className="btn"
                  color="error"
                  type="submit"
                  onClick={() => onDeleteHandler(park_id)}
                  fullWidth
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Paper>
      </Box>
    </div>
  );
};

export default DeleteAnimal;
