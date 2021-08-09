import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Local } from '../pages/local/local';
import { LocalService } from '../pages/local/local.service';

@Injectable({
  providedIn: 'root',
})
export class LocalResolveGuard implements Resolve<Local> {
  constructor(private service: LocalService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Local> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }

    return of({
      id: null,
      responsable: null,
      local: null,
      opportunity: null,
      employee: null,
    });
  }
}
