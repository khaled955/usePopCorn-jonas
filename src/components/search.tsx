import { useEffect, useRef } from "react";

type SearchProps = {
  query: string;
  setQuery: (query: string) => void;
};

export default function Search({ query, setQuery }: SearchProps) {
  // States
  const searchInputRef = useRef<null | HTMLInputElement>(null);

  // Effects

  useEffect(() => {
    function callBack(e: KeyboardEvent) {
      if (document.activeElement === searchInputRef.current) return;

      if (e.code === "Enter") {
        searchInputRef.current?.focus();
        setQuery("");
      }
    }

    document.addEventListener("keydown", callBack);

    return () => {
      document.removeEventListener("keydown", callBack);
    };
  }, [setQuery]);

  return (
    <input
      className="search"
      type="text"
      ref={searchInputRef}
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
