import { Injectable } from '@angular/core'
import {Selectable} from '../../models/selectable.interface'
import {Subject} from "rxjs/Subject";

@Injectable()
export class SelectionService {

  selected$: Subject<Selectable[]> = new Subject()

  private selectables: Selectable[] = []
  private selected: Selectable[] = []

  constructor() { }

  registerSelectable(s: Selectable) {
    this.selectables.push(s)
  }

  clear() {
    this.selected.forEach(s => s.onDeselected())
    this.selected = []
    this.selected$.next(this.selected)
  }

  setSelected(s: Selectable) {
    s.onSelected()
    this.selected.push(s)
    this.selected$.next(this.selected)
  }

}
