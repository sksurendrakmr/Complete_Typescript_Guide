/**
 * Literal types => Types that are very clear which exact value it should hold.
 */

type ResultConversion = "as-number" | "as-text";

// const resultConversion:ResultConversion = 'as' //error
const resultConversion: ResultConversion = "as-number"; //error
