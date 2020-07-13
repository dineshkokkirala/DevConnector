const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.default.isEmail(data.email)) {
    errors.email = "Email is Invalid";
  }
  if (Validator.default.isEmpty(data.email)) {
    errors.email = "Email is Required";
  }

  if (Validator.default.isEmpty(data.password)) {
    errors.password = "Password is Required";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
};
