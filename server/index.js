const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { query } = require("express");

// middleware
app.use(cors());
app.use(express.json()); //req.body

// Routes

// add new parks
app.post("/parks", async (req, res) => {
  try {
    const { park_name, park_type, in_state, area, expenditure, owned_by } =
      req.body;
    const addPark = await pool.query(
      `insert into "zoo_b_db".wildlife_park( park_name, park_type, in_state, area ,expenditure, owned_by) values($1,$2,$3,$4,$5,$6) returning *`,
      [park_name, park_type, in_state, area, expenditure, owned_by]
    );
    // console.log(`Added data`);
    res.json(addPark.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// General Query
// app.post("/query", async (req, res) => {
//   // console.log(req.body);
//   try {
//     const queryString = req.body.queryStatement;
//     // console.log(queryString);
//     const outputQuery = await pool.query(queryString);
//     res.json(outputQuery.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// app.get("/queryString",async (req,res) => {
//   try{

//     const queryData = await pool.query(queryString);
//     res.json(queryData.rows);
//   }
//   catch(err){
//     console.error(err.message);
//   }
// })
// get all Parks in the nation
app.get("/parks", async (req, res) => {
  try {
    const allParks = await pool.query(`select * from "zoo_b_db".wildlife_park`);
    res.json(allParks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/animals/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePark = await pool.query(
      `delete from "zoo_b_db".animals where park_id = $1`,
      [id]
    );
    res.json("Animal Deleted");
  } catch (err) {
    console.error(err.message);
  }
});

// Update some Park with given id
// app.put("/parks/:park_id", async (req, res) => {
//   try {
//     const { park_id } = req.params;
//     const { park_name } = req.body;
//     const updateParkName = await pool.query(
//       `UPDATE "zoo_b_db".wildlife_park SET park_name = $1 where park_id = $2`,
//       [park_name, park_id]
//     );
//     res.json("Park_name updated");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// Get all details about animals
app.get("/animals", async (req, res) => {
  try {
    const allAnimals = await pool.query(`select * from "zoo_b_db".animals`);
    res.json(allAnimals.rows);
    console.log("Animals shown successfully");
  } catch (err) {
    console.error(err.message);
  }
});

// Add Animals details
app.post("/animals", async (req, res) => {
  try {
    const { animal_name, species, count, avg_lifespan, park_id } = req.body;
    const addAnimal = await pool.query(
      `insert into "zoo_b_db".animals( animal_name, species, count, avg_lifespan ,park_id) values($1,$2,$3,$4,$5) returning *`,
      [animal_name, species, count, avg_lifespan, park_id]
    );
    // console.log(`Added data`);
    res.json(addAnimal.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
