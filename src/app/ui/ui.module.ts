import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {MaterialModule} from "../material/material.module";
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import {IconComponent} from "./icon/icon.component";
import { VerticalToolbarComponent } from './vertical-toolbar/vertical-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    MenuBarComponent,
    ToolBarComponent,
    IconComponent,
    VerticalToolbarComponent,
  ],
  exports: [
    MenuBarComponent,
    ToolBarComponent,
    IconComponent,
    VerticalToolbarComponent
  ],
  providers: [
  ]
})
export class UiModule { }
