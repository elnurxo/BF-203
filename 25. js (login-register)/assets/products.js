let productsList = document.querySelector('.products-list');
let  logOutBtn = document.querySelector('.log-out');

if (!JSON.parse(localStorage.getItem('user'))) {
    productsList.innerHTML = `<li class="list-group-item text-danger text-center fw-bold">You have to login first!</li>`;
    productsList.innerHTML += `
    <a href="login.html">Login</a>
    <a href="register.html">Register</a>
    `
}
else{
    axios.get('http://localhost:3000/products')
    .then((result)=>{
        result.data.forEach(product => {
            productsList.innerHTML += `<li class="list-group-item">${product.name}</li>`
        });
    })
}

logOutBtn.addEventListener('click',(e)=>{
    if (JSON.parse(localStorage.getItem('user'))) {
        localStorage.removeItem('user');
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'Logged Out',
            showConfirmButton: false,
            timer: 1500
          })  
    }
    else{
        Swal.fire({
            position: 'bottom-end',
            icon: 'error',
            title: 'You have to login to Log Out!',
            showConfirmButton: false,
            timer: 1500
          })  
    }
})