var cityList =$("#city-list");
var cities = [];
var key = "a4c4eca36ff9c16ac0c0487467c55f2c"

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

    $.ajax({
        url: "http://www.openweathermap.org",
        method: "GET"
      }).then(function(response) {
        console.log(response);
        console.log(response.Runtime);
      });