import type { Movie } from "../types/movie.type";
import MovieCard from "./movie-card";

type MovieListProps = {
  movies: Movie[];
  
};
export default function MovieList({ movies }: MovieListProps) {
 
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
