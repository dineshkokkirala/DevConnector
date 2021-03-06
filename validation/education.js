const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.default.isEmpty(data.school)) {
    errors.school = "School field is Required";
  }

  if (Validator.default.isEmpty(data.degree)) {
    errors.degree = "Degree field is Required";
  }

  if (Validator.default.isEmpty(data.from)) {
    errors.from = "From date field is Required";
  }
  if (Validator.default.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study field is Required";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
};
