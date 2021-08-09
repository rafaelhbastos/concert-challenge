import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API = `${environment.API}/users`;
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<User[]>(this.API);
  }

  create(user: User) {
    return this.httpClient.post(this.API, user).pipe(take(1));
  }

  loadById(id: number) {
    return this.httpClient.get<User>(`${this.API}/${id}`).pipe(take(1));
  }

  update(user: User) {
    return this.httpClient.put(`${this.API}/${user.id}`, user).pipe(take(1));
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
