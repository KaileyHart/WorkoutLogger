import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: 'add-workout',
    loadChildren: () => import('./add-workout/add-workout.module').then( m => m.AddWorkoutPageModule)
  },
  {
    path: 'workout-details',
    loadChildren: () => import('./workout-details/workout-details.module').then( m => m.WorkoutDetailsPageModule)
  },
  {
    path: 'workout-details/:id',
    loadChildren: () => import('./workout-details/workout-details.module').then( m => m.WorkoutDetailsPageModule)
  },
  {
    path: 'update-workout',
    loadChildren: () => import('./update-workout/update-workout.module').then( m => m.UpdateWorkoutPageModule)
  },
  {
    path: 'update-workout/:id',
    loadChildren: () => import('./update-workout/update-workout.module').then( m => m.UpdateWorkoutPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
