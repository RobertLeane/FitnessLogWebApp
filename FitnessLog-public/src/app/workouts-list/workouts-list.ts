import { Component, OnInit } from '@angular/core';

export class Location {
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
  styleUrl: './workouts-list.css',
})
export class WorkoutsList implements OnInit {
  
  constructor() { }
  name = "Yoga";
  ngOnInit() {}

}
