import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  Page: string = 'User';
  textButton: string = 'Novo Usuário';
  buttonWidth: string = '150px';

  constructor() { }

  ngOnInit(): void {
  }

}
