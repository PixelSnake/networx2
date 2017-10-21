import { Component, OnInit } from '@angular/core'
import {Buttons} from './buttons'
import {ToolService} from "../../map/services/tool/tool.service";

@Component({
  selector: 'app-vertical-toolbar',
  templateUrl: './vertical-toolbar.component.html',
  styleUrls: ['./vertical-toolbar.component.scss']
})
export class VerticalToolbarComponent implements OnInit {

  buttons = Buttons
  mode: string

  constructor(private tool: ToolService) {
    tool.selectedTool$.subscribe(t => this.mode = t)
    tool.selectTool('select')
  }

  ngOnInit() {
  }

  selectMode(mode: string) {
    this.tool.selectTool(mode)
  }

}
