import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationComponent } from './station/station.component';
import { MapComponent } from './map/map.component';
import {UiModule} from "../ui/ui.module";

@NgModule({
  imports: [
    CommonModule,
    UiModule
  ],
  declarations: [
    StationComponent,
    MapComponent,
  ],
  exports: [
    StationComponent,
    MapComponent
  ]
})
export class MapModule { }
