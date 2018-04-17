// var x = document.getElementById("icon");

$(document).ready(function() {

  var url = "https://fcc-weather-api.glitch.me/api/current?";
  // var json = $('h3');
  var tempC = 0;
  var tempF = 32;
  var degree = 'C';
  var urlFull;

  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=54.7208142&lon=25.2483401", function(json) {
    // $("#icon").html(JSON.stringify(json)); // Kitaip neprintina...
    // console.log(Object.values(json));
    tempC = json.main.temp;
    console.log(tempC);
    tempF = tempC * 9 / 5 + 32;
    console.log(tempF);
  });

  $('#cf').click(function() {
    var body = $('#body');
    console.log(body.background);
    $('#body').background = "red";
    // $('#temp').style.transition = "1s";
    if (degree == 'C') {
      $('#cf').html('&deg;F');
      $('#temp').html(tempF);
      degree = 'F';
    } else {
      $('#cf').html('&deg;C');
      $('#temp').html(tempC);
      degree = 'C';
    };
  });

  // $('#cf').click(function() {
  //   $.ajax({
  //     url: urlFull,
  //     success: function(data) {
  //       $.each(data, function(index, item) {
  //         $.each(item, function(key, value) {
  //           json.append(key + ': ' + value);
  //         });
  //         json.append('<br><br>');
  //       });
  //     }
  //   });
  // });

  function getWeather(lat, lon) {
    urlFull = url + "lat=" + lat + "&lon=" + lon; // Example
    //console.log(urlFull);
    $.ajax({
      url: urlFull,
      // data: {
      //   lat: lat,
      //   lon: lon
      // },
      success: function(response) {
        $('#icon').html('<img src="' + response.weather[0].icon + '">');
        // console.log("<img src=\"" + response.weather[0].icon + "\">"); // Example
        // $("#icon").html('<img src="' + response.weather[0].icon + '">');
        // console.log(Object.keys(response).length); // JSON length
        // tempC = response.main.temp;
        // console.log(tempC);
        $("#temp").html(response.main.temp);
        // $("#icon").text(JSON.stringify(response));
        // $("#icon").html(response.weather[0].icon);
        $("#location").html(response.name + ", " + response.sys.country);
        $("#weather").html(response.weather[0].main);
        $("#humidity").html(response.main.humidity + " %");
        $("#windSpeed").html(response.wind.speed + " m/s");
      }
    });
  };

  // console.log($('#temp').value);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lon = position.coords.longitude;
      var lat = position.coords.latitude;
      // $("#geo").html("latitude: " + lat + "<br>longitude: " + lon); // Example
      getWeather(lat, lon);
    });
  };

  // console.log(tempC);
  // var tempF = tempC * 9 / 5 + 32;
  // console.log(tempF);

  // var degree = 'C';
  // var e = document.getElementById('#cf');
  // var tempC = e.options[e.selectedIndex].value;
  // var tempF = e.options[e.selectedIndex].text;
  // console.log(tempC);

  // $('#cf').on('click', function() {
  //   var degree = 'C';
  //   var e = document.getElementById('#cf');
  //   var tempC = e.options[e.selectedIndex].value;
  //   var tempF = e.options[e.selectedIndex].text;
  //   console.log(tempC);


});

  // console.log($('#cf').text());

// $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=54.7208142&lon=25.2483401", function(json) {
//   $("#icon").html(JSON.stringify(json)); // Kitaip neprintina...
//   console.log(Object.values(json));
//
//   for (var key in response) { // VEIKIA
//     if (response.hasOwnProperty(key)) {
//       console.log(key + " : " + response[key]);
//     }
//   };
//
//   Object.keys(response).forEach(key => { // BISK VEIKIA
//       console.log(response[key]);
//     });
//
//   var html = "";
//   Object.keys(response).forEach(function(key) {
//     var keys = Object.keys(key);
//     console.log(Object.keys(key));
//     console.log("<div>");
//     keys.forEach(function(key) {
//       console.log(key + " : " + response[key]);
//     });
//     console.log("</div>")
//   });
// });

// function convert(degree) {
//   var x;
//   if (degree == "C") {
//     x = document.getElementById("temp").value * 9 / 5 + 32;
//     console.log(int(document.getElementById("temp").value));
//     document.getElementById("temp").value = Math.round(x);
//   } else {
//     x = (document.getElementById("temp").value - 32) * 5 / 9;
//     console.log(Math.round(x));
//     document.getElementById("temp").value = Math.round(x);
//   }
// };
