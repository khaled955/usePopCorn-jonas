import type { WatchedMovie } from "../types/movie.type";
import Statistics from "./statistics";
type WatchedMovieCardProps = {
  movie: WatchedMovie;
};

export default function WatchedMovieCard({ movie }: WatchedMovieCardProps) {
  // Variables
  const { Title, Poster, imdbRating, runTime, userRating } = movie;
  return (
    <li>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <Statistics
        rating={imdbRating}
        runTime={runTime}
        userRating={userRating}
      />
    </li>
  );
}
