import {Component, Input, OnInit} from '@angular/core'
import {StationLabel} from '../models/station-label.interface'
import {Selectable} from '../models/selectable.interface'
import {Position} from '../models/position.interface'

@Component({
  selector: 'app-station-label',
  templateUrl: './station-label.component.html',
  styleUrls: ['./station-label.component.scss']
})
export class StationLabelComponent implements OnInit, Selectable {

  selected = false

  @Input()
  label: StationLabel

  constructor() { }

  ngOnInit() {
  }

  onSelected(): void {
    this.selected = true
  }

  onDeselected(): void {
    this.selected = false
  }

  mouseMoved(p: Position) {
    this.label.position.x += p.x
    this.label.position.y += p.y
  }

}
