/***
 * Function Overload
 * A feature that allows us to define multiple functions signatures.
 * i.e. we can have multiple possible ways of calling a function with
 * different parameters.
 */

type Combinable = string | number;

function add(a: number, b: number): number;

function add(a: string, b: string): string;

function add(a: number, b: string): string;

function add(a: number): number;

function add(a: Combinable, b?: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, "sk");
