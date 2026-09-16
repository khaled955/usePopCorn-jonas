import type { Movie } from "../types/movie.type";
import MovieCard from "./movie-card";

type MovieListProps = {
  movies: Movie[];
  onSelectMovie: (id: string | null) => void;
  
};
export default function MovieList({ movies, onSelectMovie }: MovieListProps) {
 
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
