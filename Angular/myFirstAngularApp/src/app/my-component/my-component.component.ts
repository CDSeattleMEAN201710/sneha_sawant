import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Car } from './car';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  a: number;
  cars: Array<Car>;
  constructor() { }

  ngOnInit() {
    this.a = 10;
    this.cars = [
      {
        make: "Ford",
        model: "Fiesta",
        year: 2005,
        numbers: [1,2,3]
      },
      {
        make: "Honda",
        model: "Civic",
        year: 2013,
        numbers: [5,6,7,8]
      }
    ];
   }

}
