import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass']
})
export class CreateUserComponent implements OnInit {
  Page: string = 'User';
  ButtonContent: string = 'Cadastrar';
  
  constructor() { }

  ngOnInit(): void {
  }

}
