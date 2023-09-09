import React, { useEffect, useState } from "react";
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
  Paper,
} from "@mui/material";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Parks = () => {
  const parkState = {
    park_name: "",
    park_type: "",
    in_state: "",
    owned_by: "",
    area: "",
    expenditure: "",
  };

  const [values, setValues] = useState(parkState);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const body = values;
      const response = await fetch("http://localhost:5000/parks", {
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
  return (
    <div>
      <Box className="glass">
        <Typography variant="h1" align="center">
          Parks
        </Typography>
        <Stack>
          <Button variant="contained" onClick={() => navigate("view")}>
            Show all data of Parks
          </Button>
        </Stack>
        <Paper elevation={3} className="paper">
          <FormControl fullWidth onSubmit={onSubmitHandler}>
            <Grid container justifyContent="center" className="textfield">
              <Grid item xs={9}>
                <TextField
                  label="Park_name"
                  name="park_name"
                  id="park_name"
                  fullWidth
                  placeholder="E.g Kaziranga"
                  value={values.park_name}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" className="textfield">
              <Grid item xs={9}>
                <TextField
                  label="Park_type"
                  name="park_type"
                  id="park_type"
                  placeholder="E.g. National Park, Zoo"
                  fullWidth
                  value={values.park_type}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" className="textfield">
              <Grid item xs={9}>
                <TextField
                  label="State"
                  name="in_state"
                  id="in_state"
                  placeholder="E.g. Gujarat"
                  fullWidth
                  value={values.in_state}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" className="textfield">
              <Grid item xs={9}>
                <TextField
                  label="Owned_By"
                  name="owned_by"
                  id="owned_by"
                  placeholder="E.g. Govt"
                  fullWidth
                  value={values.owned_by}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" className="textfield">
              <Grid item xs={9}>
                <TextField
                  label="Area"
                  name="area"
                  placeholder="In Square KM"
                  id="area"
                  fullWidth
                  value={values.area}
                  onChange={handleChange}
                  type="number"
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" className="textfield">
              <Grid item xs={9}>
                <TextField
                  label="Expenditure"
                  name="expenditure"
                  id="expenditure"
                  placeholder="IN Rupees"
                  fullWidth
                  value={values.expenditure}
                  onChange={handleChange}
                  type="number"
                />
              </Grid>
            </Grid>
            <Button variant="contained" className="btn" type="submit" onClick={onSubmitHandler}>
              Add
            </Button>
          </FormControl>
        </Paper>
      </Box>
    </div>
  );
};

export default Parks;
