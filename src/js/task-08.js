const form = document.querySelector(".login-form");
const input = document.querySelectorAll("input");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  input.forEach((item) => {
    if (item.value === "") {
      return alert("Всі поля повинні бути заповненні!");
    }
  });
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = { email, password };
  console.log(formData);

  document.querySelector(".login-form").reset();
}
