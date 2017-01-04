/**
 * Created by Phuc-Hau Nguyen on 1/4/2017.
 */

import {Injectable} from '@angular/core'
import {MarkerStorage} from '../_models/maker-storage'

@Injectable()
export class MarkerService extends MarkerStorage {
  constructor() {
    super();
    console.log('MarkerService Initialized... ');
    this.load();
  }

  public getMarkers() {
    return JSON.parse(localStorage.getItem('markers'));
  }
}

