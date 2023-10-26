let getDataBtn = document.querySelector(".get-data");
let sortByUsername = document.querySelector(".sort-by-username");
let sortByID = document.querySelector(".sort-by-id");
let clearAll = document.querySelector(".clear-all");
let tBody = document.querySelector("tbody");

getDataBtn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      users.forEach((user) => {
        tBody.innerHTML += `
            <tr>
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address?.city}</td>
            <td><a href="https://${user.website}" target="_blank">${user.website}</a></td>
            <td><button id="${user.id}" class="btn btn-outline-success learn-more">Learn More</button></td>
          </tr>
            `;
        let infoBtns = document.querySelectorAll(".learn-more");
        infoBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                Swal.fire({
                  title: data.name,
                  text: `${data.address?.street}, ${data.address?.suite}`,
                  footer: data.phone,
                });
              });
          });
        });
      });
    });
});

sortByUsername.addEventListener("click", () => {
  tBody.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      const sortedUsers = users.sort((x, y) => x.name.localeCompare(y.name));
      sortedUsers.forEach((user) => {
        tBody.innerHTML += `
            <tr>
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address?.city}</td>
            <td><a href="https://${user.website}" target="_blank">${user.website}</a></td>
            <td><button id="${user.id}" class="btn btn-outline-success learn-more">Learn More</button></td>
          </tr>
            `;
        let infoBtns = document.querySelectorAll(".learn-more");
        infoBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                Swal.fire({
                  title: data.name,
                  text: `${data.address?.street}, ${data.address?.suite}`,
                  footer: data.phone,
                });
              });
          });
        });
      });
    });
});

sortByID.addEventListener("click", () => {
  tBody.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      const sortedUsers = users.sort((x, y) => y.id - x.id);
      sortedUsers.forEach((user) => {
        tBody.innerHTML += `
            <tr>
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address?.city}</td>
            <td><a href="https://${user.website}" target="_blank">${user.website}</a></td>
            <td><button id="${user.id}" class="btn btn-outline-success learn-more">Learn More</button></td>
          </tr>
            `;
        let infoBtns = document.querySelectorAll(".learn-more");
        infoBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                Swal.fire({
                  title: data.name,
                  text: `${data.address?.street}, ${data.address?.suite}`,
                  footer: data.phone,
                });
              });
          });
        });
      });
    });
});

clearAll.addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure to delete All?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      tBody.innerHTML = "";
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
});
