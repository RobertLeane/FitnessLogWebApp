import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';

import { WorkoutsList } from './workouts-list/workouts-list';

@NgModule({
  declarations: [
    WorkoutsList
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [WorkoutsList]
})
export class AppModule { }
