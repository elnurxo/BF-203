let loginForm = document.querySelector("#login-form");
let usernameInp = document.querySelector("#username");
let passwordInp = document.querySelector("#password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  axios
    .get("http://localhost:3000/users")
    .then((result) => {
      let found = result.data.find(
        (x) =>
          x.username == usernameInp.value && x.password == passwordInp.value
      );

      if (found) {
        localStorage.setItem('user',JSON.stringify({
            isLogged: true,
            userID: found.id
        }));
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'user signed in successfully!',
            showConfirmButton: false,
            timer: 1500
          })
      }
      else{
        Swal.fire({
            position: 'bottom-end',
            icon: 'error',
            title: 'username or password is incorrect!',
            showConfirmButton: false,
            timer: 1500
          })
      }

      usernameInp.value = '';
      passwordInp.value = '';
    })
    .catch((err) => {});
});
