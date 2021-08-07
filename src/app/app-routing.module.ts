import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { UserComponent } from './pages/user/user.component';


const routes: Routes = [
  {path: '', component: InitialPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
