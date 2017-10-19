import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatToolbarModule, MatMenuModule, MatListModule,
  MatButtonToggleModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule
  ]
})
export class MaterialModule { }
