import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolService} from "./tool/tool.service";
import {SelectionService} from "./selection/selection.service";
import {StationService} from "./station/station.service";
import {ConnectionService} from "./connection/connection.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    SelectionService,
    ToolService,
    StationService,
    ConnectionService
  ]
})
export class MapServicesModule { }
