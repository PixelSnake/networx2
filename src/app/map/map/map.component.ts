import {Component, HostListener, OnInit} from '@angular/core'
import {Station} from '../models/station.interface'
import {SelectionService} from '../services/selection/selection.service'
import {ToolService} from "../services/tool/tool.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  selectedTool: string

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

  constructor(private selection: SelectionService, private tool: ToolService) {
    tool.selectedTool$.subscribe(t => this.selectedTool = t)
  }

  ngOnInit() {
  }

  onClick(event: MouseEvent) {
    switch (this.selectedTool) {
      default:
        this.selection.clear()
        break

      case 'station_create':
        this.stations.push({
          position: {
            x: event.offsetX,
            y: event.offsetY
          },
          label: {
            title: `Station ${this.stations.length + 1}`,
            position: { x: 0, y: 0},
            icons: []
          }
        })
        break
    }
  }

}
