interface Location {
    lat: number,
    lng: number
}

export default class Student {
    firstName: string
    lastName: string
    location: {
        lat: number,
        lng: number
    }
    constructor(firstName: string, lastName: string, fakeLoca: Location) {
        this.firstName = firstName
        this.lastName = lastName
        this.location = fakeLoca
    }
    get getFullName() {
        return this.firstName + this.lastName
    }
}