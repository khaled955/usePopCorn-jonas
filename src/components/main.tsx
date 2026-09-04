import { useState } from "react";
import type { Movie, WatchedMovie } from "../types/movie.type";
import Summary from "./summary";
import WatchedList from "./watched-list";
import MovieList from "./movie-list";
import Box from "./box";
type MainProps = {
  movies: Movie[];
  watched: WatchedMovie[];
};

export default function Main({ movies, watched }: MainProps) {
  // States
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <main className="main">
      {/* Movie list box on left */}
      <Box isOpen={isOpen1} setIsOpen={setIsOpen1}>
        <MovieList movies={movies} />
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
