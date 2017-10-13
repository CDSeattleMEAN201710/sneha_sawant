import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 })

export class AppComponent {
result: string ;
user = {
  firstName : '',
  lastName : '',
  email: '',
  password: '',
  Password_confirm: '',
  streetAddress: '',
  unit: '',
  city: '',
  state: '',
  feel: '',
};

onSubmit() {
console.log('I am inside submit');
this.result = 'Thank you for registering with us ' + ' ' + this.user.firstName + ' ' + this.user.lastName;
this.user = {
  firstName : '',
  lastName : '',
  email: '',
  password: '',
  Password_confirm: '',
  streetAddress: '',
  unit: '',
  city: '',
  state: '',
  feel: '',
};

}
}
