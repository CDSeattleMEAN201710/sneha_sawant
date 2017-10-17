import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DojoweatherService } from './dojoweather.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SeattleweatherComponent } from './seattleweather/seattleweather.component';
import { SanjoseweatherComponent } from './sanjoseweather/sanjoseweather.component';
import { BurbankweatherComponent } from './burbankweather/burbankweather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SeattleweatherComponent,
    SanjoseweatherComponent,
    BurbankweatherComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DojoweatherService],
  bootstrap: [AppComponent]
})

export class AppModule { }
