import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolService} from "./tool/tool.service";
import {SelectionService} from "./selection/selection.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    SelectionService,
    ToolService
  ]
})
export class MapServicesModule { }
