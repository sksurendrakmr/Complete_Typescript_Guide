/**
 * never is a type that functions can return
 */

//this function will never produces a value
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError("An error occured", 500);
