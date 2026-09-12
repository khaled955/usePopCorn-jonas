import { useState } from "react";
import type { Movie } from "../types/movie.type";
import Summary from "./summary";
import WatchedList from "./watched-list";
import MovieList from "./movie-list";
import Box from "./box";
import ErrorMessage from "./error-message";
import MovieListSkeleton from "./movie-list-skeleton";
import EmptyMovies from "./empty-movies";
type MainProps = {
  movies: Movie[];
  watched: [];
  loading: boolean;
  error: string | null;
};

export default function Main({
  movies,
  watched,
  loading,
  error,
}: MainProps & { loading: boolean }) {
  // States
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

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
          <MovieList movies={movies} />
        )}
      </Box>

      {/* Watched movie list box on right */}
      <Box isOpen={isOpen2} setIsOpen={setIsOpen2}>
        <>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </>
      </Box>
    </main>
  );
}
