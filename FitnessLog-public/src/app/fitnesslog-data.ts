import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Workout } from './workouts-list/workouts-list';

@Injectable({
  providedIn: 'root',
})
export class FitnessLogData {
  constructor(private http: HttpClient) { }

  private apiBaseUrl = this.getApiBaseUrl();

  private getApiBaseUrl(): string {
    // In production (Render), use relative URL so it uses the same domain
    // In development, use localhost:443
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return 'https://localhost:443/api/';
    } else {
      return '/api/';
    }
  }

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

  public getCurrentUser(): Promise<any> {
    const url: string = `${this.apiBaseUrl}users/current`;
    return this.http
      .get(url, { withCredentials: true })
      .toPromise()
      .then(response => response)
      .catch(error => {
        console.error('Error fetching current user:', error);
        return null;
      });
  }
}
