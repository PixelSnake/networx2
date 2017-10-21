import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeEditorComponent } from './attribute-editor/attribute-editor.component';
import { StationEditorComponent } from './station-editor/station-editor.component';
import {NgSemanticModule} from "ng-semantic";

@NgModule({
  imports: [
    CommonModule,
    NgSemanticModule
  ],
  declarations: [
    AttributeEditorComponent,
    StationEditorComponent
  ],
  exports: [
    AttributeEditorComponent
  ]
})
export class AttributeEditorModule { }
