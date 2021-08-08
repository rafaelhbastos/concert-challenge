import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from './initial-page.component';

@NgModule({
  declarations: [InitialPageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InitialPageComponent
  ]
})
export class InitialPageModule { }
