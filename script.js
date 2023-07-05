const form = document.querySelector("#myForm");
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const input = document.querySelector("#number");
  let temp = input.value;
  let num = Number(input.value);
  const result = document.querySelector(".result");
  if (!isNaN(num) && num % 1 === 0) {
    if (num % 2 === 0) {
      result.innerText = `${num} is even.`;
    } else {
      result.innerText = `${num} is odd.`;
    }
  } else {
    result.innerText = `${temp} is not a integer number`;
  }
  input.value = "";
});
