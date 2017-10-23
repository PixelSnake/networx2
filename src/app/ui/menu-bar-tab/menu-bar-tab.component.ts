import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-bar-tab',
  templateUrl: './menu-bar-tab.component.html',
  styleUrls: ['./menu-bar-tab.component.scss']
})
export class MenuBarTabComponent implements OnInit {

  @Input()
  title: string
  @Input()
  changed: boolean
  @Input()
  active: boolean

  constructor() { }

  ngOnInit() {
  }

}
