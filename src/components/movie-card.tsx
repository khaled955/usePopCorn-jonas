import type { Movie } from "../types/movie.type";

type MovieCardProps = {
  movie: Movie;
  onSelectMovie: (id: string | null) => void;
};
export default function MovieCard({ movie, onSelectMovie }: MovieCardProps) {
  // Variables
  const { Poster, Title, Year, imdbID } = movie;
  return (
    <li key={movie.imdbID} onClick={() => onSelectMovie(imdbID)}>
      <img src={Poster} alt={`${Title} poster`} />
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
