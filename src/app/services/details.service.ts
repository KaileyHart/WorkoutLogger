import { Component, Injectable } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class DetailsService {
  public bikeHistory: any;
  constructor(
    private firestore: AngularFirestore,
    private db: AngularFirestore
  ) {}

  bikeForm = new FormGroup({
    distance: new FormControl(""),
    length: new FormControl(""),
    calories: new FormControl(""),
    speed: new FormControl(""),
  });

  // bikeHistory = {
  //   distance: "",
  //   length: "",
  //   calories: "",
  //   speed: "",
  // };

  onSubmit(event) {
    event.preventDefault();

    const { distance, length, calories, speed } = this.bikeHistory;

    this.db
      .collection("bike")
      .add({
        distance: distance,
        length: length,
        calories: calories,
        speed: speed,
      })
      .then((docRef) => {
        console.log("doc written with:", docRef.id);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }

  onChange = (event) => {
    this.bikeHistory({ [event.target.name]: event.target.value });
  };

  // createBikeWorkout(data) {
  //   return new Promise<any>((resolve, reject) => {
  //     this.firestore
  //       .collection("bike")
  //       .add(data)
  //       .then(
  //         (res) => {},
  //         (err) => reject(err)
  //       );
  //   });
  //}
}
