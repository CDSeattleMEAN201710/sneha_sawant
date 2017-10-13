import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnInit, OnChanges {
  @Input() mainpower;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.mainpower = this.mainpower * 250;
  }
}
