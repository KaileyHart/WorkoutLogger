import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Workout} from "src/app/models/workout.model";
import { Details } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  public details: Details[] = [];

  constructor(private firestore: AngularFirestore) { }


  //Retrieves the bike workouts in Firestore
  getWorkouts() {
    return this.firestore.collection('workout').snapshotChanges();
  }

    //Gets single workout and id
    getWorkout(id): Details {
      return this.details.find((workout) => workout.id === id);
    }

  //Creates a bike workout in firestore
  createWorkouts(workout: Workout) {
    return this.firestore.collection('workout').add(workout)
  }

  //Updates a bike workout in firestore
  updateWorkouts(workout: Workout) {
   delete workout.id;
    this.firestore.doc('workout/' + workout.id).update(workout);
  }

  //Let's user delete their bike workout
  deleteWorkouts(id: string) {
    this.firestore.doc('workout/'+ id).delete();
  }
}
