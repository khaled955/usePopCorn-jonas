import { useEffect, useState } from "react";
import { fetchMovie } from "../services/movie-api.service";
import type { MovieDetails, WatchedMovie } from "../types/movie.type";
import StarRating from "./star-rating";
import MovieDetailsSkeleton from "../skeletons/movie-details-skeleton";
import ErrorMessage from "./error-message";

type SelectedMovieProps = {
  selectedId: string | null;
  onCloseMovie: () => void;
  onAddWatchedMovie: (watchedMovie: WatchedMovie) => void;
};
export default function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatchedMovie,
}: SelectedMovieProps) {
  // States
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rating, setRating] = useState(0);


  // Effects
  useEffect(() => {
    async function fetchMovieDetails() {
      // Guard class
      if (!selectedId) return;

      try {
        setLoading(true);
        setError(null);
        const movie = await fetchMovie(selectedId);
        setMovieDetails(movie);
      } catch (error) {
        if (error instanceof Error)
          setError(error.message || "Failed to fetch movie details!");
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [selectedId]);

  if (loading) return <MovieDetailsSkeleton />;
  if (error) return <ErrorMessage message={error} />;

  if (!movieDetails) return null;

  // Variables
  const {
    Title,
    Poster,
    Runtime,
    imdbRating,
    Plot,
    Released,
    Actors,
    Director,
    Genre,
  } = movieDetails;

  // Handlers
  function handleAddWatchedMovie() {
    const newMovie = {
      Poster,
      runTime: Number(Runtime.split(" ").at(0)) || 0,
      Title,
      imdbRating: Number(imdbRating),
      imdbID: selectedId!,
      userRating: rating,
    };

    onAddWatchedMovie(newMovie);
    onCloseMovie();
  }

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={onCloseMovie}>
          &larr;
        </button>
        <img src={Poster} alt={`Poster of ${Title}`} />

        <div className="details-overview">
          <h2>{Title}</h2>
          <p>
            {Released} &bull; {Runtime}
          </p>
          <p>{Genre}</p>
          <p>
            <span>⭐</span> {imdbRating} IMDB rating
          </p>
        </div>
      </header>

      <section>
        {/* Rating */}
        <div className="rating">
          <StarRating maxRating={10} size={24} onSetRating={setRating} />
          <button className="btn-add" onClick={handleAddWatchedMovie}>
            + Add to list
          </button>
        </div>
        <p>
          <em>{Plot}</em>
        </p>
        <p>Starring {Actors}</p>
        <p>Directed by {Director}</p>
      </section>
    </div>
  );
}
