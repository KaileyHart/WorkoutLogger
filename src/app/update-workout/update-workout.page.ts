import { Component, OnInit } from '@angular/core';
import {WorkoutService} from 'src/app/services/workout.service';
import { ActivatedRoute } from "@angular/router";
import {Workout} from "src/app/models/workout.model";
import { Details } from '../interface/interface';

@Component({
  selector: 'app-update-workout',
  templateUrl: './update-workout.page.html',
  styleUrls: ['./update-workout.page.scss'],
})
export class UpdateWorkoutPage implements OnInit {
  private slug: string;
  public workout: Details;
  workouts: Workout[];


  constructor(public workoutService: WorkoutService ,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get("id");
    this.loadWorkout();
  }

  loadWorkout() {
    this.workout = this.workoutService.getWorkout(this.slug)
    console.log()
  }


  //Update workout
  update(workout: Workout) {
    this.workoutService.updateWorkouts(workout);
    console.log("updated")
  }

}
