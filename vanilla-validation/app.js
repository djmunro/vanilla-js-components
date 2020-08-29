username = document.querySelector("#username");
usernameErrorLabel = document.querySelector("#username-error");
password = document.querySelector("#password");
passwordErrorLabel = document.querySelector("#password-error");
submitButton = document.querySelector("#submit");

username.oninput = event =>
  validateInput(event, "username", username, usernameErrorLabel);
password.oninput = event =>
  validateInput(event, "password", password, passwordErrorLabel);

validateInput = (event, type, input, errorLabel) => {
  let inputChar = event.target.value;
  const matcher = /^[0-9a-zA-Z]+$/;
  if (!inputChar.match(matcher)) {
    errorLabel.classList = "red-text";
    errorLabel.innerHTML = `Invalid ${type}, expected only letters and numbers`;
    submitButton.disabled = true;
  } else {
    errorLabel.innerHTML = "";
    submitButton.disabled = false;
  }

  if (!(input.value.length < 12)) {
    errorLabel.classList = "red-text";
    errorLabel.innerHTML = `${type} must be less than 12 characters long`;
  }
};
