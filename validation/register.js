const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.default.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  if (Validator.default.isEmpty(data.name)) {
    errors.name = "Name is Required";
  }
  if (Validator.default.isEmpty(data.email)) {
    errors.email = "Email is Required";
  }
  if (!Validator.default.isEmail(data.email)) {
    errors.email = "Email is Invalid";
  }

  if (Validator.default.isEmpty(data.password)) {
    errors.password = "Password is Required";
  }

  if (!Validator.default.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be atleast 6 characters";
  }
  if (Validator.default.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password is Required";
  }

  if (!Validator.default.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
};
