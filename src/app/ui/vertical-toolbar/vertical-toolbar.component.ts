import { Component, OnInit } from '@angular/core';
import {Buttons} from "./buttons";

@Component({
  selector: 'app-vertical-toolbar',
  templateUrl: './vertical-toolbar.component.html',
  styleUrls: ['./vertical-toolbar.component.scss']
})
export class VerticalToolbarComponent implements OnInit {

  buttons = Buttons
  mode: string

  constructor() { }

  ngOnInit() {
  }

  getClass(mode: string) {
    return `${this.mode === mode ? 'selected' : ''}`
  }

  selectMode(mode: string) {
    this.mode = mode
  }

}
