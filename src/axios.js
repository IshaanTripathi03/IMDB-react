import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_MOVIE_API_TOKEN}`
      }
});
export default axiosInstance;