import { Component, OnInit } from '@angular/core';

import { Mail } from './mail'

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  mails: Array<object>;
  constructor() { }

  ngOnInit() {
    this.mails = [
      {
        email: 'bill@gates.com',
        importance: true,
        subject: 'New Windows',
        content: 'Windows Xi will launch in year 2100',
      },
      {
        email: 'ada@lovelace.com',
        importance: true,
        subject: 'Programming',
        content: 'Enchantress of numebrs',
      },
      {
        email: 'john@carmac.com',
        importance: false,
        subject: 'Updates Algo',
        content: 'Enchantress of numebrs',
      },
      {
        email: 'gabe@newel.com',
        importance: false,
        subject: 'HL3!',
        content: 'Enchantress of numebrs',
      }

    ];

  }

}
