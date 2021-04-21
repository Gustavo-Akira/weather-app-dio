import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { CityWeather } from 'src/app/shared/models/weather.model';

import * as homeActions from '../../state/home.actions';
import * as homeSelectors from '../../state/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  cityWeather: CityWeather;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  searchControl: FormControl;
  text: string;

  private componentDestroyed$ = new Subject();

  constructor(private store: Store) { 
    
  }

  

  ngOnInit(): void {
    this.searchControl = new FormControl('',Validators.required);
    this.store
    .pipe(
      select(homeSelectors.selectCurrentWeather),
      takeUntil(this.componentDestroyed$)
    )
    .subscribe(value=>{ 
      this.cityWeather = value;
    });
    this.loading$ = this.store.pipe(select(homeSelectors.selectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(homeSelectors.selectCurrentWeatherError));
  }

  ngOnDestroy(): void{
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }
  
  doSearch(){
    const query = this.searchControl.value;
    this.store.dispatch(homeActions.loadCurrentWeather({query}));
  }

  onToggleBookmark(){
    const bookmark: Bookmark = new Bookmark();
    bookmark.id = this.cityWeather.city.id;
    bookmark.name = this.cityWeather.city.name;
    bookmark.country = this.cityWeather.city.country;
    bookmark.coord = this.cityWeather.city.coord;
  }
}
