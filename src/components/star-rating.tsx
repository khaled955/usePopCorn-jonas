import { useState, type MouseEventHandler } from "react";

const containerStyle = { display: "flex", alignItems: "center", gap: "16px" };
const starContainerStyle = { display: "flex" };

const defaultColor = "#fcc419";
const defaultSize = 48;
type StarRatingProps = {
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
  messages?: string[];
  defaultRating?: number;
  onSetRating?: (rating: number) => void;
};

/**
 * Displays an interactive star rating component.
 *
 * Users can select a rating by clicking a star and preview
 * a rating by hovering over the stars.
 *
 * @param maxRating - Maximum number of stars. Defaults to 5.
 * @param color - Color of the stars. Defaults to "#fcc419".
 * @param size - Size of each star in pixels. Defaults to 48.
 * @param className - Additional CSS class for the component.
 * @param messages - Optional messages displayed for each rating.
 * @param defaultRating - Initial selected rating. Defaults to 0.
 * @param onSetRating - Callback called when a rating is selected.
 */

export default function StarRating({
  maxRating = 5,
  color = defaultColor,
  size = defaultSize,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}: StarRatingProps) {
  // States
  const [rating, setRating] = useState(defaultRating || 0);
  const [tempRating, setTempRating] = useState(0);

  //  Styles
  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  //   Handlers

  function handleSetRating(rating: number) {
    setRating(rating);
    onSetRating?.(rating);
  }
  function handleSetTempRating(rating: number) {
    setTempRating(rating);
  }
  function handleResetTempRating() {
    setTempRating(0);
  }

  return (
    <div style={containerStyle} className={className}>
      <div className="stars" style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleSetRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => handleSetTempRating(i + 1)}
            onHoverOut={handleResetTempRating}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p className="message" style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

type StarProps = {
  onRate: MouseEventHandler<HTMLSpanElement>;
  full: boolean;
  onHoverIn: MouseEventHandler<HTMLSpanElement>;
  onHoverOut: MouseEventHandler<HTMLSpanElement>;
  color: string;
  size: number;
};
function Star({ onRate, full, onHoverOut, onHoverIn, color, size }: StarProps) {
  // Styles
  const spanStarStyle = {
    display: "block",
    width: `${size}px`,
    height: `${size}px`,
    cursor: "pointer",
  };

  return (
    <span
      style={spanStarStyle}
      role="button"
      aria-label="Rate 1 star"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95１-.69l１.０７-３．２９２z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
