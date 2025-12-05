export default function MovieCard(props) {
    const {movie} = props;
    return <div className="Movie-Card">
        <div className="Image-Wrapper">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        </div>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <h5>{movie.release_date}</h5>
    </div>
}