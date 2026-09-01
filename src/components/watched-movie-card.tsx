import type { WatchedMovie } from "../types/movie.type";

type WatchedMovieCardProps = {
  movie: WatchedMovie;
};

export default function WatchedMovieCard({ movie }: WatchedMovieCardProps) {
  // Variables
  const { Title, Poster, imdbRating, userRating, runtime } = movie;
  return (
    <li>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{runtime} min</span>
        </p>
      </div>
    </li>
  );
}
