import { useEffect, useState } from "react";
import { fetchMovie } from "../services/movie-api.service";
import type { MovieDetails, WatchedMovie } from "../types/movie.type";
import StarRating from "./star-rating";
import MovieDetailsSkeleton from "../skeletons/movie-details-skeleton";
import ErrorMessage from "./error-message";
import type { WatchedMovie as WatchedMovieType } from "../types/movie.type";
import { MAIN_TITLE } from "../constants/app.constant";
import { cleanValue } from "../utils/clean-values";
import MoviePoster from "./movie-poster";

type SelectedMovieProps = {
  selectedId: string | null;
  onCloseMovie: () => void;
  onAddWatchedMovie: (watchedMovie: WatchedMovie) => void;
  watchedMovie: WatchedMovieType[];
};
export default function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatchedMovie,
  watchedMovie,
}: SelectedMovieProps) {
  // States
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rating, setRating] = useState(0);

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

  useEffect(() => {
    document.title = `movie | ${movieDetails?.Title || MAIN_TITLE}`;

    return () => {
      document.title = MAIN_TITLE;
    };
  }, [movieDetails?.Title]);

  // Close by escape button
  useEffect(() => {
    function handleCloseByKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onCloseMovie();
    }
    document.addEventListener("keydown", handleCloseByKeyDown);

    return () => document.removeEventListener("keydown", handleCloseByKeyDown);
  }, [onCloseMovie]);

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
  const isRatedBefore = watchedMovie.find(
    (movie) => movie.imdbID === selectedId,
  );

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={onCloseMovie}>
          &larr;
        </button>
        <MoviePoster src={Poster} title={Title} />
        <div className="details-overview">
          <h2>{Title}</h2>
          <p>
            {cleanValue(Released, "unknown year")} &bull; {Runtime}
          </p>
          <p>{Genre}</p>
          <p>
            <span>⭐</span> {cleanValue(imdbRating, "not available")} IMDB
            rating
          </p>
        </div>
      </header>

      <section>
        {/* Rating */}
        <div className="rating">
          {isRatedBefore ? (
            <span>
              You rated <strong>{Title}</strong> before
              {isRatedBefore.userRating} <span>⭐</span>
            </span>
          ) : (
            <>
              <StarRating maxRating={10} size={24} onSetRating={setRating} />
              {rating > 0 && (
                <button className="btn-add" onClick={handleAddWatchedMovie}>
                  + Add to list
                </button>
              )}
            </>
          )}
        </div>
        <p>
          <em>{cleanValue(Plot, "")}</em>
        </p>
        <p>Starring {cleanValue(Actors, "not available")}</p>
        <p>Directed by {Director}</p>
      </section>
    </div>
  );
}
