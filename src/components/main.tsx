import { useState } from "react";
import type { Movie } from "../types/movie.type";
import Summary from "./summary";
import WatchedList from "./watched-list";
import MovieList from "./movie-list";
import Box from "./box";
import ErrorMessage from "./error-message";
import MovieListSkeleton from "./movie-list-skeleton";
import EmptyMovies from "./empty-movies";
import MovieDetails from "./movie-details";
import { useWatchedMovies } from "../hooks/use-watched-movies";
type MainProps = {
  movies: Movie[];
  loading: boolean;
  error: string | null;
};

export default function Main({ movies, loading, error }: MainProps) {
  // State
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  // const [watched, setWatched] = useState<WatchedMovie[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Hooks
  const { addWatchedMovie, watched,deleteWatchedMovie } = useWatchedMovies();
  // Handles
  function handleSelectMovie(id: string | null) {
    setSelectedId((currentId) => (currentId === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

 
  return (
    <main className="main">
      {/* Movie list box on left */}
      <Box isOpen={isOpen1} setIsOpen={setIsOpen1}>
        {loading && <MovieListSkeleton />}
        {!loading && error && <ErrorMessage message={error} />}
        {!loading && !error && movies.length === 0 && (
          <EmptyMovies message="No movies found please search new movie" />
        )}
        {!loading && !error && movies.length > 0 && (
          <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
        )}
      </Box>

      {/* Watched movie list box on right */}
      <Box isOpen={isOpen2} setIsOpen={setIsOpen2}>
        <>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatchedMovie={addWatchedMovie}
              watchedMovie={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedList watched={watched} onDeleteMovie={deleteWatchedMovie} />
            </>
          )}
        </>
      </Box>
    </main>
  );
}
