import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../pages/user/user';
import { UserService } from '../pages/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolverGuard implements Resolve<User> {
  constructor(private service: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }

    return of({
      id: null,
      name: null,
      email: null,
      birth: null,
      city: null,
      develop: null,
      react: false,
      node: false,
      angular: false,
      vue: false,
      gender: null,
    });
  }
}
