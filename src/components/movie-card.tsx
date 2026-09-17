import type { Movie } from "../types/movie.type";
import MoviePoster from "./movie-poster";

type MovieCardProps = {
  movie: Movie;
  onSelectMovie: (id: string | null) => void;
};
export default function MovieCard({ movie, onSelectMovie }: MovieCardProps) {
  // Variables
  const { Poster, Title, Year, imdbID } = movie;
  const moviePoster = Poster === "N/A" ? "./images/default-movie.jpg" : Poster;

  return (
    <li key={movie.imdbID} onClick={() => onSelectMovie(imdbID)}>
      <MoviePoster src={moviePoster} title={Title} />
      <h3>{Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{Year}</span>
        </p>
      </div>
    </li>
  );
}
