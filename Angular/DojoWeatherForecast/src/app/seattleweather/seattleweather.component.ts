import { Component, OnInit } from '@angular/core';
import { DojoweatherService } from './../dojoweather.service';

@Component({
  selector: 'app-seattleweather',
  templateUrl: './seattleweather.component.html',
  styleUrls: ['./seattleweather.component.css']
})
export class SeattleweatherComponent implements OnInit {
  cityname = 'seattle';

  constructor(private _dojoweatherService:  DojoweatherService) {
    this._dojoweatherService.retrieveWeatherdata(this.cityname);
  }

  ngOnInit() {
  }

}
