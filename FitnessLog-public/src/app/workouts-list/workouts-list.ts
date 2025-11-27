import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FitnessLogData } from '../fitnesslog-data';

export class Workout {
  id!: string;
  title!: string;
  duration!: number;
  description!: string;
  intensity!: string;
  date!: Date;
}

@Component({
  selector: 'app-workouts-list',
  standalone: false,
  templateUrl: './workouts-list.html',
  styleUrls: ['./workouts-list.css'],
  providers: [FitnessLogData]
})
export class WorkoutsList implements OnInit {
  
  constructor(
    private fitnessLogData: FitnessLogData,
    private cdr: ChangeDetectorRef
  ) { }
  
  workouts: Workout[] = [];
  totalSessions: number = 0;
  totalTime: string = '0h 0m';
  averageDuration: string = '0m';
  userFirstName: string = '';
  userEmail: string = '';
  isAuthenticated: boolean = false;

  private getWorkouts(): void {
    console.log('Getting workouts...');
    this.fitnessLogData
    .getWorkouts()
    .then(foundWorkouts => {
      console.log('Workouts received in component:', foundWorkouts);
      this.workouts = foundWorkouts;
      console.log('Component workouts array:', this.workouts);
      this.calculateStats();
      this.cdr.detectChanges();
    })
    .catch(error => {
      console.error('Error in getWorkouts:', error);
    });
  }

  private calculateStats(): void {
    this.totalSessions = this.workouts.length;
    
    // Calculate total time (sum all durations)
    const totalMinutes = this.workouts.reduce((sum, workout) => {
      const duration = parseInt(workout.duration.toString()) || 0;
      return sum + duration;
    }, 0);
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    this.totalTime = `${hours}h ${minutes}m`;
    
    // Calculate average duration
    if (this.totalSessions > 0) {
      const avgMinutes = Math.round(totalMinutes / this.totalSessions);
      this.averageDuration = `${avgMinutes}m`;
    } else {
      this.averageDuration = '0m';
    }
  }

  ngOnInit() {
    this.getWorkouts();
    this.getCurrentUser();
  }

  private getCurrentUser(): void {
    this.fitnessLogData.getCurrentUser()
      .then(user => {
        if (user) {
          this.userFirstName = user.firstName || 'User';
          this.userEmail = user.email || '';
          this.isAuthenticated = true;
          this.cdr.detectChanges();
        }
      })
      .catch(err => {
        console.log('Not logged in or error fetching user');
        this.isAuthenticated = false;
      });
  }

}
