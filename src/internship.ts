interface Location {
    lat: number,
    lng : number
}

export default class Intership {
    businessName: string
    location: {
        lat: number,
        lng: number
    }
    constructor(fakeBusiName: string, fakeLoca: Location) {
        this.businessName = fakeBusiName
        this.location = fakeLoca
    }
}