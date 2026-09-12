export default function MovieCardSkeleton() {
  return (
    <li className="movie-skeleton" aria-hidden="true">
      <div className="skeleton skeleton-poster" />

      <div className="skeleton skeleton-title" />

      <div className="skeleton-year-container">
        <div className="skeleton skeleton-icon" />
        <div className="skeleton skeleton-year" />
      </div>
    </li>
  );
}
