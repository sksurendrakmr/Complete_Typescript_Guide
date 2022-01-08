//To deal with nullish data
/**
 * If we don't know with certainty whether its null or undefined or a
 * valid pieve of data.
 *
 * we should use nullish operator,if we only want to check for null and undefined
 */

const userData = null;

const storedData = userData ?? "DEFAULT";

console.log(storedData);
