const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.default.isEmpty(data.title)) {
    errors.title = "Job title field is Required";
  }

  if (Validator.default.isEmpty(data.company)) {
    errors.company = "Company field is Required";
  }

  if (Validator.default.isEmpty(data.from)) {
    errors.from = "From date field is Required";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
};
