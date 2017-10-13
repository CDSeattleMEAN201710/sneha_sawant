import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quoteList = [];
  quote = {
    text : '',
    author : '',
    vote : 0,
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Inside Submit');
    console.log(this.quote);
    this.quoteList.push(this.quote);
    this.quote = {
      text : '',
      author : '',
      vote : 0,
    };
  }
}
