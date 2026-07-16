const form = document.getElementById("contact-form");

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const successMessage = document.getElementById("success-message");

function validateField(field, isValid) {
  field.classList.remove("success", "error");

  if (field.value.trim() === "") {
    return;
  }

  if (isValid) {
    field.classList.add("success");
  } else {
    field.classList.add("error");
  }
}

name.addEventListener("blur", () => {
  validateField(name, name.value.trim() !== "");
});

email.addEventListener("blur", () => {
  validateField(email, email.checkValidity());
});

subject.addEventListener("blur", () => {
  validateField(subject, subject.value.trim() !== "");
});

message.addEventListener("blur", () => {
  validateField(message, message.value.trim() !== "");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  successMessage.style.display = "block";
  successMessage.textContent =
    "Message sent successfully! Thank you for reaching out.";

  form.reset();

  subjectCount.textContent = "0";
  messageCount.textContent = "0";
  document
    .querySelectorAll(".success, .error")
    .forEach((field) => field.classList.remove("success", "error"));
});
const subjectCount = document.getElementById("subject-count");
const messageCount = document.getElementById("message-count");

subject.addEventListener("input", () => {
  subjectCount.textContent = subject.value.length;
});

message.addEventListener("input", () => {
  messageCount.textContent = message.value.length;
});
