import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SucceedComponent } from './components/succeed/succeed.component';
import { UserComponent } from './pages/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { LocalComponent } from './pages/local/local.component';
import { ButtonComponent } from './components/button/button.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    UserComponent,
    CreateUserComponent,
    EditUserComponent,
    HomeComponent,
    LocalComponent,
    SideBarComponent,
    ButtonComponent,
    UserFormComponent,
    SucceedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { 
}
