import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StationComponent } from './station/station.component'
import { MapComponent } from './map/map.component'
import {UiModule} from '../ui/ui.module'
import { StationLabelComponent } from './station-label/station-label.component'
import {NgSemanticModule} from 'ng-semantic/ng-semantic'
import {MapServicesModule} from "./services/map-services.module";

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    NgSemanticModule,
    MapServicesModule
  ],
  declarations: [
    StationComponent,
    MapComponent,
    StationLabelComponent,
  ],
  exports: [
    StationComponent,
    MapComponent
  ]
})
export class MapModule { }
