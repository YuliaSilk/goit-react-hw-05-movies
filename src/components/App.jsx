import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "pages/Home/Home"
import Movies from "pages/Movies/Movies"
import MovieDetails from "pages/MovieDetails/MovieDetails"
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { React } from "react";
// import { React, lazy } from "react";

// const Home = lazy(() => import("../pages/Home"));
// const Movies = React.lazy(() => import('../pages/Movies'));
// const MovieDetails = React.lazy(() => import('../pages/MovieDetails'));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies/>}/>
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="/movies/:movieId/cast" element={<Cast/>}/>
            <Route path="/movies/:movieId/reviews" element={<Reviews/>}/>
          </Route>
        </Route>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </div>
  );
};


