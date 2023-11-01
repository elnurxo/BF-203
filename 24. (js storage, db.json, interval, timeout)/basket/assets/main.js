let loader = document.querySelector(".wrapper-loader");
let cardsWrapper = document.querySelector(".cards-wrapper");
let basketCount = document.querySelector('#basket-quantity');
let API_BASE_URL = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", () => {
  fetch(API_BASE_URL + "/books")
    .then((res) => res.json())
    .then((books) => {
      loader.classList.add("d-none");
      books.forEach((book) => {
        cardsWrapper.innerHTML += `
            <div class="col-3 mb-3">
            <div class="card">
                <img class="card-img-top" style="height: 200px;object-fit: cover;"
                    src="${book.imagelink}"
                    alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${book.name}</h5>
                    <p class="card-text">Price: ${book.price}</p>
                    <p class="card-text">Author: ${book.author}</p>
                    <button data-id="${book.id}" class="btn btn-outline-success add-to-card"><i class="fa-solid fa-cart-shopping"></i></button>
                    <button id="${book.id}" class="btn btn-outline-danger remove"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
        `;
      });

      let removeBtns = document.querySelectorAll(".remove");
      removeBtns.forEach((btn) => {
        btn.addEventListener("click", function() {
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
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              let id = this.id;
              fetch(API_BASE_URL + `/books/${id}`, {
                method: "DELETE",
              });
              this.closest('.col-3');
            }
          });
        });
      });
      let addCardBtns = document.querySelectorAll('.add-to-card');
      addCardBtns.forEach((btn)=>{
        btn.addEventListener('click',function(){
            //add to local storage
            let id = this.getAttribute('data-id');
            fetch(API_BASE_URL+`/books/${id}`)
            .then((res)=>res.json())
            .then((book)=>{
                if (!JSON.parse(localStorage.getItem('cart'))) {
                    book.quantity = 1;
                    localStorage.setItem('cart',JSON.stringify([book]));
                    basketCount.textContent = (JSON.parse(localStorage.getItem('cart'))).length;
                }
                else{
                    let prevCartItems = JSON.parse(localStorage.getItem('cart'));
                    let found = prevCartItems.find((x)=>x.id===book.id);

                    if (found) {
                        found.quantity++;
                        localStorage.setItem('cart',JSON.stringify([...prevCartItems]));
                    }
                    else{
                        book.quantity = 1;
                        localStorage.setItem('cart',JSON.stringify([...prevCartItems, book]));
                        basketCount.textContent = (JSON.parse(localStorage.getItem('cart'))).length;
                    }
                }
            })
            
            Swal.fire({
                position: 'bottom-end',
                icon: 'success',
                title: 'Book added to Cart',
                showConfirmButton: false,
                timer: 1000
              })
        })
      })
    });
});

if (JSON.parse(localStorage.getItem('cart'))) {
    basketCount.textContent = (JSON.parse(localStorage.getItem('cart'))).length;
}
