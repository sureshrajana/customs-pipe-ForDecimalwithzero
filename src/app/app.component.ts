import { Component } from '@angular/core';

export interface Person {
  name: string;
  age: number;
  country: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  people: Person[] = [];
  searchTerm: string;
  names = ['Maverick', 'Stanislav', 'Arxero', 'Feruchio', 'Mavericus', 'Arxiour'];
vale=23
valwithdemial=56.6632434

  constructor() {
    this.names.forEach((e, i) => this.people.push({
      name: e,
      age: i + 20,
      country: 'Bulgaria'
    }));
  }
}
