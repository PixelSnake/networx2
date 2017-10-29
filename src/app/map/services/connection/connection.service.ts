import { Injectable } from '@angular/core';
import {Connection} from "./connection.interface";
import {Subject} from "rxjs/Subject";
import {Station} from "../../models/station.interface";

@Injectable()
export class ConnectionService {

  private counter = 0
  private connections: Connection[] = []
  connections$: Subject<Connection[]> = new Subject()

  private stationStack: Station[] = []

  constructor() { }

  /**
   * Adds a station to the station list. If two stations are added, these two
   * get connected
   * @param {Station} s The station
   */
  addStation(s: Station) {
    this.stationStack.push(s)
    if (this.stationStack.length > 1) {
      this.connectTopTwo()
    }
  }

  private connectTopTwo() {
    const a = this.stationStack.pop()
    const b = this.stationStack.pop()

    this.addConnection({
      start: a,
      end: b
    })
  }

  addConnection(c: Connection) {
    if (!c.id) {
      c.id = this.counter++
    }
    this.connections.push(c)
    this.connections$.next(this.connections)
    console.log('connection', c)
  }

  removeConnection(c: Connection) {
    const ids = this.connections.map(x => x.id)
    const i = ids.indexOf(c.id)
    this.connections.splice(i, 1)
    this.connections$.next(this.connections)
  }

}
