let btn = document.querySelector("button");
let box = document.querySelector(".box");
let search = document.querySelector("#search");
let colorInput = document.querySelector('#color');
let countSpan = document.querySelector('#count');
let num = Number(window.prompt('enter button click limit!'));
console.log(num);
countSpan.textContent = num;
btn.addEventListener("click", () => {
  if (!search.value) {
    alert("input is empty!");
    // btn.setAttribute("disabled", true);
    return;
  } else {
  
    if (num>0) {
        num--;
        countSpan.textContent = num;
        box.classList.toggle("active");
        box.style.backgroundColor = colorInput.value;
        // btn.setAttribute("disabled");
        box.children[0].textContent = search.value;
        search.value = "";
    }
    else{
        btn.style.backgroundColor = 'red';
        alert('limit exceeded!');
        return;
    }
  }
  // if (box.classList.contains('active')) {
  //     box.children[0].textContent = 'Big';
  // }
  // else{
  //     box.children[0].textContent = 'Small';
  // }
});
