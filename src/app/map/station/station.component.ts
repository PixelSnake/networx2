import {Component, HostBinding, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Station} from "../models/station.interface";
import {Position} from "../models/position.interface";
import {SelectionService} from "../services/selection/selection.service";
import {Selectable} from "../models/selectable.interface";
import {StationLabelComponent} from "../station-label/station-label.component";

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit, Selectable {

  selected: boolean

  @ViewChild('label')
  label: StationLabelComponent

  @Input()
  station: Station

  constructor(private selection: SelectionService) {
    selection.registerSelectable(this)
  }

  ngOnInit() {
  }

  mouseDown() {
    this.selection.setSelected(this)
  }

  mouseMoved(p: Position) {
    this.station.position.x += p.x
    this.station.position.y += p.y
  }

  onSelected(): void {
    this.selected = true
    this.label.onSelected()
  }

  onDeselected(): void {
    this.selected = false
    this.label.onDeselected()
  }

}
