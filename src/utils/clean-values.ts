export function cleanValue<T>(value: T | null | undefined, defaultValue: T): T {
  if (
    value === null ||
    value === undefined ||
    (typeof value === "string" &&
      (value.trim() === "" || value.trim().toUpperCase() === "N/A"))
  ) {
    return defaultValue;
  }

  return value;
}
