import React from "react";
import {
  Button,
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../index.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* <Button variant='outlined' onClick={() => navigate('parks')} size="large">Parks</Button>
        <Button variant='outlined' onClick={() => navigate('Animals')} size="large">Animals</Button> */}
      <Container maxWidth="md" className="homepage-container" >
        <Box className="glass">
          <Typography variant="h1" align="center">Zoo-B-DB</Typography>
          <Typography variant="body1"> This website is a one stop solution for all the needs of the management of the National Parks of our nation.</Typography>
          <Typography variant="body1"> Now, Click One of the following links to see the funtionalities of Parks or Animals</Typography>
          <Grid container spacing={4} className="btn">
            <Grid item xs={4} >
              <Button
                variant="contained"
                onClick={() => navigate("parks")}
                size="large"
              >
                Parks
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                onClick={() => navigate("query")}
                size="large"
              >
                Query
              </Button>
            </Grid>
            <Grid item xs={4} className="btn">
              <Button
                variant="contained"
                onClick={() => navigate("animals")}
                size="large"
              >
                Animals
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
