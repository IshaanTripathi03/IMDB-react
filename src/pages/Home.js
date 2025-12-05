import {useEffect, useState} from 'react';
import MovieCard from '../components/MovieCard';
import axiosInstance from '../axios';
export default function Home() {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        async function fetchNowPlaying() {
        try {
            const res = await axiosInstance.get(`movie/now_playing?language=en-US&page=${pageNumber}`);
            setNowPlaying(res.data.results)
        } catch(err) {
            throw new Error(err);
        }
        }
        fetchNowPlaying();
    },[pageNumber])
    return <>
    <h1>Now Playing</h1>
        <div className="Movie-Grid">
            {nowPlaying.map(now => <MovieCard movie={now} />)}
        </div>
        <button onClick={() => {
            window.scrollTo(0,0);
            setPageNumber(prev => prev - 1)
        }}>Prev Page</button>
        <button onClick={() => {
            window.scrollTo(0,0);
            setPageNumber(prev => prev + 1)
            }}>Next Page</button>
    </>
}