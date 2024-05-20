fetch("https://docs.ksoft.si/api/lyrics-api#get-lyrics")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));