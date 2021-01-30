//import
import Student from './student'
import Internship from './internship'
import faker, { fake } from 'faker'
import internshipContent from './internshipContent'


console.log('this is working')

console.log(google)

let map;

function initMap() {
    console.log(document.getElementById("map"))
    
    const studentOne = new Student(faker.name.firstName(), faker.name.lastName(), { lat: Number(faker.address.latitude()), lng: Number(faker.address.longitude())})
    const intershipOne = new Internship(faker.company.companyName(), { lat: Number(faker.address.latitude()), lng: Number(faker.address.longitude())})
    map = new google.maps.Map(document.getElementById("map"), {
        center: intershipOne.location,
        zoom: 8,
    });
    const studentOnePos = new google.maps.Marker({
        position: studentOne.location,
        map: map,
    });    
    const intershipOnePos = new google.maps.Marker({
        position: intershipOne.location,
        map: map,
    });
    
    console.log(internshipContent)
    const infoWindow = new google.maps.InfoWindow({
        content: internshipContent
    })

    intershipOnePos.addListener('click', () => {
        console.log('click!!!!!')
        infoWindow.open(map, intershipOnePos)
    })
}

initMap()
