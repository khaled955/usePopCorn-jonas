import { useEffect, useState } from "react";
import type { Movie } from "./types/movie.type";
import Navbar from "./components/navbar";
import Main from "./components/main";
import NumResults from "./components/num-results";
import Search from "./components/search";
import Logo from "./components/logo";
import { fetchMovies } from "./services/movie-api.service";
import type { MobileView } from "./types/app.types";
import MobileToggleButton from "./components/mobile-toggle-button";

export default function App() {
  // States
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [mobileView, setMobileView] = useState<MobileView>("movies");
  // Effects
  useEffect(() => {
    const controller = new AbortController();

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
        const movies = await fetchMovies(query, controller.signal);
        setMovies(movies);
      } catch (error) {
        // ignor abort error
        if (error instanceof Error && error.name === "AbortError") return;

        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
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

      <div className="mobile-tabs">
        <MobileToggleButton
          view="movies"
          currentView={mobileView}
          onChangeView={setMobileView}
        >
          🎬 Movies
        </MobileToggleButton>

        <MobileToggleButton
          view="watched"
          currentView={mobileView}
          onChangeView={setMobileView}
        >
          ⭐ Watched
        </MobileToggleButton>
      </div>

      <Main
        mobileView={mobileView}
        movies={movies}
        loading={loading}
        error={error}
        setMobileView={setMobileView}
      />
    </>
  );
}
