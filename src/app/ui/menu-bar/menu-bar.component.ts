import { Component, OnInit } from '@angular/core'
import {FileService} from "../../shared/services/file.service";
import {File} from "../../shared/models/file.interface";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  files: File[]

  constructor(fileService: FileService) {
    fileService.files$.subscribe(f => this.files = f)
  }

  ngOnInit() {
  }

}
