import { Action, createReducer, on } from "@ngrx/store"

import * as homeActions from './home.actions';

export interface HomeState{
    entity: any;
    loading: boolean;
    error: boolean;
}

export const homeInitialState: HomeState = {
    entity: undefined,
    loading: false,
    error: false
}

const reducer = createReducer(
    homeInitialState,
    on(homeActions.loadCurrentWeather, state=>({
        ...state,
        loading: true,
        error: false
    })),
    on(homeActions.loadCurrentWeatherSuccess, (state,{entity})=> ({
        ...state,
        entity,
        loading:false,
    })),
    on(homeActions.loadCurrentWeatherFailure, state=>({
        ...state,
        loading: false,
        error: true
    }))
);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState{
    return reducer(state,action);
}