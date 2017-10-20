import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {MaterialModule} from "../material/material.module";
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { IconComponent } from "./icon/icon.component";
import { VerticalToolbarComponent } from './vertical-toolbar/vertical-toolbar.component';
import { ButtonDirective } from './button/button.directive';
import { DropdownComponent } from "./dropdown/dropdown.component";

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
    DropdownComponent
  ],
  exports: [
    MenuBarComponent,
    ToolBarComponent,
    IconComponent,
    VerticalToolbarComponent,
    ButtonDirective,
    DropdownComponent
  ],
  providers: [
  ]
})
export class UiModule { }