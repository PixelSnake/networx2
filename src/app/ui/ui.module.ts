import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {MaterialModule} from "../material/material.module";
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import {IconComponent} from "./icon/icon.component";
import { VerticalToolbarComponent } from './vertical-toolbar/vertical-toolbar.component';
import { ButtonDirective } from './button/button.directive';

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
    ButtonDirective,
  ],
  exports: [
    MenuBarComponent,
    ToolBarComponent,
    IconComponent,
    VerticalToolbarComponent,
    ButtonDirective,
  ],
  providers: [
  ]
})
export class UiModule { }
