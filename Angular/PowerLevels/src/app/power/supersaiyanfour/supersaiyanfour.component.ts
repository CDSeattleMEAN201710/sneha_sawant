import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css']
})
export class SupersaiyanfourComponent implements OnInit,OnChanges {
  @Input() mainpower;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.mainpower = this.mainpower * 500;
  }

}
