import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

import { responseToCityWeather } from '../utils/response.utils';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { 

  }

  getCityWeatherByQuery(query: string): Observable<any>{
    const params = new HttpParams({fromObject: {q:query}});
    return this.doGet('weather',params)
    .pipe(map(response => responseToCityWeather(response)));
  }

  private doGet<T>(url: string, params: HttpParams): Observable<T>{
    params = params.append('appid', environment.apiKey);
    return this.http.get<T>(`https://api.openweathermap.org/data/2.5/${ url }`,{params});
  }
}
