import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {WorkoutService} from 'src/app/services/workout.service';
import {Workout} from "src/app/models/workout.model";
import { Details } from '../interface/interface';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})

export class HomePage implements OnInit {
  private id: string;
  workouts: Workout[];
  public workout: Details;

  constructor(public workoutService: WorkoutService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.workoutService.getWorkouts().subscribe(data => {
      this.workouts = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object),
        } as Workout;
      })
    })
      // this.id = this.route.snapshot.paramMap.get("id");
      // this.loadWorkout();
  }

  // loadWorkout() {
  //   this.workout = this.workoutService.getWorkout(this.id)
  //   console.log()
  // }


  // //Update workout
  // update(workout: Workout) {
  //   this.workoutService.updateWorkouts(workout);
  // }

  //Delete workout
  delete(id) {
    this.workoutService.deleteWorkouts(id);
    console.log("deleted")
    console.log(id)
  }

}
