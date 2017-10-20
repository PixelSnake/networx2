import {Component, HostListener, OnInit} from '@angular/core';
import {Station} from "../models/station.interface";
import {SelectionService} from "../services/selection/selection.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  stations: Station[] = [
    {
      position: { x: 100, y: 100 },
      label: {
        title: 'Station 1',
        position: { x: 0, y: 0 },
        icons: []
      }
    }
  ]

  constructor(private selection: SelectionService) { }

  ngOnInit() {
  }

  onClick() {
    this.selection.clear()
  }

}
