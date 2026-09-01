import type { Movie } from "../types/movie.type";
import Logo from "./logo";
import NumResults from "./num-results";
import Search from "./search";

type NavbarProps = {
  query: string;
  setQuery: (query: string) => void;
  movies: Movie[];
};
export default function Navbar({ query, setQuery, movies }: NavbarProps) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} setQuery={setQuery} />
      <NumResults totalResults={movies.length} />
    </nav>
  );
}
