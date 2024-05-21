fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    
    // .catch(error => console.log(error));
