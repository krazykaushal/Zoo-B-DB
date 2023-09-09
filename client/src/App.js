import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Animals from "./pages/Animals";
import Home from "./pages/Home";
import Parks from "./pages/Parks";
import NoMatch from "./pages/NoMatch";
import ViewParks from "./pages/ViewParks";
import AddPark from "./pages/AddPark";
import Query from "./pages/Query";
import ViewAnimals from "./pages/ViewAnimals"
import DeleteAnimal from "./pages/DeleteAnimal";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="parks" element={<Parks />} />
      <Route path="query" element={<Query />} />
      <Route path="parks/view" element={<ViewParks />} />
      <Route path="animals/view" element={<ViewAnimals />} />
      <Route path="animals" element={<Animals />} />
      <Route path="animals/delete" element={<DeleteAnimal />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
