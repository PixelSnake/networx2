import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { MaterialModule } from './material/material.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {UiModule} from './ui/ui.module'
import {MapModule} from './map/map.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiModule,
    MapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
