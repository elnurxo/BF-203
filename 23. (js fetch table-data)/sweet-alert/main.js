document.querySelector('#sweet-btn').addEventListener('click',()=>{
    Swal.fire({
        position: 'bottom-end',
        icon: 'error',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        footer: '<a href="">Why do I have this issue?</a>'
      })
})