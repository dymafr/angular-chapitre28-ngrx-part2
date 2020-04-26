import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  template: '<router-outlet></router-outlet>',
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
