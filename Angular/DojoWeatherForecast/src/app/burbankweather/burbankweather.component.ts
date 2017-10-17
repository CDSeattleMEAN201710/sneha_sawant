import { Component, OnInit } from '@angular/core';
import { DojoweatherService } from './../dojoweather.service';

@Component({
  selector: 'app-burbankweather',
  templateUrl: './burbankweather.component.html',
  styleUrls: ['./burbankweather.component.css']
})
export class BurbankweatherComponent implements OnInit {
  cityname = 'burbank';

  constructor(private _dojoweatherService:  DojoweatherService) {
      this._dojoweatherService.retrieveWeatherdata(this.cityname);
      }

  ngOnInit() {
  }

}
