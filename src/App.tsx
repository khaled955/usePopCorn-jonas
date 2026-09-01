import { useState } from "react";
import type { Movie, WatchedMovie } from "./types/movie.type";
import { tempWatchedData, tempMovieData } from "./data/movie.data";
import Navbar from "./components/navbar";
import Main from "./components/main";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies] = useState<Movie[]>(tempMovieData);
  const [watched] = useState<WatchedMovie[]>(tempWatchedData);

  return (
    <>
      <Navbar query={query} setQuery={setQuery} movies={movies} />
      <Main movies={movies} watched={watched} />
    </>
  );
}
