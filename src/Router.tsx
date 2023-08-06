import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimeDetails } from "./components/AnimeDetails";
import { Home } from "./components/Home";

export const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/anime/:id" Component={AnimeDetails} />{" "}
      </Routes>
    </BrowserRouter>
  );
};
