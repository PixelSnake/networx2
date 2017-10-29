import {Component, HostBinding, HostListener, Input, OnInit, ViewChild} from '@angular/core'
import {Station} from '../models/station.interface'
import {Position} from '../models/position.interface'
import {SelectionService} from '../services/selection/selection.service'
import {Selectable} from '../models/selectable.interface'
import {StationLabelComponent} from '../station-label/station-label.component'
import {ToolService} from "../services/tool/tool.service";
import {ConnectionService} from "../services/connection/connection.service";

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit, Selectable {

  tool: string
  @ViewChild('label')
  label: StationLabelComponent

  @Input()
  station: Station

  constructor(private selection: SelectionService,
              private toolService: ToolService,
              private connectionService: ConnectionService) {
    selection.registerSelectable(this)
    toolService.selectedTool$.subscribe(t => this.tool = t)
  }

  ngOnInit() {
  }

  mouseDown() {
    switch (this.tool) {
      default:
        this.selection.setSelected(this)
        break

      case 'connection_create':
        this.connectionService.addStation(this.station)
        break
    }
  }

  mouseMoved(p: Position) {
    this.station.position.x += p.x
    this.station.position.y += p.y
  }

  onSelected(): void {
    this.station.selected = true
    this.label.onSelected()
  }

  onDeselected(): void {
    this.station.selected = false
    this.label.onDeselected()
  }

}
