/**
 * It might be unknown because we don't know yet what the user will
 * eventually enter.
 *
 * We can store any value without getting any errors
 *
 * It is bit restrictive then any.
 *
 * With unknown, we have to check the type that currently store in
 * userInput before we assign to other variables with specific type.
 *
 * i.e we need a additional type checking with unknown to be able to assign
 * an unknown value to a value with a fixed type.
 *
 * Therefore unknown is better choice over any. If we know we can't tell exactly
 * what type we will store, it might be a number, might be a string but we know
 * what we want to do with it.
 */
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Surendra";

userName = userInput; //error

if (typeof userInput === "string") userName = userInput;
