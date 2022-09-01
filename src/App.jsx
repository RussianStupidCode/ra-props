import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Films from "./components/UI/films/films";
import { ROUTER_PATH } from "./helpers/path";
import MainLayout from "./layouts/main";

import entity from "./data/entities.json";
import Listing from "./components/UI/listing/listing";

function App() {
  console.log(entity);
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route
          path={ROUTER_PATH.base}
          element={<Navigate replace to={ROUTER_PATH.films} />}
        />
        <Route path={ROUTER_PATH.films} element={<Films />} />
        <Route
          path={ROUTER_PATH.listing}
          element={<Listing advertisements={entity} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
