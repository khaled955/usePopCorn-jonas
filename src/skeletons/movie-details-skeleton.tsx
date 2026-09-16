export default function MovieDetailsSkeleton() {
  return (
    <div className="details details-skeleton" aria-hidden="true">
      <header>
        {/* Poster */}
        <div className="skeleton details-skeleton-poster" />

        {/* Overview */}
        <div className="details-overview">
          <div className="skeleton details-skeleton-title" />

          <div className="skeleton details-skeleton-text details-skeleton-medium" />

          <div className="skeleton details-skeleton-text details-skeleton-small" />

          <div className="skeleton details-skeleton-text details-skeleton-medium" />
        </div>
      </header>

      <section>
        {/* Rating */}
        <div className="rating">
          <div className="skeleton details-skeleton-rating" />
        </div>

        {/* Plot */}
        <div className="skeleton details-skeleton-text" />
        <div className="skeleton details-skeleton-text" />
        <div className="skeleton details-skeleton-text details-skeleton-medium" />

        {/* Actors */}
        <div className="skeleton details-skeleton-text" />

        {/* Director */}
        <div className="skeleton details-skeleton-text details-skeleton-medium" />
      </section>
    </div>
  );
}
