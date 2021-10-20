/**
 * When we want to force the developer when working with
 * certain class or extending a certain class to implement a certain
 * methods or override a certain methods
 *
 * We will do that when we ensure that a certain method
 * is available in all classes based on some base class
 * but we also know at the same time that the exact implementation
 * will depend on the specific version.
 */

abstract class Employee {
  abstract describe(): void;
}

class SystemEngineer extends Employee {
  describe() {
    console.log("Hi System Engineer");
  }
}

/**
 * Abstract is very useful when we want to enforce that
 * all classes based on some other class share some common method
 * and property.
 *
 * But at the same time, we wanna make sure that we don't have
 * provide concrete value or concrete implementation in the base
 * class but instead the inheriting class has to do that.
 *
 * abstract classes can't be intantiated
 */
