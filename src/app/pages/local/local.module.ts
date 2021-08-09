import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalComponent } from './local.component';
import { CreateLocalComponent } from './create-local/create-local.component';
import { EditLocalComponent } from './edit-local/edit-local.component';



@NgModule({
  declarations: [LocalComponent, CreateLocalComponent, EditLocalComponent],
  imports: [
    CommonModule
  ]
})
export class LocalModule { }
