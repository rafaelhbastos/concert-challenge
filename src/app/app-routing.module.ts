import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { LocalComponent } from './pages/local/local.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { UserResolverGuard } from './guards/user-resolver.guard';
import { CreateLocalComponent } from './pages/local/create-local/create-local.component';
import { EditLocalComponent } from './pages/local/edit-local/edit-local.component';
import { LocalResolveGuard } from './guards/local-resolver.guard';

const routes: Routes = [
  { path: '', component: InitialPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  {
    path: 'user/create',
    component: CreateUserComponent,
    resolve: {
      user: UserResolverGuard,
    },
  },
  {
    path: 'user/edit/:id',
    component: EditUserComponent,
    resolve: {
      user: UserResolverGuard,
    },
  },
  { path: 'local', component: LocalComponent },
  {
    path: 'local/create',
    component: CreateLocalComponent,
    resolve: {
      local: LocalResolveGuard,
    },
  },
  {
    path: 'local/edit/:id',
    component: EditLocalComponent,
    resolve: {
      local: LocalResolveGuard,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
