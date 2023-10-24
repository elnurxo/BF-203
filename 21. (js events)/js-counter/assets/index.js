let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let counterSpan = document.querySelector("#counter");

plus.addEventListener("click", function () {
  let num = Number(counterSpan.textContent);
  num++;
  minus.removeAttribute("disabled");
  minus.classList.replace("btn-danger", "btn-success");
  counterSpan.textContent = num;
});
minus.addEventListener("click", function () {
  let num = Number(counterSpan.textContent);
  if (num > 0) {
    num--;
    counterSpan.textContent = num;
  } else {
    this.classList.replace("btn-success", "btn-danger");
    this.setAttribute("disabled", true);
  }
});
