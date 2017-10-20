import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StationComponent } from './station/station.component'
import { MapComponent } from './map/map.component'
import {UiModule} from '../ui/ui.module'
import {SelectionService} from './services/selection/selection.service'
import { StationLabelComponent } from './station-label/station-label.component'
import {NgSemanticModule} from 'ng-semantic'


@NgModule({
  imports: [
    CommonModule,
    UiModule,
    NgSemanticModule
  ],
  declarations: [
    StationComponent,
    MapComponent,
    StationLabelComponent,
  ],
  exports: [
    StationComponent,
    MapComponent
  ],
  providers: [
    SelectionService
  ]
})
export class MapModule { }
