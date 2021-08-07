import { ButtonComponent } from './../../components/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPageComponent } from './initial-page.component';

@NgModule({
  declarations: [InitialPageComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InitialPageComponent
  ]
})
export class InitialPageModule { }
