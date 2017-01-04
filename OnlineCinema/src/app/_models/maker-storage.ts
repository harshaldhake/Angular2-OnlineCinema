/**
 * Created by Phuc-Hau Nguyen on 1/4/2017.
 */

export class Marker {

  constructor(public name: string,
              public lat: number,
              public lng: number,
              public draggable: boolean,
              public iconUrl: string) {
  }
}

export class MarkerStorage {

  public load() {
    if (localStorage.getItem('markers') === null ||
      localStorage.getItem('markers') === undefined) {
      console.log('No markers found ... creating');
      let markers: Marker[] = [
        {
          name: "Galaxy Tân Bình",
          lat: 10.790238,
          lng: 106.640733,
          draggable: false,
          iconUrl: "http://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
        },
        {
          name: "Galaxy Nguyễn Du",
          lat: 10.773226,
          lng: 106.692945,
          draggable: false,
          iconUrl: "http://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
        }
      ];
      localStorage.setItem('markers', JSON.stringify(markers));
    }
    else {
      console.log('Loading markers...');
    }
  }
}
