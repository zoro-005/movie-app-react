const API_KEY = "0a7b50b4013ca7530a4b5697810d9907"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async() =>{
    const response = await fetch (`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies= async(query) =>{
    const response = await fetch (`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};