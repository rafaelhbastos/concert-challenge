import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Local } from './local';
import {delay, take} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private readonly API = `${environment.API}/locals`;
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Local[]>(this.API)
      .pipe(
        delay(2000)
      );
  }

  create(local: Local) {
    return this.httpClient.post(this.API, local).pipe(take(1));
  }

  loadById(id: number) {
    return this.httpClient.get<Local>(`${this.API}/${id}`).pipe(take(1));
  }

  update(local: Local) {
    return this.httpClient.put(`${this.API}/${local.id}`, local).pipe(take(1));
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
