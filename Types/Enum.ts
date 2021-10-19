/**
 * If we want to have specific identifier, global constants
 * which we want to represent as numbers but want to assign a human
 * readable label then for that we have enum type.
 *
 * enum=> this keyword automatically enumerated global constant identifiers
 */

enum DESIGNATION {
  ADMIN, //0
  AUTHORS, //1
  READ_ONLY, //2
}

const People = {
  role: DESIGNATION.ADMIN,
};

enum DESIGNATION1 {
  ADMIN = 5, //5
  AUTHORS, //6
  READ_ONLY, //7
}
enum DESIGNATION2 {
  ADMIN = "ADMIN", //5
  AUTHORS = 10, //6
  READ_ONLY = "READ_ONLY", //7
}
