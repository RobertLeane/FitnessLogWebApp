import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Workout } from './workouts-list/workouts-list';

@Injectable({
  providedIn: 'root',
})
export class FitnessLogData {
  constructor(private http: HttpClient) { }

  public getWorkouts() : Promise<Workout[]> {
    // Our code will go here
    return Promise.resolve([]);
  }
}
