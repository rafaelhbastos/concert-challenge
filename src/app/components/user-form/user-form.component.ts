import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})

export class UserFormComponent implements OnInit {
  @Input('btnText') buttonText: string = '';
  
  
  buttonWidth: string = "450px";

  constructor() { }

  ngOnInit(): void {
  }

}
