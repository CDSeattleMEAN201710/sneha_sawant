import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DojoweatherService {
  data;
  constructor(private _http: Http) { }

  retrieveWeatherdata(cityname) {
    this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&&APPID=16aa1315370bc5fe8f16cd9240c9c692').subscribe(
      (response) => { this.data = response.json(); },
      (error) => { console.log('Something is wrong', error); }
    );
  }

}
