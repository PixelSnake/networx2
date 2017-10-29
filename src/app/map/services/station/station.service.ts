import { Injectable } from '@angular/core';
import {Station} from "../../models/station.interface";
import {Subject} from "rxjs/Subject";

@Injectable()
export class StationService {

  private counter = 0
  private stations: Station[] = []
  stations$: Subject<Station[]> = new Subject()

  constructor() { }

  addStation(s: Station) {
    this.stations.push({
      id: this.counter++,
      ...s
    })
    this.stations$.next(this.stations)
  }

  removeStation(s: Station) {
    const ids = this.stations.map(x => s.id)
    const i = ids.indexOf(s.id)
    this.stations.splice(i, 1)
    this.stations$.next(this.stations)
  }

  get stationCount(): number {
    return this.stations.length
  }

}
