import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-local',
  templateUrl: './edit-local.component.html',
  styleUrls: ['./edit-local.component.sass']
})
export class EditLocalComponent implements OnInit {
  Page: string = 'Local';
  ButtonContent: string = 'Editar';

  constructor() { }

  ngOnInit(): void {
  }

}
