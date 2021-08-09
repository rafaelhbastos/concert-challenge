import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.sass']
})
export class LocalComponent implements OnInit {
  Page: string = 'Local';
  textButton: string = 'Novo Local';
  buttonWidth: string = '150px';
  constructor() { }

  ngOnInit(): void {
  }

}
