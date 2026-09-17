import { cleanValue } from "../utils/clean-values";

type MoviePosterProps = {
  src: string;
  title: string;
};

const FALLBACK_POSTER = "/images/poster-placeholder.jpg";

export default function MoviePoster({ src, title }: MoviePosterProps) {
  return (
    <img
      src={cleanValue(src, FALLBACK_POSTER)}
      alt={`Poster of ${title}`}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = FALLBACK_POSTER;
      }}
    />
  );
}
