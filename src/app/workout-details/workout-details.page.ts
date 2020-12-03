import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {WorkoutService} from 'src/app/services/workout.service';
import {Workout} from "../interface/interface";
import { Details } from '../interface/interface';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.page.html',
  styleUrls: ['./workout-details.page.scss'],
})
export class WorkoutDetailsPage implements OnInit {
  private id: string;
  public workout: Details;
  workouts: Workout;



  constructor(private workoutService: WorkoutService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.loadWorkout();
  }

  loadWorkout() {
    this.workout = this.workoutService.getWorkout(this.id)
    console.log()
  }
  
  //Update workout
  update(workout: Workout) {
    this.workoutService.updateWorkouts(workout);
    console.log("updated")
  }

    //Gets single workout and id
    // getWorkout(id){
    //  this.workout.find((workout) => workout.id === id);
    // console.log(id, this.workout)
    // }

  //Delete workout
  delete(id) {
    this.workoutService.deleteWorkouts(this.id);
    console.log("deleted")
  
    console.log(this.id)
  }

}