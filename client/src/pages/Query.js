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
} from "@mui/material";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Query = () => {
  const [querystatement, setquerystatement] = useState("");
  const navigate = useNavigate();

  const QueryHandler = async (e) => {
    e.preventDefault();
    try {
      const body = { querystatement };
      const response = await fetch("http://localhost:5000/query ", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      QueryHandlerGet(e)
      // navigate(querystatement);
    } catch (err) {
      console.error(err.message);
    }
  };

  const QueryHandlerGet = async (e) => {
    e.preventDefault();
    try {
      const body = { querystatement };
      const response = await fetch(`http://localhost:5000/query`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      // navigate(querystatement);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  return (
    <div>
      <Box className="glass">
        <Typography variant="h2" align="center">
          Add your SQL Query Here
        </Typography>
        <FormControl fullWidth>
          <TextField
            label="SQL"
            variant="filled"
            color="success"
            multiline
            rows="4"
            className="sql"
            value={querystatement}
            onChange={(e) => setquerystatement(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={(e) => QueryHandler(e)}
          >
            Run Query
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default Query;

