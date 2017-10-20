import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatToolbarModule, MatMenuModule, MatListModule,
  MatButtonToggleModule, MatSelectModule, MatRippleModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatRippleModule
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatRippleModule
  ]
})
export class MaterialModule { }
