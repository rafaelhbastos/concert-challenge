
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {
  @Input('page') page: string = '';

  home: string = '';
  user: string = '';
  local: string = '';

  whichPage() {
    if (this.page === 'Home') {
      this.home = 'active';
    }
    else if (this.page === 'User') {
      this.user = 'active';
    }
    else if (this.page === 'Local') {
      this.local = 'active';
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.whichPage()
  }

}
