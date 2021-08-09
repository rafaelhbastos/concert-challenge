import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empty, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Local } from './local';
import { LocalService } from './local.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.sass'],
})
export class LocalComponent implements OnInit {
  Page: string = 'Local';
  textButton: string = 'Novo Local';
  buttonWidth: string = '150px';
  locals: Local[];

  locals$: Observable<Local[]>;

  constructor(
    private service: LocalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.locals$ = this.service.list();
  }

  onRefresh() {
    this.locals$ = this.service.list().pipe(
      catchError((error) => {
        alert(`Ocorreu um erro: ${error}`);
        return empty();
      })
    );
  }

  onEdit(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.activatedRoute });
  }

  onDelete(id: number) {
    this.service.delete(id).subscribe(() => this.onRefresh());
  }
}
