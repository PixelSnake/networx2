import { Injectable } from '@angular/core';
import {Connection} from "./connection.interface";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ConnectionService {

  private counter = 0
  private connections: Connection[] = []
  connections$: Subject<Connection[]> = new Subject()

  constructor() { }

  addConnection(c: Connection) {
    this.connections.push(c)
    this.connections$.next(this.connections)
  }

  removeConnection(c: Connection) {
    const ids = this.connections.map(x => x.id)
    const i = ids.indexOf(c.id)
    this.connections.splice(i, 1)
    this.connections$.next(this.connections)
  }

}
