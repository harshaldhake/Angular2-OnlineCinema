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

  private galaxyMarkers: Marker[] = [
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
  private cgvMarkers: Marker[] = [
    {
      name: "CGV HÙNG VƯƠNG PLAZA - Tầng 7 | Hùng Vương Plaza 126 Hùng Vương Quận 5 Tp. Hồ Chí Minh",
      lat: 10.7557866,
      lng: 106.6608583,
      draggable: false,
      iconUrl: "http://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
    },
    {
      name: "CGV CRESCENT MALL - Lầu 5, Crescent Mall Đại lộ Nguyễn Văn Linh, Phú Mỹ Hưng Quận 7 TP. Hồ Chí Minh",
      lat: 10.72907,
      lng: 106.7167563,
      draggable: false,
      iconUrl: "http://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
    },
    {
      name: "CGV THẢO ĐIỀN PEARL - Tầng 2, Thảo Điền Mall, 12 Quốc Hương, Phường Thảo Điền, Quận 2, TP. Hồ Chí Minh",
      lat: 10.8017757,
      lng: 106.730614,
      draggable: false,
      iconUrl: "http://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
    },
    {
      name: "CGV SC VIVOCITY - Lầu 5, Trung tâm thương mại SC VivoCity - 1058 Nguyễn Văn Linh, Quận 7",
      lat: 10.7301828,
      lng: 106.7016488,
      draggable: false,
      iconUrl: "http://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
    }];
  private bhdMarkers: Marker[] = [
    {
      name: "BHD STAR SATRA PHẠM HÙNG - Lầu 4, TTTM Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh, Tp.HCM",
      lat: 10.7334423,
      lng: 106.6741543,
      draggable: false,
      iconUrl: "http://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
    }, {
      name: "BHD STAR VINCOM QUANG TRUNG",
      lat: 10.8293161,
      lng: 106.6703183,
      draggable: false,
      iconUrl: "http://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
    },
    {
      name: "BHD STAR BITEXCO - Tầng 3 và 4 tòa nhà Bitexco, 2 Hải Triều, Bến Nghé, Quận 1, Hồ Chí Minh, Việt Nam",
      lat: 10.7716687,
      lng: 106.7021967,
      draggable: false,
      iconUrl: "http://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
    }, {
      name: "BHD STAR VINCOM THẢO ĐIỀN",
      lat: 10.7869852,
      lng: 106.6933852,
      draggable: false,
      iconUrl: "http://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
    },
    {
      name: "BHD STAR VINCOM LÊ VĂN VIỆT",
      lat: 10.7869842,
      lng: 106.6933851,
      draggable: false,
      iconUrl: "http://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
    },
    {
      name: "BHD STAR VINCOM 3/2",
      lat: 10.7869832,
      lng: 106.6933851,
      draggable: false,
      iconUrl: "http://hkd.com.vn/ckfinder/userfiles/images/DU%20AN/26-3.png"
    }];

  public load() {
    if (localStorage.getItem('markers_galaxy') === null ||
      localStorage.getItem('markers_galaxy') === undefined) {
      localStorage.setItem('markers_galaxy', JSON.stringify(this.galaxyMarkers));
    }
    if (localStorage.getItem('markers_cgv') === null ||
      localStorage.getItem('markers_cgv') === undefined) {
      localStorage.setItem('markers_cgv', JSON.stringify(this.cgvMarkers));
    }
    if (localStorage.getItem('markers_bhd') === null ||
      localStorage.getItem('markers_bhd') === undefined) {
      localStorage.setItem('markers_bhd', JSON.stringify(this.bhdMarkers));
    }
  }
}
