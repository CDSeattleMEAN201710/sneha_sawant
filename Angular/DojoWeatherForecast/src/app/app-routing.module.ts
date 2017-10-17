import { WeatherComponent } from './weather/weather.component';
import { SeattleweatherComponent } from './seattleweather/seattleweather.component';
import { SanjoseweatherComponent } from './sanjoseweather/sanjoseweather.component';
import { BurbankweatherComponent } from './burbankweather/burbankweather.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  component: WeatherComponent,
  },
  {
    path: 'seattle',
    pathMatch: 'full',
    component: SeattleweatherComponent
    },
    {
      path: 'sanjose',
      pathMatch: 'full',
      component: SanjoseweatherComponent
    },
    {
      path: 'burbank',
      pathMatch: 'full',
      component: BurbankweatherComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
