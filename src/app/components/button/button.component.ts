import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.sass'
  ]
})
export class ButtonComponent implements OnInit {
  
  @Input('value') textValue: string = '';
  @Input('btnStyle') buttonWidth: string = '';
  
  constructor() {
   }

  ngOnInit(): void {
  }

}
