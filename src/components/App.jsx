import { Route, Routes } from "react-router-dom";
import MovieDetails from "pages/MovieDetails/MovieDetails"
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { React } from "react";
// import styled from "styled-components";
import HomePage from "pages/Home/Home";
import MoviesPage from "pages/Movies/Movies";

// import  { lazy, Suspense } from 'react';
import { Layout } from "./Layout";
// import toast, { Toaster } from 'react-hot-toast';




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

// export const App = () => {
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index path="/" element={<HomePage />} />
//           <Route path="movies" element={<MoviesPage />} />
//           <Route path="movies/:movieId" element={<MovieDetails />}>
//             <Route path="cast" element={<Cast />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//         </Route>
//         <Route path="*" element={<HomePage />} />
//       </Routes>
//       {/* <Toaster/> */}
//     </Layout>
//   );
// };





