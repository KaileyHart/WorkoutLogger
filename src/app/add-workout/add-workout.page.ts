import { Component, OnInit } from '@angular/core';
import {WorkoutService} from 'src/app/services/workout.service';
import {Workout} from "src/app/models/workout.model";

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.page.html',
  styleUrls: ['./add-workout.page.scss'],
})
export class AddWorkoutPage implements OnInit {

  constructor(public workoutService: WorkoutService) { }

  ngOnInit() {
  }

  workout = {
    
  }

  //Create workout
  create(workout: Workout) {
    console.log(this.workout)
    this.workoutService.createWorkouts(workout);
   
  }

}
