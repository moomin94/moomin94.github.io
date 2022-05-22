const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-input");
const greeting = document.querySelector(".greeting");

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove("hidden");
  loginForm.classList.add("hidden");
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginInput.value = "";
  paintGreeting(username);
  localStorage.setItem("username", username);
}

loginForm.addEventListener("submit", handleLoginSubmit);

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
} else {
  paintGreeting(savedUsername);
}
