import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd753e7a843a028100c153fd380dbecd0';



// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /trending/all/{time_window}
export const getTrendingAll = async () => {
    const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
    // console.log('response', response);
    return response.data;
}

// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// https://api.themoviedb.org/3/search/movie
//      --url 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1' \

export const getMovieById = async movieId => {
    const response = await axios.get(`search/movie/${movieId}}&api_key=${API_KEY}`);
    return response.data;
}

// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// https://api.themoviedb.org/3/movie/{movie_id}


export const getDetails = async movieId => {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
}

// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// https://api.themoviedb.org/3/movie/{movie_id}/credits
export const getMovieCredits = async movieId => {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);   
    return response.data;
}

// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
// https://api.themoviedb.org/3/movie/{movie_id}/reviews
export const getMovieReviews = async movieId => {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data;
}

export const getMovieByQuery = async query => {
    const response = await axios.get(`search/movie?query=${query}&api_key=${API_KEY}`);
    return response.data;
    }
    




