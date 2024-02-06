const emailAddress = document.querySelectorAll(".name");
const errorResponse = document.querySelector(".error-response");
const InvalidMail = document.querySelector(".invalid-email");
const sendButton = document.querySelector(".send-button");
const randomNumber = Math.floor(Math.random() * 100);

emailAddress[1].addEventListener("change", InvalidEmail);
const email =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function InvalidEmail() {
  if (!emailAddress[1].value.match(email)) {
    InvalidMail.style.display = "block";
    errorResponse.innerHTML = `Hey ${emailAddress[0].value}, please enter a valid email address
    `;
    sendButton.disabled = true;
  } else {
    InvalidMail.style.display = "none";
    sendButton.disabled = false;
  }
}
