const form = document.querySelector(".login-form");
const input = document.querySelectorAll("input");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (!email || !password) {
    return alert("Всі поля повинні бути заповненні!");
  }
  const formData = { email, password };
  console.log(formData);
  document.querySelector(".login-form").reset();
}
