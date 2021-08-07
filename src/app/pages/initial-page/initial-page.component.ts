import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.sass']
})
export class InitialPageComponent implements OnInit {
  textButton: string = 'Entrar'
  buttonWidth: string = "300px"
  
  constructor() { }

  ngOnInit(): void {
  }

}
