import { Component, OnInit, Input , OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css']
})
export class SupersaiyantwoComponent implements OnInit,OnChanges{
  @Input() mainpower;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.mainpower = this.mainpower * 150;
  }
}
