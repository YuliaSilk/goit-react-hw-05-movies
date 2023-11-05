import { Route, Routes } from "react-router-dom";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { React, lazy } from "react";
import { Layout } from "./Layout";


const HomePage = lazy (() => import("../pages/Home/Home"));
const MoviesPage = lazy (() => import("../pages/Movies/Movies"));
const MovieDetails = lazy (() => import("../pages/MovieDetails/MovieDetails"));


export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index path="/" element={<HomePage />}/>
        <Route path="movies" element={<MoviesPage />}/>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
      </Route>
      <Route path="*" element={<HomePage />}/>
      </Routes>
    
  );
};





