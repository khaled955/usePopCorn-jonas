import { useState } from "react";
import type { Movie, WatchedMovie } from "./types/movie.type";
import { tempWatchedData, tempMovieData } from "./data/movie.data";
import Navbar from "./components/navbar";
import Main from "./components/main";
import NumResults from "./components/num-results";
import Search from "./components/search";
import Logo from "./components/logo";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies] = useState<Movie[]>(tempMovieData);
  const [watched] = useState<WatchedMovie[]>(tempWatchedData);

  return (
    <>
      <Navbar>
        <>
          <Logo />
          <Search query={query} setQuery={setQuery} />
          <NumResults totalResults={movies.length} />
        </>
      </Navbar>


      <Main movies={movies} watched={watched} />
    </>
  );
}
