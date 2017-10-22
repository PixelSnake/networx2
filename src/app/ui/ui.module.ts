import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MenuBarComponent } from './menu-bar/menu-bar.component'
import {MaterialModule} from '../material/material.module'
import { ToolBarComponent } from './tool-bar/tool-bar.component'
import { IconComponent } from './icon/icon.component'
import { VerticalToolbarComponent } from './vertical-toolbar/vertical-toolbar.component'
import { ButtonDirective } from './button/button.directive'
import {MouseMotionCapturerComponent} from './mouse-motion-capturer/mouse-motion-capturer.component'
import {MapServicesModule} from "../map/services/map-services.module";
import { MenuBarTabComponent } from './menu-bar-tab/menu-bar-tab.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MapServicesModule,
    SharedModule
  ],
  declarations: [
    MenuBarComponent,
    ToolBarComponent,
    IconComponent,
    VerticalToolbarComponent,
    ButtonDirective,
    MouseMotionCapturerComponent,
    MenuBarTabComponent
  ],
  exports: [
    MenuBarComponent,
    ToolBarComponent,
    IconComponent,
    VerticalToolbarComponent,
    ButtonDirective,
    MouseMotionCapturerComponent
  ],
  providers: [
  ]
})
export class UiModule { }
