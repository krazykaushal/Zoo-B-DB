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
import DeleteIcon from '@mui/icons-material/Delete';
import "../index.css";
import { useNavigate } from "react-router-dom";

const Animals = () => {
  // const [animalList, setAnimalList] = useState([]);

  // const getAnimals = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/animals");
  //     const jsonData = await response.json();
  //     //  console.log(jsonData);
  //     setAnimalList(jsonData);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   getAnimals();
  // }, []);
  const animalState = {
    animal_name: "",
    species: "",
    count: "",
    avg_lifespan: "",
    park_id: "",
  };

  const [values, setValues] = useState(animalState);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const body = values;
      const response = await fetch("http://localhost:5000/animals", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      // console.log("hello");
    } catch (err) {
      console.error(err.message);
    }
  };
  const navigate = useNavigate();
  return (
    <div>
      <Box className="glass">
        <Typography variant="h1" align="center">
          Animals
        </Typography>
        <Grid container spacing={4} >
          <Grid item xs={6}>
            <Button variant="contained" onClick={() => navigate("view")} fullWidth>
              Show all data of Animals
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="error" onClick={() => navigate("delete")} fullWidth startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </Grid>
        </Grid>
        <Paper elevation={3} className="paper">
          <FormControl fullWidth onSubmit={onSubmitHandler}>
            <Grid container justifyContent="center" className="textfield">
              <Grid item xs={9}>
                <TextField
                  label="Animal_name"
                  name="animal_name"
                  id="animal_name"
                  fullWidth
                  placeholder="E.g Lion"
                  value={values.animal_name}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" className="textfield">
              <Grid item xs={9}>
                <TextField
                  label="Species"
                  name="species"
                  id="species"
                  placeholder="E.g. Cat"
                  fullWidth
                  value={values.species}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" className="textfield">
              <Grid item xs={9}>
                <TextField
                  label="Count"
                  name="count"
                  id="count"
                  type="number"
                  placeholder="E.g. 12"
                  fullWidth
                  value={values.count}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" className="textfield">
              <Grid item xs={9}>
                <TextField
                  label="Avg_Lifespan"
                  name="avg_lifespan"
                  id="avg_lifespan"
                  type="number"
                  placeholder="E.g. 6"
                  fullWidth
                  value={values.avg_lifespan}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" className="textfield">
              <Grid item xs={9}>
                <TextField
                  label="Park_id"
                  name="park_id"
                  placeholder="Check Park ids on Parks page"
                  id="park_id"
                  fullWidth
                  value={values.park_id}
                  onChange={handleChange}
                  type="number"
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              className="btn"
              type="submit"
              onClick={onSubmitHandler}
            >
              Add
            </Button>
          </FormControl>
        </Paper>
      </Box>
    </div>
  );
};

export default Animals;
