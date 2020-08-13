//global variable to push outputs
let cityGlobal = [];

let temperture = $("#temp");
let humidity = $("#humidity");
let windSpeed = $("#wind");
let uvIndex = $("#uvIndex");

//searchBtn function
$("#searchBtn").click(function(event) { 
    event.preventDefault();
    let searchInput = $("#searchInput"); 
    let searchCity = $(this).siblings(searchInput).val();
    localStorage.setItem(searchCity, JSON.stringify(searchInput));
    console.log(searchCity);

    //populate new buttons
    let newBtns = $("#newBtns");
    let searchList = $("<ul>")
    searchList.addClass("searchList");
    searchList.appendTo(newBtns);
    $("<button>").text(searchCity).prependTo(searchList);

    cityGlobal.push(searchCity);
    console.log(cityGlobal);
})


//End searchBtn function

//retrieve from local storage
function cityFunction(){
    let city = cityGlobal[0].val();
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=ba3476e23f33fcbced7a77c27b3df244";
    $.ajax({
        url: queryURL,
        method: "GET"
    // //begin function
    }).then(function(response){
    console.log(response);

//begin if statement
    if (response.list == "2", "10", "18", "26", "34") {
        console.log(response.list[2].main);
    }
//end if statement

    });
}
//end function

function generateWeather() {
    cityFunction();
};


//whatever is in the top [global scope] will load
//8 per day for 5 day for loop
//if dt_txt = 15:00 00
//add new value to create new buttons
//add event listener as container
//the target is event.target
//if statement for when someone comes to page for the first time

