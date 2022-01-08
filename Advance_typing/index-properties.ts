/**
 * index type -> A feature that allows us to create objects which are
 * more flexible regarding the properties they might hold.
 */

interface ErrorContainer {
  id: string;
  [prop: string]: string;
}
