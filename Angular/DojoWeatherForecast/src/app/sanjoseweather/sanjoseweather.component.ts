import { Component, OnInit } from '@angular/core';
import { DojoweatherService } from './../dojoweather.service';

@Component({
  selector: 'app-sanjoseweather',
  templateUrl: './sanjoseweather.component.html',
  styleUrls: ['./sanjoseweather.component.css']
})
export class SanjoseweatherComponent implements OnInit {
  cityname = 'sanjose';


  constructor(private _dojoweatherService:  DojoweatherService) {
      this._dojoweatherService.retrieveWeatherdata(this.cityname);
    }

  ngOnInit() {
  }

}
