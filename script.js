/////////////using fetch for external data///////////////
const searchInput = document.querySelector("[data-search]");

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    
    .catch(error => {
        console.log(error)
    });

/////////////////using async and await (1st)///////////////
// fetchAlbums();

// async function fetchAlbums(){
//     try{
//         const albumName = document.getElementById("albumName").value.toLowerCase();
//         const response = await fecth("https://jsonplaceholder.typicode.com/albums");

//         // if(!response.ok){
//         //     throw new Error("Data does not exist");
//         // }

//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.error(error);
//     }
// };
// fetchAlbums();

/////////////////using async and await (2nd)///////////////
// async function fetchAlbums() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/albums");
//     const data = await response.json();
//     console.log(data);
// }

// fetchAlbums();

// function albumTitles() {
//     const albumName =
// }
