import type { WatchedMovie } from "../types/movie.type";
import WatchedMovieCard from "./watched-movie-card";

type WatchedListProps = {
  watched: WatchedMovie[];
};
export default function WatchedList({ watched }: WatchedListProps) {
  return (
    <ul className="list">
      {watched.length > 0 &&
        watched.map((movie) => (
          <WatchedMovieCard key={movie.imdbID} movie={movie} />
        ))}
    </ul>
  );
}
