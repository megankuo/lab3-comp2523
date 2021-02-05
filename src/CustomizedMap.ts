import { Internship } from './Internship';
import { Student } from './Student';
export class CustomizedMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  },

  showInfo(pin: Student | Internship) {
    let infoWindow = new google.maps.InfoWindow();

    if (pin instanceof Student) {
      infoWindow.setContent(`${pin.firstName} ${pin.lastName}`);
    } else {
      infoWindow.setContent(`Welcome to ${pin.businessName}'s Internship!`);
    }
    let anchor = this.addPin(pin);
    anchor.addListener('click', () => {
      infoWindow.open(this.googleMap, anchor);
    });
  },

  addPin(pinnable: Student | Internship) {

    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: pinnable.location.latitude,
        lng: pinnable.location.longitude,
      },
    });
    return marker
  }
  // addPin(pinnable: Student | Internship) {
  //   const infoContent = pinnable instanceof Internship ? `Welcome to ${pinnable.businessName}'s Internship!` : `${pinnable.firstName} ${pinnable.lastName}`;
  //   const _this = this;
  //   const infoWindow = new google.maps.InfoWindow({
  //     content: infoContent
  //   });
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: pinnable.location.latitude,
  //       lng: pinnable.location.longitude,
  //     },
  //   }).addListener('click', function () {
  //     infoWindow.open(_this.googleMap, this);
  //   });
  // }
  // addPin(pinnable: Student | Internship) {
  //   const infoContent = pinnable instanceof Internship ?
  //     `Welcome to : ${pinnable.businessName}'s Internship` :
  //     `${pinnable.firstName} ${pinnable.firstName}`
  //   const infoWindow = new google.maps.InfoWindow({
  //     content: infoContent
  //   })

  //   const marker = new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: pinnable.location.latitude,
  //       lng: pinnable.location.longitude,
  //     },
  //   })
  //   marker.addListener('click', () => {
  //     console.log(this)
  //     infoWindow.open(this.googleMap, marker)
  //   })
  // }

}
  // addStudentMarker(student: Student) {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: student.location.latitude,
  //       lng: student.location.longitude,
  //     },
  //   });
  // }
  // addInternshipMarker(internship: Internship) {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: internship.location.latitude,
  //       lng: internship.location.longitude,
  //     },
  //   });
  // }


}
