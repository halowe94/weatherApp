//global variable to push outputs
let cityGlobal = [];

let temperature = $("#temp");
let humidity = $("#humidity");
let windSpeed = $("#wind");
let uvIndex = $("#uvIndex");

//searchBtn function
$("#searchBtn").click(function(event) { 
    event.preventDefault();
    let searchInput = $("#searchInput"); 
    let searchCity = $(this).siblings(searchInput).val();
    localStorage.setItem(searchCity, JSON.stringify(searchInput));
    //console.log(searchCity);

    //populate new buttons
    let newBtns = $("#newBtns");
    let searchList = $("<ul>")
    searchList.addClass("searchList");
    searchList.appendTo(newBtns);
    $("<button>").text(searchCity).prependTo(searchList);

    cityGlobal.push(searchCity);
    //console.log(cityGlobal);
    cityFunction(cityGlobal);
});


//End searchBtn function

//retrieve from local storage
function cityFunction(cityGlobal){
    let city = cityGlobal[0];
    
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=ba3476e23f33fcbced7a77c27b3df244";
    $.ajax({
        url: queryURL,
        method: "GET"
    // //begin function
    }).then(function(response){
    console.log(response);
    
    let dayOne = response.list[2].main.temp;
    console.log(dayOne);
    let dayOneDate = response.list[2].dt_txt;
    $("#day1").append(dayOneDate + " " + dayOne);

    let dayTwo = response.list[10].main.temp;
    console.log(dayTwo);
    let dayTwoDate = response.list[10].dt_txt;
    $("#day2").append(dayTwo + " " + dayTwoDate);

    let dayThree = response.list[18].main.temp;
    console.log(dayThree);
    let dayThreeDate = response.list[18].dt_txt;
    $("#day3").append(dayThree + " " + dayThreeDate);

    let dayFour = response.list[26].main.temp;
    console.log(dayFour);
    let dayFourDate = response.list[26].dt_txt;
    $("#day4").append(dayFour + " " + dayFourDate);

    let dayFive = response.list[34].main.temp;
    console.log(dayFive);
    let dayFiveDate = response.list[34].dt_txt;
    $("#day5").append(dayFive + " " + dayFiveDate);

    let cityName = response.city.name;
    let todaysDate = moment().format('MMMM Do YYYY');
    let iconHeader = response.list[0].weather[0].icon;

    //console.log(iconHeader);
    $("#cityHeader").append(cityName + " " + "(" + todaysDate + ")");

//begin if statement
    //let today = repsonse.list[2].main;

    //if (today = date + " " )
    //if (response.list == "2", "10", "18", "26", "34") {
        //console.log(response.list[2].main);
    //}
//end if statement

    });
}
//end function

function tempFunc(cityGlobal){
    let city = cityGlobal[0];
    let tempURL = "https://api.openweathermap.org/data/2.5/find?q=" + city + "&units=imperial";
    $.ajax({
        url: tempURL,
        method: "GET"
    // //begin function
    }).then(function(response){
    console.log(response);

    });
};

function generateWeather() {
    cityFunction();
    tempFunc();
};

//whatever is in the top [global scope] will load
//8 per day for 5 day for loop
//if dt_txt = 15:00 00
//add new value to create new buttons
//add event listener as container
//the target is event.target
//if statement for when someone comes to page for the first time

