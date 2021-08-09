import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { LocalComponent } from './pages/local/local.component';
import { CreateLocalComponent } from './pages/local/create-local/create-local.component';
import { EditLocalComponent } from './pages/local/edit-local/edit-local.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LocalFormComponent } from './components/local-form/local-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    HomeComponent,
    UserComponent,
    CreateUserComponent,
    EditUserComponent,
    LocalComponent,
    CreateLocalComponent,
    EditLocalComponent,
    SideBarComponent,
    ButtonComponent,
    UserFormComponent,
    LocalFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
