/**
 * Calculates the average of an array of numbers.
 *
 * @param arr - The numbers to calculate the average from.
 * @returns The average value.
 */
export const average = (arr: number[]): number =>
  arr.reduce((acc, cur) => acc + cur / arr.length, 0);
