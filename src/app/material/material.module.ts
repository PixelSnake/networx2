import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatToolbarModule, MatMenuModule, MatListModule,
  MatButtonToggleModule, MatSelectModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule
  ]
})
export class MaterialModule { }
