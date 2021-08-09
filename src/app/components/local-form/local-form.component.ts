import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-form',
  templateUrl: './local-form.component.html',
  styleUrls: ['./local-form.component.sass']
})
export class LocalFormComponent implements OnInit {
  @Input('btnText') buttonText: string = '';
  
  
  buttonWidth: string = "450px";

  constructor() { }

  ngOnInit(): void {
  }

}
