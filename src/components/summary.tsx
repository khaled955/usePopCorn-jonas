import type { WatchedMovie } from "../types/movie.type";
import { average } from "../utils/average";
import Statistics from "./statistics";
// import { average } from "../utils/average";

type SummaryProps = {
  watched: WatchedMovie[];
};

export default function Summary({watched}:SummaryProps) {

  // Variables
  const avgImdbRating = average(watched.map((movie) => +movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runTime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>

        <Statistics
          rating={avgImdbRating}
          runTime={avgRuntime}
          userRating={avgUserRating}
        />
      </div>
    </div>
  );
}
