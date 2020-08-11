let city = "Sacramento";
//let state = "CA";
let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=ba3476e23f33fcbced7a77c27b3df244";



//searchBtn function
$("#searchBtn").click(function(event) { 
    event.preventDefault();
    let searchInput = $("#searchInput"); 
    let searchCity = $(this).siblings(searchInput).val();
    localStorage.setItem(searchCity, JSON.stringify(searchInput));
    console.log(searchCity);
})

//End searchBtn function

if ($("#searchBtn").click() === true) {
    let newBtns = $("#newBtns");
    $("<ul>").appendTo(newBtns);
    $("<ul>").addClass("searchList");
    $("<button>").text(searchCity).prependTo($(".searchList"));
};





$.ajax({
    url: queryURL,
    method: "GET"
//begin function
}).then(function(response){
console.log(response);

//begin if statement
if (response.list == "2", "10", "18", "26", "34") {
    console.log(response.list[2].main);
}
//end if statement

});
//end function


//whatever is in the top [global scope] will load
//8 per day for 5 day for loop
//if dt_txt = 15:00 00
//add new value to create new buttons
//add event listener as container
//the target is event.target
//if statement for when someone comes to page for the first time

