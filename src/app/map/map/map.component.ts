import { Component, OnInit } from '@angular/core';
import {Station} from "../models/station.interface";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  stations: Station[] = [
    {
      position: { x: 100, y: 100 }
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
