import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Station} from "../models/station.interface";
import {Position} from "../models/position.interface";

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {

  @Input()
  station: Station

  constructor() { }

  ngOnInit() {
  }

  mouseMoved(p: Position) {
    this.station.position.x += p.x
    this.station.position.y += p.y
  }

}
