export default class Student {
    firstName: string
    lastName: string
    location: {
        lat: number,
        lng: number
    }
    get getFullName() {
        return this.firstName + this.lastName
    }
}