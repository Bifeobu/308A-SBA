fetch("https://www.colourlovers.com/api/palettes/top?numResults=20")
    .then(response => response.json())
    .catch(error => console.log(error));