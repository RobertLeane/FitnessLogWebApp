import { Component, OnInit } from '@angular/core';
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
  
  constructor(private fitnessLogData: FitnessLogData) { }
  
  workouts: Workout[] = [];
  private getWorkouts(): void {
    this.fitnessLogData
    .getWorkouts()
    .then(foundWorkouts => {
      this.workouts = foundWorkouts;
    });
  }

  ngOnInit() {
    this.getWorkouts();
  }

}
