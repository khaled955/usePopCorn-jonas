import { useEffect, useState } from "react";
import type { Movie } from "./types/movie.type";
import Navbar from "./components/navbar";
import Main from "./components/main";
import NumResults from "./components/num-results";
import Search from "./components/search";
import Logo from "./components/logo";
import { fetchMovies } from "./services/movie-api.service";

export default function App() {
  // States
  const [query, setQuery] = useState("batman");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Effects
  useEffect(() => {
    async function fetchData() {
      // Guard clause to prevent unnecessary API calls for short queries
      if (query.trim().length < 3) {
        setMovies([]);
        setError(null);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const movies = await fetchMovies(query);
        setMovies(movies);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query]);

  return (
    <>
      <Navbar>
        <>
          <Logo />
          <Search query={query} setQuery={setQuery} />
          <NumResults totalResults={movies.length} />
        </>
      </Navbar>

      <Main movies={movies} loading={loading} error={error} />
    </>
  );
}
