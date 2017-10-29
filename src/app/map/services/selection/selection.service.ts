import { Injectable } from '@angular/core'
import {Selectable} from '../../models/selectable.interface'
import {ToolService} from "../tool/tool.service";

@Injectable()
export class SelectionService {

  private tool: string

  private selectables: Selectable[] = []
  private selected: Selectable[] = []

  constructor(private toolService: ToolService) {
    toolService.selectedTool$.subscribe(t => this.tool = t)
  }

  registerSelectable(s: Selectable) {
    this.selectables.push(s)
  }

  clear() {
    this.selected.forEach(s => s.onDeselected())
    this.selected = []
  }

  setSelected(s: Selectable) {
    if (!this.tool || this.tool === 'select') {
      s.onSelected()
      this.selected.push(s)
    }
  }

}
