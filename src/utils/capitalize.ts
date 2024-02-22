/**
 * Returns the input text with every word first letter capitalized
 *
 * @param str - The input text
 * @returns The input text with every word first letter capitalized
 *
 */
export const capitalize = (str: string): string => {
    const words = str.split(" ");
    let capitalized = "";
    words.forEach((word) => {
      capitalized += ` ${word.charAt(0).toUpperCase()}${word
        .slice(1)
        .toLowerCase()}`;
    });
    return capitalized.trim();
  };
  