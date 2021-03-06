import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';



@NgModule({
  declarations: [
    LoaderComponent,
    DetailedWeatherComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoaderComponent,
    DetailedWeatherComponent
  ]
})
export class ComponentsModule { }
