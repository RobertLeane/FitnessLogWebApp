import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WorkoutsList } from './workouts-list/workouts-list';

@NgModule({
  declarations: [
    WorkoutsList
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [WorkoutsList]
})
export class AppModule { }
