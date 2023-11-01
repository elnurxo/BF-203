let usernameInp = document.querySelector('#username');
let passwordInp = document.querySelector('#password');
let emailInp = document.querySelector('#email');
let registerForm = document.querySelector('form');

registerForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/users', {
        email: emailInp.value,
        username: usernameInp.value,
        password: passwordInp.value
    });

    Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'user registered successfully!',
        showConfirmButton: false,
        timer: 1500
      })
    //reset input
    emailInp.value = '';
    usernameInp.value = '';
    passwordInp.value = '';
})