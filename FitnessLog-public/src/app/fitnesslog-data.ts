import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Workout } from './workouts-list/workouts-list';

@Injectable({
  providedIn: 'root',
})
export class FitnessLogData {
  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api/';

  public getWorkouts() : Promise<Workout[]> {
    const url: string = `${this.apiBaseUrl}workouts`;
    return this.http
      .get<Workout[]>(url)
      .toPromise()
      .then(response => {
        console.log('Workouts received from API:', response);
        return response || [];
      })
      .catch(error => {
        console.error('Error fetching workouts:', error);
        return [];
      });
  }
}
