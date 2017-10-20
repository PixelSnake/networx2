import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  active = false

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.active = !this.active
  }

}
