import { Component, OnInit } from '@angular/core';
import {SelectionService} from "../../map/services/selection/selection.service";
import {Selectable} from "../../map/models/selectable.interface";
import {StationComponent} from "../../map/station/station.component";

@Component({
  selector: 'app-attribute-editor',
  templateUrl: './attribute-editor.component.html',
  styleUrls: ['./attribute-editor.component.scss']
})
export class AttributeEditorComponent implements OnInit {

  selected: Selectable[] = []

  constructor(private selection: SelectionService) {
    selection.selected$.subscribe(s => this.selected = s)
  }

  ngOnInit() {
  }

  get selectedStations() {
    return this.selected
      .filter(s => s instanceof StationComponent)
      .map(s => ((s as StationComponent).station))
  }

}
