import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UiModule} from "./ui/ui.module";
import {MapModule} from "./map/map.module";
import {SuiModule} from "ng2-semantic-ui";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SuiModule,
    UiModule,
    MapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
