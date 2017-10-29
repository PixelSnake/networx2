import {Component, HostListener, OnDestroy, OnInit} from '@angular/core'
import {Station} from '../models/station.interface'
import {SelectionService} from '../services/selection/selection.service'
import {ToolService} from "../services/tool/tool.service";
import {StationService} from "../services/station/station.service";
import {Observable} from "rxjs/Observable";
import {ConnectionService} from "../services/connection/connection.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  selectedTool: string
  stations: Observable<Station[]>

  constructor(private selection: SelectionService,
              private tool: ToolService,
              private stationService: StationService,
              private connectionService: ConnectionService) {
    tool.selectedTool$.subscribe(t => this.selectedTool = t)
    this.stations = this.stationService.stations$
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.tool.selectedTool$.unsubscribe()
  }

  onClick(event: MouseEvent) {
    switch (this.selectedTool) {
      default:
        this.selection.clear()
        this.connectionService.clearStack()
        break

      case 'station_create':
        this.stationService.addStation({
          position: {
            x: event.offsetX,
            y: event.offsetY
          },
          label: {
            title: `Station ${this.stationService.stationCount + 1}`,
            position: { x: 0, y: 0},
            icons: []
          }
        })
        break
    }
  }

}
