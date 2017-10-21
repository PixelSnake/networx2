import {Component, Input, OnInit} from '@angular/core';
import {Station} from "../../map/models/station.interface";

@Component({
  selector: 'app-station-editor',
  templateUrl: './station-editor.component.html',
  styleUrls: ['./station-editor.component.scss']
})
export class StationEditorComponent implements OnInit {

  @Input()
  stations: Station[]

  constructor() { }

  ngOnInit() {
  }

}
