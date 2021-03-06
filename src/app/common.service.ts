import { Injectable } from '@angular/core';
import * as data from './data.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //  data =  {
  //   "_id": "enlite-ho",
  //   "timestamp": 1613558618441,
  //   "buildingName": "Enlite HO",
  //   "Floor": "F5",
  //   "zones": [
  //         {
  //           "_id": "Bay1",
  //           "name": "Reception Area",
  //           "comfortData": {
  //             "temp": {
  //               "value": 23.356458799478226,
  //               "quality": {
  //                 "value": "Good",
  //                 "alert": {
  //                   "value": "",
  //                   "_t": "temp"
  //                 }
  //               }
  //             },
  //             "rh": {
  //               "value": 46.16264953074789,
  //               "quality": {
  //                 "value": "Excellent",
  //                 "alert": {
  //                   "value": "",
  //                   "_t": "rh"
  //                 }
  //               }
  //             },
  //             "ambient": {
  //               "value": 398.6679373067646,
  //               "quality": {
  //                 "value": "Poor",
  //                 "alert": {
  //                   "value": "",
  //                   "_t": "ambient"
  //                 }
  //               }
  //             },
  //             "sound": {
  //               "value": 44.61874744475661,
  //               "quality": {
  //                 "value": "Good",
  //                 "alert": {
  //                   "value": "",
  //                   "_t": "sound"
  //                 }
  //               }
  //             },
  //             "tvoc": {
  //               "value": 0.1,
  //               "quality": {
  //                 "value": "Good",
  //                 "alert": {
  //                   "value": "",
  //                   "_t": "tvoc"
  //                 }
  //               }
  //             },
  //             "airQuality": {
  //               "value": 0.3,
  //               "quality": {
  //                 "value": "Fair",
  //                 "alert": {
  //                   "value": "Moderate pollution",
  //                   "_t": "airQuality"
  //                 }
  //               }
  //             },
  //             "co2": {
  //               "value": 1926.82372443091,
  //               "quality": {
  //                 "value": "Inadequate",
  //                 "alert": {
  //                   "value": "",
  //                   "_t": "co2"
  //                 }
  //               }
  //             }
  //           },
  //           "comfortValue": 78,
  //           "alerts": [
  //             {
  //               "value": "Moderate pollution",
  //               "_t": "airQuality"
  //             }
  //           ],
  //           "graph": [
  //             {
  //               "x": "2021-02-15",
  //               "y": 75
  //             },
  //             {
  //               "x": "2021-02-16",
  //               "y": 80
  //             },
  //             {
  //               "x": "2021-02-17",
  //               "y": 78
  //             }
  //           ]
  //         },
  //         {
  //           "_id": "Bay2",
  //           "name": "Bay 2",
  //           "comfortData": {
  //             "temp": {
  //               "value": 21.189971016754658,
  //               "quality": {
  //                 "value": "Excellent",
  //                 "alert": {
  //                   "value": "",
  //                   "_t": "temp"
  //                 }
  //               }
  //             },
  //             "rh": {
  //               "value": 45.296254834797125,
  //               "quality": {
  //                 "value": "Excellent",
  //                 "alert": {
  //                   "value": "",
  //                   "_t": "rh"
  //                 }
  //               }
  //             },
  //             "ambient": {
  //               "value": 434.9139618140026,
  //               "quality": {
  //                 "value": "Poor",
  //                 "alert": {
  //                   "value": "",
  //                   "_t": "ambient"
  //                 }
  //               }
  //             },
  //             "sound": {
  //               "value": 34.39497209436487,
  //               "quality": {
  //                 "value": "Excellent",
  //                 "alert": {
  //                   "value": "",
  //                   "_t": "sound"
  //                 }
  //               }
  //             },
  //             "tvoc": {
  //               "value": 0.1,
  //               "quality": {
  //                 "value": "Good",
  //                 "alert": {
  //                   "value": "",
  //                   "_t": "tvoc"
  //                 }
  //               }
  //             },
  //             "airQuality": {
  //               "value": 0.1,
  //               "quality": {
  //                 "value": "Good",
  //                 "alert": {
  //                   "value": "",
  //                   "_t": "airQuality"
  //                 }
  //               }
  //             },
  //             "co2": {
  //               "value": 1921.4432478742426,
  //               "quality": {
  //                 "value": "Inadequate",
  //                 "alert": {
  //                   "value": "",
  //                   "_t": "co2"
  //                 }
  //               }
  //             }
  //           },
  //           "comfortValue": 78,
  //           "alerts": [],
  //           "graph": [
  //             {
  //               "x": "2021-02-15",
  //               "y": 75
  //             },
  //             {
  //               "x": "2021-02-16",
  //               "y": 80
  //             },
  //             {
  //               "x": "2021-02-17",
  //               "y": 78
  //             }
  //           ]
  //         }
  //       ],
  //   "comfortData": {
  //         "temp": {
  //           "value": 24.27589139765215,
  //           "quality": {
  //             "value": "Good",
  //             "alert": {
  //               "value": "",
  //               "_t": "temp"
  //             }
  //           }
  //         },
  //         "rh": {
  //           "value": 46.16949117436012,
  //           "quality": {
  //             "value": "Excellent",
  //             "alert": {
  //               "value": "",
  //               "_t": "rh"
  //             }
  //           }
  //         },
  //         "ambient": {
  //           "value": 416.79094956038364,
  //           "quality": {
  //             "value": "Poor",
  //             "alert": {
  //               "value": "",
  //               "_t": "ambient"
  //             }
  //           }
  //         },
  //         "sound": {
  //           "value": 39.506859769560734,
  //           "quality": {
  //             "value": "Excellent",
  //             "alert": {
  //               "value": "",
  //               "_t": "sound"
  //             }
  //           }
  //         },
  //         "tvoc": {
  //           "value": 0.1,
  //           "quality": {
  //             "value": "Good",
  //             "alert": {
  //               "value": "",
  //               "_t": "tvoc"
  //             }
  //           }
  //         },
  //         "airQuality": {
  //           "value": 0.2,
  //           "quality": {
  //             "value": "Good",
  //             "alert": {
  //               "value": "",
  //               "_t": "airQuality"
  //             }
  //           }
  //         },
  //         "co2": {
  //           "value": 1924.1334861525763,
  //           "quality": {
  //             "value": "Inadequate",
  //             "alert": {
  //               "value": "",
  //               "_t": "co2"
  //             }
  //           }
  //         }
  //       }

  // }

  apiURL = 'dummyapi/getDetails';
  constructor(private http: HttpClient) { }

  fetchData() {
    let details = new Promise((resolve, reject) => {
      this.http.get(this.apiURL)
        .toPromise()
        .then(
          res => {
            data
          }
        );
    });
    return data;

  }
}
