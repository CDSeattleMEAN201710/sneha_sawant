import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quoteslist',
  templateUrl: './quoteslist.component.html',
  styleUrls: ['./quoteslist.component.css']
})
export class QuoteslistComponent implements OnInit {
  @Input() quoteList;
  vote: Number = 0;
  // quoteList: Array<object>;

  constructor() { }

  ngOnInit() {
  }

  VoteUp(quote) {
    quote.vote++;
  }

  VoteDown(quote) {
    quote.vote--;
  }

  onSubmitdelete(idx) {
    console.log('inside delete');
    console.log(idx);
    this.quoteList.splice(idx, 1);
  }

}
