let basketCount = document.querySelector("#basket-quantity");
let API_BASE_URL = "http://localhost:3000";
let tBody = document.querySelector("tbody");
let total = document.querySelector("#total");
let orderBtn = document.querySelector('.order-btn');

if (JSON.parse(localStorage.getItem("cart"))) {
  basketCount.textContent = JSON.parse(localStorage.getItem("cart")).length;
}

document.addEventListener("DOMContentLoaded", () => {
  if (JSON.parse(localStorage.getItem("cart"))) {
    let basketItems = JSON.parse(localStorage.getItem("cart"));
    basketItems.forEach((basketItem) => {
      tBody.innerHTML += `
            <tr>
            <th scope="row">1</th>
            <td>${basketItem.name}</td>
            <td>
                <img width="50px" height="50px" src="${
                  basketItem.imagelink
                }" alt="${basketItem.name}"/>
            </td>
            <td>${basketItem.price}$</td>
            <th scope="row">x${basketItem.quantity}</th>
            <td>${basketItem.quantity * basketItem.price}</td>
            <td>
                <button class="btn btn-success increase">+</button>
            </td>
            <td>
                <button class="btn btn-danger decrease">-</button>
            </td>
            <td>
                <button id="${
                  basketItem.id
                }" class="btn btn-outline-danger trash"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
            `;
    });

    //trash
    let trashBtns = document.querySelectorAll(".trash");
    trashBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            let id = this.id;
            let basketItems = JSON.parse(localStorage.getItem("cart"));
            let idx = basketItems.indexOf((x) => x.id === id);
            basketItems.splice(idx, 1);
            localStorage.setItem("cart", JSON.stringify([...basketItems]));
            basketCount.textContent = basketItems.length;
            this.closest("tr").remove();

            let totalPrice = JSON.parse(localStorage.getItem("cart")).reduce(
              (prevValue, currentValue) => {
                return prevValue + currentValue.price * currentValue.quantity;
              },
              0
            );
            total.textContent = totalPrice;
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      });
    });
  } else {
    tBody.innerHTML = `<tr><th class="text-danger">NO ITEMS IN BASKET!</th></tr>`;
  }
});

if (JSON.parse(localStorage.getItem("cart"))) {
  let totalPrice = JSON.parse(localStorage.getItem("cart")).reduce(
    (prevValue, currentValue) => {
      return prevValue + currentValue.price * currentValue.quantity;
    },
    0
  );
  total.textContent = Math.round(totalPrice);
}

orderBtn.addEventListener('click',()=>{
    Swal.fire({
        title: 'Are you sure to confirm Order?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, confirm order!'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('cart');
          basketCount.textContent = 0;
          tBody.innerHTML = '';
          total.textContent = 0;
          Swal.fire(
            'Order Confirmed Successfully!',
          )
        }
      })
})
