let city = "Sacramento";
//let state = "CA";
let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=ba3476e23f33fcbced7a77c27b3df244";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
console.log(response);

});

