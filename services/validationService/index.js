import { CONST } from "../../constant";

export const emailValidator = (value) => {
  if (CONST.REGEX.EMAIL.test(value)) {
    return true;
  } else {
    return false;
  }
};
