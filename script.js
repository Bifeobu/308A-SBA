/////////////using fetch for external data///////////////
// fetch("https://jsonplaceholder.typicode.com/albums")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
    
//     .catch(error => {
//         console.log(error)
//     });

/////////////////using async and await (1st)///////////////
// fetchAlbums();

// async function fetchAlbums(){
//     try{
//         const response = await fecth("https://jsonplaceholder.typicode.com/albums")

//         if(!response.ok){
//             throw new Error("Data does not exist");
//         }

//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.error(error);
//     }
// };

/////////////////using async and await (2nd)///////////////
async function fetchAlbums() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    console.log(data);
}

fetchAlbums();
