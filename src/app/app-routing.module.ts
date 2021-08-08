import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { LocalComponent } from './pages/local/local.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';


const routes: Routes = [
  {path: '', component: InitialPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/create', component: CreateUserComponent},
  {path: 'user/edit', component: EditUserComponent},
  {path: 'local', component: LocalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
