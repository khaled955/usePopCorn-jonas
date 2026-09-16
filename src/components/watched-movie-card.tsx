import type { WatchedMovie } from "../types/movie.type";
import Statistics from "./statistics";
type WatchedMovieCardProps = {
  movie: WatchedMovie;
  onDeleteMovie: (id: string) => void;
};

export default function WatchedMovieCard({
  movie,
  onDeleteMovie,
}: WatchedMovieCardProps) {
  // Variables
  const { Title, Poster, imdbRating, runTime, userRating, imdbID } = movie;

  // Handlers
  function handleDeleteMovie() {
    onDeleteMovie(imdbID);
  }
  return (
    <li>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        <Statistics
          rating={imdbRating}
          runTime={runTime}
          userRating={userRating}
        />
        <button className="btn-delete" onClick={handleDeleteMovie}>x</button>
      </div>
    </li>
  );
}
