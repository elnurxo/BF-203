let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let counterSpan = document.querySelector("#counter");
let resetBtn = document.querySelector(".reset");

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
resetBtn.addEventListener("click", () => {
  counterSpan.textContent = 0;
});

//check input
let searchInput = document.querySelector("#search");
let error = document.querySelector("#error");
let btn = document.querySelector(".add");
let list = document.querySelector("#list");
let form = document.querySelector("#form");

searchInput.addEventListener("keyup", (e) => {
  if (e.target.value.length < 5) {
    error.classList.replace("d-none", "d-block");
    btn.setAttribute("disabled", true);
    btn.classList.replace("btn-warning", "btn-danger");
  } else {
    error.classList.replace("d-block", "d-none");
    btn.removeAttribute("disabled");
    btn.classList.replace("btn-danger", "btn-warning");
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault(); //browser default behaviour cancel
  if (searchInput.value.trim() === "") {
    window.alert("input is empty!");
  } else {
    let listItem = document.createElement("li");
    listItem.textContent = searchInput.value;
    searchInput.value = "";
    list.append(listItem);
  }
});

//cards
let fullNameInp = document.querySelector("#fname");
let imageLinkInp = document.querySelector("#image");
let ageInp = document.querySelector("#age");
let addForm = document.querySelector("#add-card-form");
let row = document.querySelector(".cards-row");

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  row.innerHTML += `<div class="col-3 mb-3">
  <div class="card">
      <img style="height: 250px;object-fit: cover;" class="card-img-top" src="${imageLinkInp.value}" alt="${fullNameInp.value}">
      <div class="card-body">
          <h5 class="card-title">${fullNameInp.value}</h5>
          <h6>${ageInp.value}</h6>
          <button class="delete btn btn-danger">delete</button>
      </div>
  </div>
</div>`;
resetInputs();

//delete buttons
let deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach((deleteButton)=>{
  deleteButton.addEventListener('click',(e)=>{
    if (window.confirm('are you sure to delete the card?')) {
      e.target.parentElement.parentElement.parentElement.remove();
    }
  })
})
});


function resetInputs() {
  fullNameInp.value = "";
  ageInp.value = "";
  imageLinkInp.value = "";
}
