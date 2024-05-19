fetch("https://www.colourlovers.com/api/palettes/top?numResults=20")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));