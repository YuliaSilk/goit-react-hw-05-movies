import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '9b9195ea9e3479d69017b9a93679abe1';

export const getTrendingAll = async () => {
    const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
    // console.log('response', response.data);
    return response.data;
}

export const getTrending = async () => {
    const response = await axios.get(`trending?api_key=${API_KEY}`);
    return response.data;
}

export const getMovieById = async movieId => {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
}

export const getMovieByQuery = async query => {
const response = await axios.get(`search/movie?query=${query}&api_key=${API_KEY}`);
return response.data;
}

export const getDetailsId = async movieId => {
    const response = await axios.get(`movie/${movieId}/details?api_key=${API_KEY}`);
    return response.data;
}

export const getCastId = async movieId => {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data;
}

export const getRewiewsId = async movieId => {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data;
}

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
