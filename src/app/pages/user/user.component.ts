import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empty, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserComponent implements OnInit {
  Page: string = 'User';
  textButton: string = 'Novo Usuário';
  buttonWidth: string = '150px';
  users: User[];

  users$: Observable<User[]>;

  constructor(
    private service: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.users$ = this.service.list();
  }

  onRefresh() {
    this.users$ = this.service
      .list()
      .pipe(catchError((error) => {
        alert(`Ocorreu um erro: ${error}`)
        return empty()
      }));
  }

  onEdit(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.activatedRoute });
  }

  onDelete(id: number) {
    this.service.delete(id).subscribe(() => this.onRefresh());
  }
}
