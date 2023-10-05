
function calculateTravelDuration(departureDate, returnDate) {
  const oneDay = 24 * 60 * 60 * 1000; 
  const departureTimestamp = new Date(departureDate).getTime();
  const returnTimestamp = new Date(returnDate).getTime();
  const diffDays = Math.round(Math.abs((returnTimestamp - departureTimestamp) / oneDay));
  return diffDays;
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const from = document.getElementById("From").value;
    const to = document.getElementById("To").value;
    const departureDate = document.getElementById("departure").value;
    const returnDate = document.getElementById("return").value;
    const passengers = document.getElementById("passengers").value;

  
    const travelDuration = calculateTravelDuration(departureDate, returnDate);

   
    console.log(`Travel duration: ${travelDuration} days`);
  });
});

var myLatLng = {lat: 31.147129, lng:75.341217};
var mapOptions = {
  center: myLatLng,
  zoom:7,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map= new google.maps.Map(document.getElementById("googleMap"), mapOptions);

var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();
directionsDisplay.setMap(map);

function calcRoute(){
  var request = {
    origin: document.getElementById("From").value,
    destination: document.getElementById("To").value,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.IMPERIAL
  }
  directionsService.route(request,(result, status)=>{
    if(status == google.maps.DirectionsStatus.OK) {
      const output = document.querySelector('#output');
      output.innerHTML = "<div class='alert-info'> From: " + document.getElementById("From").value + ".<br />To: " + document.getElementById("To").value + ".<br /> Driving distance:" + result.routes[0].legs[0].distance.text + ".<br />Duration: " + result.routes[0].legs[0].duration.text + ".</div";

      directionsDisplay.setDirections(result);
  
    }
    else{
      directionsDisplay.setDirections({routes: []});
      map.setCenter(myLatLng);
      output.innerHTML = "<div class='alert-danger'>Could not retrieve driving distance.</div>";
    }
  });
}
var options = {
  types: ['(cities)']

}
var input1 = document.getElementById("From");
var autocomplete1 = new google.maps.places.Autocomplete(input1,options)
var input2 = document.getElementById("To");
var autocomplete2 = new google.maps.places.Autocomplete(input2,options)
