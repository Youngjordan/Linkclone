document.querySelector(".show-password").addEventListener("click", function () {
  const passwordField = document.querySelector(".password-container input");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    this.textContent = "Hide";
  } else {
    passwordField.type = "password";
    this.textContent = "Show";
  }
});
