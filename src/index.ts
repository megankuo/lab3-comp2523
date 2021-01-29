//import
import student from './student'
import internship from './internship'
import faker from 'faker'


console.log('this is working')

console.log(google)

let map;
console.log(map)

function initMap() {
    console.log(document.getElementById("map"))
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap()

console.log(faker)
