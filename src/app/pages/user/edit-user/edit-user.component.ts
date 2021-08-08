import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {
  Page: string = 'User';
  ButtonContent: string = 'Editar';

  constructor() { }

  ngOnInit(): void {
  }

}
