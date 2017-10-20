import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @ViewChild('iconNameContainer')
  iconNameContainer

  constructor() { }

  ngOnInit() {
  }

  get class() {
    return `icon mdi mdi-${this.iconNameContainer.nativeElement.innerText.trim()}`
  }

}
