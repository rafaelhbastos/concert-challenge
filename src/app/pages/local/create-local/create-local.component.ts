import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-local',
  templateUrl: './create-local.component.html',
  styleUrls: ['./create-local.component.sass']
})
export class CreateLocalComponent implements OnInit {
  Page: string = 'Local';
  ButtonContent: string = 'Cadastrar';

  constructor() { }

  ngOnInit(): void {
  }

}
