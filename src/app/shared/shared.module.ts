import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileService} from "./services/file.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    FileService
  ]
})
export class SharedModule { }
