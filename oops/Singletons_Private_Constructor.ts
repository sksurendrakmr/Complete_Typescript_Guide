/**
 * There is a pattern in OOPS which is called the singleton pattern
 *
 * Singleton pattern is about ensuring that we will always only have exactly
 * one instance of a certain class.
 *
 * Useful in scenario where we somehow can't use static methods or properties
 * or we don't want to but at the same time, we want to make sure that we can't
 * create multiple objects based on a class but we always have exactly one object
 * based on a class.
 */

class Payroll {
  private static instance: Payroll;
  //now we can't use new keyword to create the object of this class.
  private constructor() {}

  static getInstance() {
    if (Payroll.instance) {
      return this.instance;
    }
    this.instance = new Payroll();
    return this.instance;
  }
}

const payRoll1 = Payroll.getInstance();
const payRoll2 = Payroll.getInstance(); //get same instance
