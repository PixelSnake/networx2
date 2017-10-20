import { Injectable } from '@angular/core';
import {Selectable} from "../../models/selectable.interface";

@Injectable()
export class SelectionService {

  private selectables: Selectable[] = []
  private selected: Selectable[] = []

  constructor() { }

  registerSelectable(s: Selectable) {
    this.selectables.push(s)
  }

  clear() {
    this.selected.forEach(s => s.onDeselected())
    this.selected = []
  }

  setSelected(s: Selectable) {
    s.onSelected()
    this.selected.push(s)
  }

}
