const form = document.querySelector("#form");
const password = document.querySelector("#password");
const span = document.querySelector("#password-toggle");
const spanTheme = document.querySelector("#theme-toggle");

//theme toggle
spanTheme.addEventListener("click", (e) => {
  if (
    spanTheme.firstElementChild.outerHTML === `<i class="fa-solid fa-moon"></i>`
  ) {
    spanTheme.innerHTML = "";
    spanTheme.innerHTML = `<i class="fa-regular fa-sun"></i>`;

    document.body.style.backgroundColor = "black";
    document.body.style.color = "#fff";
    span.style.color = 'black' //to retain the color of the password toggle
    
  } else 
  if (
    spanTheme.firstElementChild.outerHTML === `<i class="fa-regular fa-sun"></i>`
  ) {
    spanTheme.innerHTML = "";
    spanTheme.innerHTML = `<i class="fa-solid fa-moon"></i>`;

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});

//form toggle
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

span.addEventListener("click", (e) => {
  if (
    span.firstElementChild.outerHTML === `<i class="fa-solid fa-eye-slash"></i>`
  ) {
    span.innerHTML = "";
    span.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    password.type = "text";
    return;
  } else if (
    span.firstElementChild.outerHTML === `<i class="fa-solid fa-eye"></i>`
  ) {
    span.innerHTML = "";
    span.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    password.type = "password";
    return;
  }
});
