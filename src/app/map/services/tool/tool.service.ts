import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class ToolService {

  selectedTool$: Subject<string> = new Subject()

  constructor() {}

  selectTool(t: string) {
    this.selectedTool$.next(t)
  }

}
