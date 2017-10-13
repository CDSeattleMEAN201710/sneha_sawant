import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addquote',
  templateUrl: './addquote.component.html',
  styleUrls: ['./addquote.component.css']
})
export class AddquoteComponent implements OnInit {
  quote = {
    text : '',
    author : ''
  };

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('Inside Submit');
    console.log(this.quote);
  }

}
