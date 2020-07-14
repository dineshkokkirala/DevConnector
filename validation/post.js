const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.default.isLength(data.text, { min: 10, max: 500 })) {
    errors.text = "Post must be between 10 and 500 characters";
  }

  if (Validator.default.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors),
  };
};
