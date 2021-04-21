import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailedWeatherComponent{
  @Input() weatherIn: Weather;
  
  get weatherIcon(): string {
    return `http://openweathermap.org/img/wn/${this.weatherIn.icon}@2x.png`;
  }
  
  transformKelvinToCelsius(kelvin: number) : number{
    return Math.round(kelvin - 273);
  }
}
