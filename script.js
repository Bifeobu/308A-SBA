fetch("https://www.colourlovers.com/api/palettes/top?numResults=20")
    .then(response => console.log(response))
    .catch(error => console.log(error));