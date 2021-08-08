import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  declarations: [UserComponent, CreateUserComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
